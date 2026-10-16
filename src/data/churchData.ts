import {
  ChurchInfo,
  WorshipSchedule,
  ChurchPhoto,
  OfferingAccount,
  ChurchEvent,
  MemoryVerse
} from '../types';

export const churchOfferingAccounts: OfferingAccount[] = [
  {
    id: 'offering-1',
    category: '온라인 헌금',
    subtitle: '하늘소리교회 온라인 헌금 계좌',
    bank: '국민은행',
    accountNumber: '535901-01-396982',
    holder: '하늘소리교회',
    description: '십일조, 감사헌금, 절기헌금 등 모든 헌금을 이 계좌 하나로 온라인 송금하실 수 있습니다.',
    recommendedFor: ['십일조', '감사헌금', '절기헌금']
  }
];

// 2026년 교회 표어
export const yearMotto = {
  year: 2026,
  title: '은혜의 50년',
  motto: '하늘소리, 세상의 빛이어라',
  verse: '',
  reference: '마태복음 5:14'
};

// 교회 소개글
export const churchIntro = {
  paragraphs: [
    '하늘소리교회는 기독교대한복음교회에 속한 교회로 1976년 창립되어, 2006년 이곳 김포시 월곶면으로 이전하였고, 2023년 교회 이름 천성교회를 순우리말인 하늘소리교회로 변경하였습니다.',
    '그동안 헌신적인 목회자들이 목회하였고, 팬데믹 이후 2023년부터 설교목사 중 한 분이었던 유숙연 목사가 7대 담임목회자로 청빙되어 2026년 2월 8일 취임식을 하고, 복음적인 말씀 선포와 청년 중심의 교육과 섬김의 훈련을 통하여 아름다운 공동체로 나아가고 있습니다.'
  ],
  invitation: [
    '말씀이 살아있고, 아름다운 성만찬을 나누는 교회,',
    '청년을 사랑하는 교회, 자연 친화적인 교회,',
    '함께 기뻐하고 함께 슬퍼하는 믿음 공동체, 하늘소리교회로 여러분을 초대합니다.'
  ]
};

// 섬기는 사람들: 장로 등 직분자 (항목을 추가하면 '섬기는 사람들' 탭에 자동 표시)
export const churchOfficers: { name: string; title: string; photoUrl?: string; description?: string }[] = [];

// 교회 연혁: 자료 전달 후 채울 예정 (비어 있으면 '준비 중'으로 표시)
export const churchHistory: ChurchEvent[] = [];

// 2026년 교회 일정
export const churchEvents2026: ChurchEvent[] = [
  { date: '1월 4일', title: '신년예배 / 유숙연 담임목사 부임' },
  { date: '2월 8일', title: '유숙연 목사 위임감사예배' },
  { date: '2월 18일', title: '재의 수요일', note: '사순절 시작' },
  { date: '3월 1주', title: '오후 1시 30분 예배 시작' },
  { date: '3월 4주', title: '만남의 주일 시작' },
  { date: '4월 3일', title: '성금요일', note: '3월 30일 ~ 4월 4일 고난주간' },
  { date: '4월 5일', title: '부활주일 (기쁨의 50일 시작)', note: '오후: 찬양사역자 초청 집회' },
  { date: '5월 3일', title: '가족주일', note: '어린이 / 어버이주일' },
  { date: '5월 24일', title: '성령강림주일' },
  { date: '5월 31일', title: '연합예배', note: '여은감리교회 (담임목사: 장훈태)' },
  { date: '7월 12일', title: '교회창립 50주년 기념주일' },
  { date: '10월 25일', title: '종교개혁 기념주일' },
  { date: '11월 15일', title: '추수감사주일' },
  { date: '11월 29일', title: '대림절 시작' },
  { date: '12월 25일', title: '성탄절' },
  { date: '12월 31일', title: '송구영신' }
];

// 매월 정기 예배 (예배 안내에 표시)
export const monthlyServices = [
  { when: '매월 첫째 주', title: '성찬식', description: '매달 첫 주 예배에서 성찬식이 거행됩니다.' },
  { when: '매월 넷째 주', title: '만남의 주일', description: '매달 넷째 주는 만남의 주일로 모입니다.' }
];

// 자료실 > 사진 탭: 사진 정리가 끝나면 true로 바꿔 탭과 사진을 다시 노출
export const SHOW_CHURCH_PHOTOS = false;

