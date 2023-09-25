import PrimerFactor from "./primerFactor.js";

describe("Primer factor", () => {
  function list(...ints){
    return ints;
  }
  it("should return an empty array for input 1", () => {
    expect(PrimerFactor.generate(1)).toEqual([]);
  });

  it("should return[2] for input 2", () => {
    expect(PrimerFactor.generate(2)).toEqual(list(2));
  });
});
