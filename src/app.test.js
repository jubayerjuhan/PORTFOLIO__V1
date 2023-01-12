import { addTwoNumber, cloneArray } from "./App.js";

// test("add two number", () => {
//   expect(addTwoNumber(1, 2)).toBe(3);
// });

const arr = [1, 2, 4];
test("Return exact array", () => {
  expect(cloneArray(arr)).toEqual(arr);
  expect(cloneArray(arr)).not.toBe(arr);
});
