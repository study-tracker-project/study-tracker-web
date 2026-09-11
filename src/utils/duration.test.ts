import { formatContentDuration } from './duration';

describe('formatContentDuration', () => {
    it('50초 미만은 초 단위 그대로', () => {
        expect(formatContentDuration(0)).toBe('0초');
        expect(formatContentDuration(49)).toBe('49초');
    });

    it('50초~59초는 약 1분으로 올림', () => {
        expect(formatContentDuration(50)).toBe('약 1분');
        expect(formatContentDuration(59)).toBe('약 1분');
    });

    it('나머지가 없는 정확한 분은 약 없이 표시', () => {
        expect(formatContentDuration(120)).toBe('2분');
    });

    it('나머지가 있는 분은 약을 붙인다', () => {
        expect(formatContentDuration(125)).toBe('약 2분');
    });

    it('45분처럼 50분 미만이면 분 단위를 유지', () => {
        expect(formatContentDuration(2700)).toBe('45분');
    });

    it('50분 이상은 약 1시간으로 올림', () => {
        expect(formatContentDuration(3000)).toBe('약 1시간'); // 50분
        expect(formatContentDuration(3300)).toBe('약 1시간'); // 55분
    });

    it('정확히 나누어떨어지는 시간은 약 없이 표시', () => {
        expect(formatContentDuration(3600)).toBe('1시간');
    });

    it('시간 + 자투리 분은 약을 붙인다', () => {
        expect(formatContentDuration(3660)).toBe('약 1시간'); // 1시간 1분
    });
});
