import {
  ChurchInfo,
  WorshipSchedule,
  ChurchPhoto,
  OfferingAccount
} from '../types';

export const churchOfferingAccounts: OfferingAccount[] = [
  {
    id: 'offering-1',
    category: '감사헌금',
    subtitle: '범사에 베풀어주신 은혜에 대한 감사',
    bank: '국민은행',
    accountNumber: '535901-01-396982',
    holder: '하늘소리교회',
    description: '생일, 승진, 회복, 범사감사 및 절기 감사헌금 전용 계좌입니다.',
    recommendedFor: ['범사감사','절기감사']
  },
  {
    id: 'offering-2',
    category: '비전 / 시설 헌금',
    subtitle: '은혜의 예배 처소와 성전 가꾸기',
    bank: '국민은행',
    accountNumber: '987-654321-02008',
    holder: '하늘소리교회',
    description: '예배당 환경 개선 및 복음 사역을 위한 목적 헌금입니다.',
    recommendedFor: ['성전가꾸기', '비전헌금']
  }
];

export const churchInfo: ChurchInfo = {
  name: '하늘소리교회',
  englishName: "Heaven's voice Church",
  domainName: 'heavens-voice-church.github.io',
  slogan: '신앙은 복음적이고, 생명은 풍성하며, 삶은 거룩하게',
  subSlogan: '기독교대한복음교회 교단 정신에 따라 오직 성경과 복음의 진리 위에 서는 교회',
  denomination: '기독교대한복음교회',
  pastor: {
    name: '유숙연 목사',
    title: '담임목사',
    denomination: '기독교대한복음교회',
    greetingTitle: '복음의 진리 안에서 자유와 생명을 누리는 신앙 공동체에 오신 것을 환영합니다.',
    greetingMessage: [
      '하늘소리교회 웹페이지를 찾아주신 모든 성도님과 방문자 여러분을 주님의 이름으로 진심으로 환영하고 축복합니다.',
      '기독교대한복음교회는 "신앙은 복음적이고 생명적이어라, 신학은 충분히 학문적이어라, 교회는 한국인 자신의 교회이어라"라는 자랑스러운 3대 표어 위에 서 있습니다.',
      '우리 하늘소리교회는 형식적인 종교 생활을 넘어, 예수 그리스도의 십자가 복음과 참된 생명의 말씀을 삶 속에서 실천하는 거룩한 공동체입니다.',
      '주일 오전과 오후, 온 성도가 한마음으로 드리는 정결한 예배를 통해 하늘의 평강과 영적 치유를 경험하시기를 간절히 기도합니다.'
    ],
    philosophy: [
      {
        title: '복음 중심의 신앙',
        description: '인간의 전통이나 교권보다 오직 기록된 하나님의 말씀과 예수 그리스도의 복음을 가장 높은 권위로 삼습니다.'
      },
      {
        title: '생명을 살리는 예배',
        description: '주일 오전과 오후, 성령과 진리로 드려지는 정결하고 뜨거운 예배를 통해 영혼이 회복되고 새 힘을 얻습니다.'
      },
      {
        title: '이웃을 향한 거룩한 실천',
        description: '세상 속에서 그리스도의 사랑과 정의를 실천하며, 빛과 소금의 사명을 감당하는 참된 그리스도인을 양육합니다.'
      }
    ],
    education: [
      '25년간 목사의 아내로 교우와 지역주민 돌봄 사역',
      '이화여자대학교 신학대학원 졸업(Th.M)',
      '(전) 연세의료원 신촌세브란스병원 원목실 목사로 환우와 직원 돌봄 사역',
      '(전) (주)쓰리제이 사목으로 직장인 돌봄 사역',
      '(전) 수원성교회 새가족부 총괄목사, 싱글여성사역 담당목사로 사역',
      '(현) 기독교대한복음교회 소속 목사',
      '(현) 한국임상목회교육협회(KCPE) 수퍼바이저',
      '(현) 한국목회상담협회(KAPC) 상담사, 소울프렌드 소속 상담사',
      '(현) 목회자유가족협의회 이사',
      '(현) 하늘봄센터 대표'
    ],
    photoUrl: `${import.meta.env.BASE_URL}church-main.jpg`,
    bibleVerse: {
      verse: '기뻐하는 사람들과 함께 기뻐하고, 우는 사람들과 함께 우십시오',
      reference: '로마서 12장 15절(새번역)'
    }
  },
  address: '경기도 김포시 용강로 100',
  addressDetail: '하늘소리교회 예배당',
  postalCode: '10021',
  phone: '010-9849-2100',
  email: 'heavensvoicechurch@gmail.com',
  officeHours: '월요일 ~ 토요일 09:00 ~ 17:00',
  youtubeChannel: 'https://www.youtube.com/@haneulsorichurch',
  instagram: 'https://www.instagram.com/haneulsori_church',
  publicTransit: {
    bus: [
      { stopName: '고막리마을회관', walkingTime: '도보 약 5분', note: '교회에서 가장 가까운 정류장' },
      { stopName: '군하리', walkingTime: '도보 약 15분', note: '광역버스 이용 시 하차 정류장' }
    ],
    car: [
      '카카오맵·네비게이션: "하늘소리교회" 또는 "경기도 김포시 용강로 100" 검색'
    ],
    parking: '교회 내 주차가 가능합니다.'
  },
  offeringAccounts: churchOfferingAccounts
};

