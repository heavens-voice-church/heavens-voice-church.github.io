export interface WorshipSchedule {
  id: string;
  category: 'morning' | 'afternoon';
  name: string;
  dayTime: string;
  isOnlineLive?: boolean;
  description?: string;
  orderSummary?: string[];
}

// export interface ChurchPhoto {
//   id: string;
//   title: string;
//   category: 'worship' | 'fellowship' | 'season';
//   categoryLabel: string;
//   url: string;
//   date: string;
//   description?: string;
// }

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
  denomination: string;
  greetingTitle: string;
  greetingMessage: string[];
  philosophy: {
    title: string;
    description: string;
  }[];
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
  officeHours: string;
  youtubeChannel: string;
  instagram: string;
  publicTransit: {
    subway?: { line: string; station: string; exit: string; walkingTime: string }[];
    bus: { stopName: string; walkingTime: string; note?: string }[];
    car: string[];
    parking: string;
  };
  offeringAccounts: OfferingAccount[];
}
