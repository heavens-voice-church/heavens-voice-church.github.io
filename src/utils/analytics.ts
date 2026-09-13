declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * SPA 환경 내 가상 페이지뷰(Virtual Pageview) 추적
 * 탭 전환 시 호출되어 GA4에 페이지 이동으로 기록됩니다.
 */
export const trackPageView = (tabName: string, title?: string): void => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: `/#${tabName}`,
      page_title: title || `하늘소리교회 - ${tabName}`,
      page_location: window.location.href,
    });
  }
};

/**
 * 주요 사용자 액션(전화 걸기, 계좌 복사, 길찾기 등) 커스텀 이벤트 추적
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
): void => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
};
