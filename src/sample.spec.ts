import { expect } from "chai";
import { sample } from "./sample";

describe("sample.js tests", () => {
  describe("#sample test()", () => {
    it("expect to write more tests", () => {
      // arranges

      // acts
      const result = sample();

      // asserts
      expect(result).to.equal(true);
    });
  });
});
