import { expect } from "chai";
import { test } from "./test";

describe("test.js tests", () => {
  describe("#test()", () => {
    it("expect to write more tests", () => {
      // arranges

      // acts
      const result = test();

      // asserts
      expect(result).to.equal(1);
    });
  });
});
