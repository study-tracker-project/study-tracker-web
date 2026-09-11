// 앱/사이트 하나에 쓴 시간을 정확한 값으로 표시한다.
// 60초 미만: "43초" / 60초~59분: "3분 20초" / 60분 이상: "1시간 5분"
export const formatContentDuration = (sec: number): string => {
    if (sec < 60) return `${sec}초`;

    if (sec < 3600) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return s > 0 ? `${m}분 ${s}초` : `${m}분`;
    }

    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    return m > 0 ? `${h}시간 ${m}분` : `${h}시간`;
};
