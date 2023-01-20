const { score, bestScore } = require("./bowlingPointsCalc.js");

describe("Bowling Game Calculator", () => {
    describe("score", () => {
        it("should return no game played when array is empty", () => {
            let result = score([]);
            expect(result).toEqual("no game played");
        });

        it("should give score when array is valid", () => {
            let result = score([6,3]);
            expect(result).toBe(9);
        });
    });

    describe("bestscore", () => {

        it("should give max score when array is valid", () => {
            let result = bestScore([[6,3],[6,2]]);
            expect(result).toBe(9);
        });
    });
});