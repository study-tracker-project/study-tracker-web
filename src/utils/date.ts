// 백엔드가 Asia/Seoul 타임존으로 동작하므로 LocalDateTime 값은 이미 KST다.
// 타임존 표시가 없으면 로컬(= 사용자 브라우저 = KST)로 그대로 파싱한다.
export const parseServerDateTime = (dateTimeStr: string): Date => {
    return new Date(dateTimeStr);
};

// 통계 API에 넘길 날짜 파라미터. toISOString()은 UTC 날짜라 자정 부근에 하루가
// 어긋나므로, 로컬 기준 YYYY-MM-DD로 만든다.
export const toLocalDateStr = (d: Date): string => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
};
