import {cheackLocation} from './cheackLocation';

describe("cheackLocation", () => {
    test("should return true when input /", () => {
      const inputString = "/";
      expect(cheackLocation(inputString)).toBe(true);
    });
  
    test("should return false when input /auth", () => {
        const inputString = "/auth";
        expect(cheackLocation(inputString)).toBe(false);
      });
  });