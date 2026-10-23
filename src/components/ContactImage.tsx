import React from 'react';

// Anti-scraping: the phone number and email never appear as text in the HTML/JS.
// They are shown as images (public/contact/*.png) and the tel:/mailto: targets are
// decoded only when the visitor clicks. ponytail: base64 stops naive crawlers only;
// a determined scraper can still decode the bundle.
const PHONE = 'MDEwLTk4NDktMjEwMA==';
const EMAIL = 'aGVhdmVuc3ZvaWNlY2h1cmNoQGdtYWlsLmNvbQ==';

export const dialChurch = () => {
  window.location.href = `tel:${atob(PHONE).replace(/\D/g, '')}`;
};

export const mailChurch = () => {
  window.location.href = `mailto:${atob(EMAIL)}`;
};

interface ContactImageProps {
  kind: 'phone' | 'email';
  /** dark text for light backgrounds, light text for dark backgrounds */
  tone?: 'dark' | 'light';
  className?: string;
}

// Rendered at 64px font / 80px line box, so h-[1.25em] matches the surrounding text size.
export const ContactImage: React.FC<ContactImageProps> = ({ kind, tone = 'dark', className = '' }) => (
  <img
    src={`${import.meta.env.BASE_URL}contact/${kind}-${tone}.png`}
    alt={kind === 'phone' ? '하늘소리교회 대표 전화번호' : '하늘소리교회 이메일 주소'}
    className={`inline-block h-[1.25em] w-auto align-middle select-none ${className}`}
    draggable={false}
  />
);