// 자료실 > 암송 구절 (2026년 1~10월, 원본: 매월 암송 말씀.hwp)
export const memoryVerses: MemoryVerse[] = [
  {
    month: '1월',
    reference: '요한복음 3:16',
    verse: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니\n이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라'
  },
  {
    month: '2월',
    reference: '스바냐 3:17',
    verse: '너의 하나님 여호와가 너의 가운데에 계시니 그는 구원을 베푸실 전능자이시라\n그가 너로 말미암아 기쁨을 이기지 못하시며 너를 잠잠히 사랑하시며\n너로 말미암아 즐거이 부르며 기뻐하시리라 하리라'
  },
  {
    month: '3월',
    reference: '시편 126:5-6',
    verse: '눈물을 흘리며 씨를 뿌리는 자는 기쁨으로 거두리로다.\n울며 씨를 뿌리러 나가는 자는 반드시 기쁨으로 그 곡식 단을 가지고 돌아오리로다'
  },
  {
    month: '4월',
    reference: '요한복음 11:25-26',
    verse: '예수께서 이르시되 나는 부활이요 생명이니 나를 믿는 자는 죽어도 살겠고\n무릇 살아서 나를 믿는 자는 영원히 죽지 아니하리니 이것을 네가 믿느냐'
  },
  {
    month: '5월',
    reference: '요한복음 14:26',
    verse: '보혜사 곧 아버지께서 내 이름으로 보내실 성령 그가 너희에게 모든 것을 가르치고\n내가 너희에게 말한 모든 것을 생각나게 하리라'
  },
  {
    month: '6월',
    reference: '시편 144:15',
    verse: '이러한 백성은 복이 있나니 여호와를 자기 하나님으로 삼는 백성은 복이 있도다'
  },
  {
    month: '7월',
    reference: '마태복음 5:14상, 16',
    verse: '너희는 세상의 빛이라\n이같이 너희 빛이 사람 앞에 비치게 하여 그들로 너희 착한 행실을 보고 하늘에 계신 너희 아버지께 영광을 돌리게 하라'
  },
  {
    month: '8월',
    reference: '마태복음 6:34',
    verse: '그러므로 내일 일을 위하여 염려하지 말라 내일 일은 내일이 염려할 것이요 한 날의 괴로움은 그 날로 족하니라'
  },
  {
    month: '9월',
    reference: '야고보서 1:17',
    verse: '온갖 좋은 은사와 온전한 선물이 다 위로부터 빛들의 아버지께로부터 내려오나니\n그는 변함도 없으시고 회전하는 그림자도 없으시니라'
  },
  {
    month: '10월',
    reference: '시편 100:4',
    verse: '감사함으로 그의 문에 들어가며 찬송함으로 그의 궁정에 들어가서\n그에게 감사하며 그의 이름을 송축할지어다'
  }
];

// 자료실 > 주보: Google Drive 공유 링크를 넣으면 '주보 보기' 버튼이 표시됨
export const bulletinDriveUrl = 'https://drive.google.com/drive/folders/15gvkKO0_r22Tur9dcIjPGNAg_ipKmVqu';

export const churchInfo: ChurchInfo = {
  name: '하늘소리교회',
  englishName: "Heaven's voice Church",
  domainName: 'www.heavensvoicechurch.com',
  slogan: '신앙은 복음적이고, 생명은 풍성하며, 삶은 거룩하게',
  subSlogan: '기독교대한복음교회 교단 정신에 따라 오직 성경과 복음의 진리 위에 서는 교회',
  denomination: '기독교대한복음교회',
  pastor: {
    name: '유숙연',
    title: '담임목사',
    education: [
      '(현) 기독교대한복음교회 하늘소리교회 담임목사',
      '(현) 한국임상목회교육협회(KCPE) 수퍼바이저',
      '(현) 한국목회상담협회(KAPC) 상담사, 소울프렌드 소속 상담사',
      '(현) 목회자유가족협의회 이사',
      '(현) 하늘봄 센터 대표',
      '(전) 연세의료원 신촌세브란스병원 원목실 목사',
      '(전) (주)쓰리제이 사목',
      '(전) 수원성교회 새가족부 총괄목사, 싱글여성사역 담당목사',
      '이화여자대학교 신학대학원 졸업(Th.M)',
    ],
    photoUrl: "", // 사진 준비되면 public/에 넣고 경로 지정 (비어 있으면 "사진 첨부 예정" 표시)
    bibleVerse: {
      verse: '기뻐하는 사람들과 함께 기뻐하고, 우는 사람들과 함께 우십시오',
      reference: '로마서 12장 15절(새번역)'
    }
  },
  address: '경기도 김포시 용강로 100',
  addressDetail: '하늘소리교회',
  postalCode: '10021',
  phone: '010-9849-2100',
  email: 'heavensvoicechurch@gmail.com',
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
};

// Worship Schedules: Only 주일 오전 예배 and 주일 오후 예배
export const worshipSchedules: WorshipSchedule[] = [
  {
    id: 'worship-morning',
    category: 'morning',
    name: '주일 오전 예배',
    dayTime: '매주 주일 오전 11:00',
    description: '오직 하나님께 영광을 돌리는 경건한 찬양과 성경 중심의 강해 설교로 드려지는 예배입니다.',
    orderSummary: [
      '예배로 부름',
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
    description: '말씀의 깊은 은혜를 나누고 뜨거운 찬양과 합심 기도로 한 주간 세상으로 나아갈 영적 능력을 공급받는 예배입니다.',
    orderSummary: [
      '찬양과 경배',
      '성경통독과 나눔',
      '중보기도 (개인, 가정, 교회, 나라, 열방)',
      '주기도문'
    ]
  }
];

// Single source of truth for displaying worship times elsewhere (Hero, etc.)
// so the schedule never drifts out of sync with worshipSchedules above.
const getSchedule = (category: WorshipSchedule['category']): WorshipSchedule =>
  worshipSchedules.find((w) => w.category === category)!;

/** e.g. '오전 11:00' / '오후 01:30' */
export const getWorshipTimeLabel = (category: WorshipSchedule['category']): string =>
  getSchedule(category).dayTime.replace('매주 주일 ', '');


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
