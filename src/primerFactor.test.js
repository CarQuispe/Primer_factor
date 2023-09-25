import PrimerFactor from "./primerFactor.js";

describe("Primer factor", () => {
  it("should return an empty array for input 1", () => {
    expect(PrimerFactor.generate(1)).toEqual([]);
  });
});
