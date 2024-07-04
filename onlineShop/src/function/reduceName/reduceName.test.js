import {reduceName} from './reduceName';

describe("reduceName", () => {
  test("should return a string of length 23 when input string has more than 20 characters", () => {
    const inputString = "This is a very long string that exceeds the limit";
    const reducedString = reduceName(inputString);
    expect(reducedString.length).toBe(23);
  });

  test("should return the same string followed by '...' when input string has less than 20 characters", () => {
    const inputString = "Short string";
    const expectedString = inputString + "...";
    const reducedString = reduceName(inputString);
    expect(reducedString).toBe(expectedString);
  });

  test("should return a string of exactly 23 characters when input string has exactly 20 characters", () => {
    const inputString = "Exactly twenty chars.";
    const reducedString = reduceName(inputString);
    expect(reducedString.length).toBe(23);
  });
});