// Worship Schedules: Only 주일 오전 예배 and 주일 오후 예배
export const worshipSchedules: WorshipSchedule[] = [
  {
    id: 'worship-morning',
    category: 'morning',
    name: '주일 오전 예배',
    dayTime: '매주 주일 오전 11:00',
    isOnlineLive: true,
    description: '오직 하나님께 영광을 돌리는 경건한 찬양과 성경 중심의 강해 설교로 드려지는 예배입니다.',
    orderSummary: [
      '예배의 부름',
      '찬양과 경배',
      '성시 교독 및 신앙고백',
      '대표 기도',
      '성경 봉독',
      '말씀 선포 (담임목사)',
      '봉헌 및 봉헌 기도',
      '교회 소식 및 교제',
      '축도'
    ]
  },
  {
    id: 'worship-afternoon',
    category: 'afternoon',
    name: '주일 오후 예배',
    dayTime: '매주 주일 오후 01:30',
    isOnlineLive: true,
    description: '말씀의 깊은 은혜를 나누고 뜨거운 찬양과 합심 기도로 한 주간 세상으로 나아갈 영적 능력을 공급받는 예배입니다.',
    orderSummary: [
      '오프닝 찬양과 경배',
      '공동 기도',
      '성경 봉독',
      '말씀 나눔과 성경 강해',
      '합심 중보기도 (교회, 나라, 열방)',
      '파송 찬양 및 축도'
    ]
  }
];

// Single source of truth for displaying worship times elsewhere (Header, SocialMediaSection, etc.)
// so the schedule never drifts out of sync with worshipSchedules above.
const getSchedule = (category: WorshipSchedule['category']): WorshipSchedule =>
  worshipSchedules.find((w) => w.category === category)!;

/** e.g. '오전 11:00' / '오후 01:30' */
export const getWorshipTimeLabel = (category: WorshipSchedule['category']): string =>
  getSchedule(category).dayTime.replace('매주 주일 ', '');

/** e.g. '11:00' / '01:30' */
export const getWorshipClockTime = (category: WorshipSchedule['category']): string =>
  getSchedule(category).dayTime.match(/\d{1,2}:\d{2}/)?.[0] ?? '';

export const defaultCuratedPhotos: ChurchPhoto[] = [
  {
    id: 'photo-1',
    title: '하늘소리교회 예배당 전경',
    category: 'fellowship',
    categoryLabel: '성도의 교제 & 전경',
    url: `${import.meta.env.BASE_URL}church-main.jpg`,
    date: '2024.08',
    description: '김포 문수산 자락 아래 자리 잡은 아름다운 하늘소리교회 예배당 전경입니다.'
  },
  {
    id: 'photo-2',
    title: '주일 오전 예배 찬양과 기도',
    category: 'worship',
    categoryLabel: '주일 예배',
    url: `${import.meta.env.BASE_URL}church-main.jpg`,
    date: '2024.08',
    description: '하나님의 임재를 사모하며 영과 진리로 올려드리는 경건한 예배의 순간입니다.'
  },
  {
    id: 'photo-3',
    title: '성도들의 따뜻한 교제',
    category: 'fellowship',
    categoryLabel: '성도의 교제 & 전경',
    url: `${import.meta.env.BASE_URL}church-main.jpg`,
    date: '2024.07',
    description: '예배 후 서로를 축복하고 사랑으로 섬기는 하늘소리 공동체의 모습입니다.'
  },
  {
    id: 'photo-4',
    title: '교단 및 특별 연합 행사',
    category: 'season',
    categoryLabel: '교단 및 특별행사',
    url: `${import.meta.env.BASE_URL}church-main.jpg`,
    date: '2024.06',
    description: '기독교대한복음교회 복음 정신을 되새기며 복음 전파를 다짐하는 특별 집회입니다.'
  }
];
