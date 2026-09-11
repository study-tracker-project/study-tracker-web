// 앱/사이트 하나에 쓴 시간을 최소 단위로 어림잡아 보여준다("50초"는 "1분"으로,
// "50분"은 "1시간"으로 반올림 — 작은 단위 나머지가 60 중 50 이상이면 올림).
// 나머지를 버리거나 올렸으면(=정확한 값이 아니면) "약"을 붙인다.
export const formatContentDuration = (sec: number): string => {
    if (sec < 50) return `${sec}초`;

    const remSec = sec % 60;
    let minutes = Math.floor(sec / 60) + (remSec >= 50 ? 1 : 0);
    let approx = remSec !== 0;

    if (minutes < 50) {
        return approx ? `약 ${minutes}분` : `${minutes}분`;
    }

    const remMin = minutes % 60;
    const hours = Math.floor(minutes / 60) + (remMin >= 50 ? 1 : 0);
    approx = approx || remMin !== 0;

    return approx ? `약 ${hours}시간` : `${hours}시간`;
};
