const { add } = require("./math");

describe('math', () => {
    it('should add', () => {
        expect(add(40, 2)).toBe(42);
    });
    it('should add failed', () => {
        expect(add(40, 1)).toBe(42);
    });
    it('should add again', () => {
        expect(add(40, 2)).toBe(42);
    });
});