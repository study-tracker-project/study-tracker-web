import { parseServerDateTime, toLocalDateStr } from './date';

describe('parseServerDateTime', () => {
    it('타임존 정보가 없는 문자열은 로컬(KST) 시각으로 해석한다', () => {
        const result = parseServerDateTime('2026-08-09T07:58:23');
        expect(result.getFullYear()).toBe(2026);
        expect(result.getMonth()).toBe(7); // 8월
        expect(result.getDate()).toBe(9);
        expect(result.getHours()).toBe(7);
        expect(result.getMinutes()).toBe(58);
    });

    it('이미 Z가 붙어있는 문자열은 그대로 UTC로 파싱한다', () => {
        const result = parseServerDateTime('2026-08-09T07:58:23Z');
        expect(result.toISOString()).toBe('2026-08-09T07:58:23.000Z');
    });

    it('오프셋이 붙어있는 문자열은 오프셋 기준으로 파싱한다', () => {
        const result = parseServerDateTime('2026-08-09T16:58:23+09:00');
        expect(result.toISOString()).toBe('2026-08-09T07:58:23.000Z');
    });
});

describe('toLocalDateStr', () => {
    it('로컬 기준 날짜를 YYYY-MM-DD로 만든다', () => {
        expect(toLocalDateStr(new Date(2026, 8, 10, 23, 30))).toBe('2026-09-10');
    });

    it('한 자리 월/일도 0으로 채운다', () => {
        expect(toLocalDateStr(new Date(2026, 0, 3, 1, 5))).toBe('2026-01-03');
    });
});
