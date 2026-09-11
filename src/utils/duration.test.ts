import { formatContentDuration } from './duration';

describe('formatContentDuration', () => {
    it('60초 미만은 초 단위 그대로', () => {
        expect(formatContentDuration(0)).toBe('0초');
        expect(formatContentDuration(45)).toBe('45초');
        expect(formatContentDuration(59)).toBe('59초');
    });

    it('정확히 나누어떨어지는 분은 초 없이 표시', () => {
        expect(formatContentDuration(60)).toBe('1분');
        expect(formatContentDuration(120)).toBe('2분');
    });

    it('60초 이상 60분 미만은 분/초로 표시', () => {
        expect(formatContentDuration(65)).toBe('1분 5초');
        expect(formatContentDuration(125)).toBe('2분 5초');
        expect(formatContentDuration(3599)).toBe('59분 59초');
    });

    it('정확히 나누어떨어지는 시간은 분 없이 표시', () => {
        expect(formatContentDuration(3600)).toBe('1시간');
        expect(formatContentDuration(7200)).toBe('2시간');
    });

    it('60분 이상은 시간/분으로 표시(초는 버림)', () => {
        expect(formatContentDuration(3660)).toBe('1시간 1분'); // 1시간 1분
        expect(formatContentDuration(7325)).toBe('2시간 2분'); // 2시간 2분 5초 -> 초는 버림
    });
});
