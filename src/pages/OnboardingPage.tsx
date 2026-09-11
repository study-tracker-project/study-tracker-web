import { color, radius } from '../theme';
import AppShell from '../components/AppShell';

const AGENT_RELEASE_URL =
    'https://github.com/study-tracker-project/study-tracker-agent/releases/latest/download/study-tracker-agent.exe';
const EXTENSION_STORE_URL =
    'https://chromewebstore.google.com/detail/study-tracker/ggmeldiabekaddjjbcfacgghfpcjcolk';

const OnboardingPage = () => {
    return (
        <AppShell>
            <div style={styles.header}>
                <span style={styles.headerTitle}>PC 설치 가이드</span>
            </div>
            <p style={styles.guide}>
                이 PC에서 순공 시간을 재려면 두 가지가 필요해요. 브라우저에서 보낸 시간을 재는{' '}
                <b>Chrome 확장 프로그램</b>과, PC 전체(다른 앱 포함)에서 보낸 시간을 재고 세션을 관리하는{' '}
                <b>PC 에이전트</b>. 아래 순서대로 설치하면 돼요.
            </p>

            {/* 1. Chrome 확장 프로그램 */}
            <div style={styles.card}>
                <div style={styles.stepTitle}><span style={styles.stepNum}>1</span>Chrome 확장 프로그램 설치</div>

                <p style={styles.text}>
                    Chrome 웹 스토어에 정식으로 올라가 있어서, 아래 링크에서 <b>Chrome에 추가</b> 버튼만 누르면 끝이에요.
                </p>
                <a href={EXTENSION_STORE_URL} style={styles.linkBtn}>Chrome 웹 스토어에서 설치</a>
                <p style={styles.text}>
                    설치 후 주소창 오른쪽 퍼즐 아이콘을 눌러 Study Tracker를 고정해두면 상태를 바로 확인할 수 있어 편해요.
                </p>
                <div style={styles.note}>
                    확장 프로그램은 studytracker.cloud에 로그인되어 있으면 자동으로 로그인 상태를 넘겨받아요.
                    따로 로그인할 필요는 없어요.
                </div>
            </div>

            {/* 2. PC 에이전트 */}
            <div style={styles.card}>
                <div style={styles.stepTitle}><span style={styles.stepNum}>2</span>PC 에이전트 설치</div>
                <p style={styles.text}>
                    PC 에이전트는 지금 어떤 프로그램을 쓰고 있는지 기록하고, 세션 시작/종료도 담당해요.
                    브라우저 탭 사용 시간은 확장 프로그램이 이미 따로 기록하기 때문에, 에이전트는 Chrome 사용 시간을
                    중복으로 세지 않아요.
                </p>

                <div style={styles.subStep}>
                    <div style={styles.subStepTitle}>① 프로그램 내려받기</div>
                    <p style={styles.text}>
                        아래 링크로 <code style={styles.code}>study-tracker-agent.exe</code> 를 내려받아서
                        <code style={styles.code}>C:\StudyTrackerAgent</code> 같은 고정된 폴더에 옮겨두세요.
                        (바탕화면/다운로드 폴더에 그대로 두면 나중에 정리하다 지울 수 있어요.)
                    </p>
                    <a href={AGENT_RELEASE_URL} style={styles.linkBtn}>study-tracker-agent.exe 다운로드</a>
                </div>

                <div style={styles.subStep}>
                    <div style={styles.subStepTitle}>② 로그인 (최초 1회)</div>
                    <p style={styles.text}>
                        에이전트는 콘솔 창 없이 조용히 동작하도록 만들어져서, <b>아이콘을 더블클릭해도 아무 반응이
                        없어요</b>. 반드시 명령 프롬프트(PowerShell)에서 실행해야 해요.
                    </p>
                    <ol style={styles.list}>
                        <li>에이전트를 옮겨둔 폴더에서 주소창에 <code style={styles.code}>cmd</code> 입력 후 엔터 (그 폴더가 열린 상태로 명령 프롬프트가 뜸)</li>
                        <li>
                            아래 명령어 실행 (기기 이름은 원하는 대로, 예: 이 PC를 구분할 이름)
                            <div style={styles.codeBlock}>study-tracker-agent.exe login "내 데스크탑"</div>
                        </li>
                        <li>Google 로그인 창이 자동으로 뜨면 study-tracker에 가입한 계정으로 로그인</li>
                        <li>명령 프롬프트에 <code style={styles.code}>[기기] 등록 완료</code> 가 뜨면 성공</li>
                    </ol>
                </div>

                <div style={styles.subStep}>
                    <div style={styles.subStepTitle}>③ 상주 모드로 실행</div>
                    <p style={styles.text}>
                        로그인이 끝나면 트레이 모드로 실행해서 백그라운드에 상주시켜요. 같은 명령 프롬프트에서:
                    </p>
                    <div style={styles.codeBlock}>study-tracker-agent.exe tray</div>
                    <p style={styles.text}>
                        실행하면 창이 뜨지 않고 시스템 트레이(작업 표시줄 오른쪽, 시계 옆)에 아이콘만 나타나요.
                        이 상태로 명령 프롬프트 창은 닫아도 계속 동작해요. 처음 트레이로 실행할 때 Windows 시작
                        프로그램에도 자동으로 등록되어서, 다음부터는 PC를 켜면 알아서 켜져요. (트레이 아이콘 우클릭
                        메뉴에서 자동 시작을 껐다 켰다 할 수 있어요.)
                    </p>
                </div>

                <div style={styles.note}>
                    로그인 명령이 실패해도 오류 메시지가 화면에 안 보일 때가 있어요. 그럴 땐 명령 뒤에{' '}
                    <code style={styles.code}>{'> log.txt 2>&1'}</code> 를 붙여 실행한 뒤, 같은 폴더에 생긴{' '}
                    <code style={styles.code}>log.txt</code> 파일을 열어 오류 내용을 확인하세요.
                </div>
            </div>

            {/* 3. 확인 */}
            <div style={styles.card}>
                <div style={styles.stepTitle}><span style={styles.stepNum}>3</span>정상 동작 확인</div>
                <ol style={styles.list}>
                    <li>studytracker.cloud 웹에서 세션을 하나 시작</li>
                    <li>잠깐 다른 프로그램도 써보고, 브라우저로 사이트도 몇 개 열어보기</li>
                    <li>세션을 종료하고 완료 팝업에서 항목별로 앱/사이트가 잘 잡히는지 확인</li>
                    <li>통계 페이지 - 오늘 세션에서도 방금 세션이 보이면 정상</li>
                </ol>
                <p style={styles.text}>
                    새 PC를 추가로 쓰는 경우, 위 2번(PC 에이전트) 과정만 그 PC에서 다시 하면 돼요. 계정은 하나로
                    여러 대의 PC를 등록해 같이 기록할 수 있어요.
                </p>
            </div>
        </AppShell>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    header: { marginBottom: '12px' },
    headerTitle: { fontSize: '20px', fontWeight: 700, color: color.ink },
    guide: { fontSize: '13px', color: color.inkSecondary, marginBottom: '20px', lineHeight: 1.6 },
    card: {
        background: color.surface, border: `1px solid ${color.border}`, borderRadius: radius.md,
        padding: '20px', marginBottom: '20px',
    },
    stepTitle: {
        display: 'flex', alignItems: 'center', gap: '10px',
        fontSize: '16px', fontWeight: 700, color: color.ink, marginBottom: '14px',
    },
    stepNum: {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '22px', height: '22px', borderRadius: radius.pill,
        background: color.accent, color: color.onAccent, fontSize: '12px', fontWeight: 700,
    },
    subStep: { marginBottom: '16px' },
    subStepTitle: { fontSize: '14px', fontWeight: 600, color: color.ink, marginBottom: '6px' },
    text: { fontSize: '13px', color: color.inkSecondary, lineHeight: 1.6, marginBottom: '8px' },
    list: {
        fontSize: '13px', color: color.inkSecondary, lineHeight: 1.9,
        margin: 0, paddingLeft: '20px',
    },
    code: {
        background: color.surfaceMuted, borderRadius: '4px', padding: '1px 6px',
        fontSize: '12.5px', color: color.accentStrong, fontFamily: 'ui-monospace, Consolas, monospace',
    },
    codeBlock: {
        background: color.ink, color: '#F6F4EF', borderRadius: radius.sm,
        padding: '10px 14px', fontSize: '13px', margin: '6px 0 10px',
        fontFamily: 'ui-monospace, Consolas, monospace', overflowX: 'auto',
        whiteSpace: 'pre-line',
    },
    linkBtn: {
        display: 'inline-block', padding: '9px 16px', background: color.ink, color: color.surface,
        borderRadius: radius.sm, fontSize: '13px', fontWeight: 600, textDecoration: 'none',
    },
    note: {
        fontSize: '12.5px', color: color.inkTertiary, background: color.surfaceMuted,
        borderRadius: radius.sm, padding: '10px 12px', lineHeight: 1.6,
    },
};

export default OnboardingPage;
