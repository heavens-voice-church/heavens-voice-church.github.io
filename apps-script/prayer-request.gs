/**
 * 하늘소리교회 중보기도 요청 수신용 Google Apps Script (write-only).
 *
 * 설치 방법
 *  1. 중보기도용 Google 스프레드시트를 만들고, 첫 행에 머리글을 넣는다:
 *     접수일시 | 이름 | 연락처 | 기도 분류 | 기도 제목 | 공개 범위 | 처리 상태
 *  2. 스프레드시트 메뉴 > 확장 프로그램 > Apps Script 를 열고 이 파일 내용을 붙여넣는다.
 *  3. NOTIFY_EMAIL 에 알림 받을 주소를 넣는다 (알림이 필요 없으면 빈 문자열).
 *  4. 배포 > 새 배포 > 유형: 웹 앱
 *       - 다음 사용자 인증 정보로 실행: 나(스프레드시트 소유자)
 *       - 액세스 권한: 모든 사용자
 *  5. 발급된 웹 앱 URL(https://script.google.com/macros/s/.../exec)을
 *     사이트의 VITE_PRAYER_ENDPOINT (.env 및 GitHub Secrets)에 넣는다.
 *  ※ 코드를 수정하면 "배포 관리 > 수정 > 새 버전"으로 다시 배포해야 반영된다.
 *
 * 보안 메모
 *  - doGet 이 없으므로 웹에서 기도 제목을 조회할 방법이 없다 (스프레드시트 권한자만 열람).
 *  - 입력값은 길이 제한 후 저장하고, '=' 등으로 시작하는 값은 수식으로 실행되지 않게 막는다.
 */

const SHEET_NAME = '';          // 비우면 첫 번째 시트 사용
const NOTIFY_EMAIL = '';        // 예: 'church@example.com'
const CATEGORIES = ['개인', '가정', '교회', '나라', '열방'];
const VISIBILITIES = ['담임목사만', '중보기도팀'];
const MAX = { name: 30, contact: 50, content: 2000 };

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // Honeypot: real users never fill this hidden field; bots usually do. Pretend success.
    if (data.website) return json({ ok: true });

    const content = clean(data.content, MAX.content);
    if (!content) return json({ ok: false, error: '기도 제목을 입력해 주세요.' });
    if (data.consent !== true) return json({ ok: false, error: '개인정보 수집·이용에 동의해 주세요.' });

    const category = CATEGORIES.indexOf(data.category) >= 0 ? data.category : '개인';
    const visibility = VISIBILITIES.indexOf(data.visibility) >= 0 ? data.visibility : VISIBILITIES[0];
    const name = clean(data.name, MAX.name) || '익명';
    const contact = clean(data.contact, MAX.contact);

    // ponytail: no per-IP rate limit (Apps Script can't see client IP); add CacheService-based throttling if spam appears.
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const sheet = SHEET_NAME ? ss.getSheetByName(SHEET_NAME) : ss.getSheets()[0];
      sheet.appendRow([new Date(), name, contact, category, content, visibility, '접수']);
    } finally {
      lock.releaseLock();
    }

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(NOTIFY_EMAIL, '[하늘소리교회] 새 중보기도 요청',
        '분류: ' + category + '\n이름: ' + name + '\n공개 범위: ' + visibility + '\n\n' + content +
        '\n\n스프레드시트에서 확인해 주세요.');
    }
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: '요청을 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.' });
  }
}

function clean(value, max) {
  const s = String(value == null ? '' : value).trim().slice(0, max);
  // Block spreadsheet formula injection (=, +, -, @ at the start).
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
