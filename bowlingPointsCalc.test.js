const { score, bestScore } = require('./bowlingPointsCalc.js')

describe('Bowling Game Calculator', () => {
    describe('score', () => {
        it('should return no game played when array is empty', () => {
            expect(() => score([])).toBe('no game played');
        })

        it('should give score when array is valid', () => {
            let result = score([6,3]);
            expect(result).toBe(9);
        })
    })
})