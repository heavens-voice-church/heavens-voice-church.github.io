import React, { useEffect, useRef, useState } from 'react';
import { churchInfo } from '../data/churchData';
import {
  MapPin,
  Navigation,
  Train,
  Bus,
  Car,
  Copy,
  Check,
  Phone,
  Clock,
  Mail,
  ExternalLink,
  ShieldCheck,
  Building2,
  Calendar,
  Eye,
  MessageSquare,
  Loader2,
  AlertTriangle
} from 'lucide-react';

const KAKAO_SDK_SCRIPT_ID = 'kakao-maps-sdk';

type KakaoMapStatus = 'loading' | 'ready' | 'error' | 'missing-key';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showTraffic, setShowTraffic] = useState(false);
  const [mapStatus, setMapStatus] = useState<KakaoMapStatus>('loading');
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const handleCopyAddress = async () => {
    const fullAddress = `${churchInfo.address} ${churchInfo.addressDetail}`;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(fullAddress);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = fullAddress;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('주소 복사 실패:', err);
    }
  };

  // Kakao Map Specific Coordinate & Links
  const churchCoords = { lat: 37.72807215105674, lng: 126.55904540088451 };
  const kakaoMapToUrl = `https://map.kakao.com/link/to/하늘소리교회,${churchCoords.lat},${churchCoords.lng}`;
  const kakaoMapDirectUrl = `https://map.kakao.com/link/map/하늘소리교회,${churchCoords.lat},${churchCoords.lng}`;
  const kakaoRoadviewUrl = `https://map.kakao.com/link/roadview/${churchCoords.lat},${churchCoords.lng}`;

  // Kakao Maps JavaScript SDK: load the script once, then initialize the real map.
  useEffect(() => {
    const appKey = import.meta.env.VITE_KAKAO_MAP_APP_KEY;
    if (!appKey) {
      setMapStatus('missing-key');
      return;
    }

    const initializeMap = () => {
      if (!mapContainerRef.current) return;

      const center = new window.kakao.maps.LatLng(churchCoords.lat, churchCoords.lng);
      const map = new window.kakao.maps.Map(mapContainerRef.current, {
        center,
        level: 4,
      });
      mapInstanceRef.current = map;

      const marker = new window.kakao.maps.Marker({ position: center });
      marker.setMap(map);

      const label = new window.kakao.maps.CustomOverlay({
        position: center,
        yAnchor: 1.4,
        content:
          '<div style="padding:4px 10px;border-radius:8px;background:#0f172a;border:1px solid rgba(255,255,255,0.2);color:#fff;font-size:12px;font-weight:700;white-space:nowrap;">하늘소리교회</div>',
      });
      label.setMap(map);

      map.addControl(new window.kakao.maps.ZoomControl(), window.kakao.maps.ControlPosition.RIGHT);

      setMapStatus('ready');
    };

    if (window.kakao && window.kakao.maps) {
      initializeMap();
      return;
    }

    const existingScript = document.getElementById(KAKAO_SDK_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener('load', () => window.kakao.maps.load(initializeMap));
      existingScript.addEventListener('error', () => setMapStatus('error'));
      return;
    }

    const script = document.createElement('script');
    script.id = KAKAO_SDK_SCRIPT_ID;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
    script.async = true;
    script.onload = () => window.kakao.maps.load(initializeMap);
    script.onerror = () => setMapStatus('error');
    document.head.appendChild(script);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Toggle the live Kakao traffic overlay on top of the real map.
  useEffect(() => {
    if (mapStatus !== 'ready' || !mapInstanceRef.current || !window.kakao) return;
    const { TRAFFIC } = window.kakao.maps.MapTypeId;
    if (showTraffic) {
      mapInstanceRef.current.addOverlayMapTypeId(TRAFFIC);
    } else {
      mapInstanceRef.current.removeOverlayMapTypeId(TRAFFIC);
    }
  }, [showTraffic, mapStatus]);

  return (
    <div id="location" className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-sky-500" />
            <span>오시는 길 & 교회 연락처</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif-kr">
            하늘소리교회 <span className="text-sky-600">찾아오시는 길 & 연락처</span>
          </h2>
        </div>

        {/* Church Direct Contact Grid (Prominent Contact Info) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* 1. Phone */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Phone className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-left min-w-0">
              <span className="text-xs font-semibold text-slate-500">대표전화 / 목양실</span>
              <a
                href={`tel:${churchInfo.phone}`}
                className="block text-base sm:text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors"
              >
                {churchInfo.phone}
              </a>
              <p className="text-[11px] text-sky-600 font-medium">터치 시 바로 전화 연결</p>
            </div>
          </div>

          {/* 2. Office Hours */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Clock className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-left min-w-0">
              <span className="text-xs font-semibold text-slate-500">사무실 상담/안내 시간</span>
              <p className="text-sm font-bold text-slate-900">
                09:00 ~ 17:00
              </p>
              <p className="text-[11px] text-slate-500">월~토요일 운영</p>
            </div>
          </div>

          {/* 3. Email */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Mail className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-left min-w-0">
              <span className="text-xs font-semibold text-slate-500">교회 공식 이메일</span>
              <a
                href={`mailto:${churchInfo.email}`}
                className="block text-xs sm:text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors truncate"
              >
                {churchInfo.email}
              </a>
              <p className="text-[11px] text-slate-500">서면 문의</p>
            </div>
          </div>

        </div>

        {/* Address & Quick Copy Banner */}
        <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-sky-300" />
              <span>교회 주소</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-kr">
              {churchInfo.address}
            </h3>
            <p className="text-xs sm:text-sm text-sky-100">
              {churchInfo.addressDetail} (우편번호 {churchInfo.postalCode})
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleCopyAddress}
              className="flex-1 md:flex-initial px-4 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs border border-white/20"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '주소 복사 완료!' : '주소 복사하기'}</span>
            </button>

            {/* Kakao Map Exclusive Buttons */}
            <a
              href={kakaoMapToUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-4 py-3 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#191919]" />
              <span>길찾기</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#191919]/70" />
            </a>

            {/* <a
              href={kakaoMapDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-4 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>지도</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a> */}
          </div>
        </div>

        {/* Map Visual & Transportation Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Kakao Map Preview Container (Left 6 Cols) */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl overflow-hidden shadow-md border border-slate-800 text-white flex flex-col justify-between">

            {/* Top Kakao Map Style Header Controls */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEE500] inline-block" />
                <span className="font-bold text-white">카카오맵</span>
                <span className="text-[10px] text-slate-400">하늘소리교회 위치</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setShowTraffic(!showTraffic)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer ${
                    showTraffic ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  교통정보
                </button>
                <a
                  href={kakaoRoadviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Eye className="w-3 h-3 text-[#FEE500]" />
                  <span>로드뷰</span>
                </a>
              </div>
            </div>

            {/* Real Kakao Map */}
            <div className="relative h-80 sm:h-96 w-full bg-slate-900">
              <div ref={mapContainerRef} className="absolute inset-0 w-full h-full" />

              {mapStatus === 'loading' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-900 text-slate-300 text-xs">
                  <Loader2 className="w-6 h-6 animate-spin text-sky-400" />
                  <span>지도를 불러오는 중입니다...</span>
                </div>
              )}

              {mapStatus === 'error' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-900 text-slate-300 text-xs text-center px-6">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                  <p>지도를 불러오지 못했습니다.<br />네트워크 상태를 확인하시거나 아래 버튼으로 카카오맵을 열어주세요.</p>
                  <a
                    href={kakaoMapDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#FEE500] text-[#191919] font-bold flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>카카오맵에서 보기</span>
                  </a>
                </div>
              )}

              {mapStatus === 'missing-key' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-900 text-slate-300 text-xs text-center px-6">
                  <MapPin className="w-6 h-6 text-sky-400" />
                  <p>
                    카카오맵 API 키가 설정되지 않았습니다.<br />
                    <code className="text-[11px] bg-slate-800 px-1.5 py-0.5 rounded">VITE_KAKAO_MAP_APP_KEY</code> 환경 변수를 등록해주세요.
                  </p>
                  <a
                    href={kakaoMapDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#FEE500] text-[#191919] font-bold flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>카카오맵에서 보기</span>
                  </a>
                </div>
              )}
            </div>

            {/* Kakao Navigation Quick Bar */}
            <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FEE500]" />
                <span>교회사무실: <strong className="text-white">{churchInfo.phone}</strong></span>
              </div>

              <a
                href={kakaoMapToUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#FEE500] text-[#191919] font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#FADA0A] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>길안내 바로시작</span>
              </a>
            </div>
          </div>

          {/* Transit Detailed Steps (Right 6 Cols) */}
          <div className="lg:col-span-6 space-y-5">

            {/* Bus */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 text-left">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base font-serif-kr">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Bus className="w-4 h-4" />
                </div>
                <span>시내버스 이용 안내</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-600">
                {churchInfo.publicTransit.bus.map((b, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-bold text-slate-800 text-sm">{b.stopName} 정류장</p>
                      {b.note && <p className="text-slate-500 text-[11px] mt-0.5">{b.note}</p>}
                    </div>
                    <span className="text-sky-600 font-semibold whitespace-nowrap">{b.walkingTime}</span>
                  </div>
                ))}
                <p className="text-slate-400 text-[11px] pt-1">
                  ※ 시내버스 노선은 시간대에 따라 다르니 카카오맵·네이버지도 길찾기에서 실시간 노선을 확인해 주세요.
                </p>
              </div>
            </div>

            {/* Parking & Car */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 text-left">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base font-serif-kr">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Car className="w-4 h-4" />
                </div>
                <span>자가용 및 주차 안내</span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <p>• <strong>네비게이션 검색</strong>: <em>"하늘소리교회"</em> 또는 <em>"{churchInfo.address}"</em></p>
                <p className="leading-relaxed pt-1 text-slate-700">
                  • {churchInfo.publicTransit.parking}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
