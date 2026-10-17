export interface WorshipSchedule {
  id: string;
  category: 'morning' | 'afternoon';
  name: string;
  dayTime: string;
  description?: string;
  orderSummary?: string[];
}

export interface ChurchPhoto {
  id: string;
  title: string;
  category: 'space' | 'view';
  categoryLabel: string;
  url: string;
  date: string;
  description?: string;
}

export interface ChurchEvent {
  date: string;
  title: string;
  note?: string;
}

export interface MemoryVerse {
  month: string;     // e.g. '1월'
  reference: string; // e.g. '요한복음 3:16'
  verse: string;     // '\n' marks a line break
}

export interface OfferingAccount {
  id: string;
  category: string;
  subtitle: string;
  bank: string;
  accountNumber: string;
  holder: string;
  description?: string;
  recommendedFor?: string[];
}

export interface PastorInfo {
  name: string;
  title: string;
  education: string[];
  photoUrl: string;
  bibleVerse: {
    verse: string;
    reference: string;
  };
}

export interface ChurchInfo {
  name: string;
  englishName: string;
  domainName: string;
  slogan: string;
  subSlogan: string;
  denomination: string;
  pastor: PastorInfo;
  address: string;
  addressDetail: string;
  postalCode: string;
  phone: string;
  email: string;
  publicTransit: {
    subway?: { line: string; station: string; exit: string; walkingTime: string }[];
    bus: { stopName: string; walkingTime: string; note?: string }[];
    car: string[];
    parking: string;
  };
}
