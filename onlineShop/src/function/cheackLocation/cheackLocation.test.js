import {cheackLocation} from './cheackLocation';

describe("cheackLocation", () => {
    it("should return a string of length 23 when input string has more than 20 characters", () => {
      const inputString = "/";
      expect(cheackLocation(inputString)).toBe(true);
    });
  
    it("should return a string of length 23 when input string has more than 20 characters", () => {
        const inputString = "/auth";
        expect(cheackLocation(inputString)).toBe(false);
      });
  });