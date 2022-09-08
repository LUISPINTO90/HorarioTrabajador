import WorkingTime from "../src/workingTime.js";

test("La fecha de entrada es menor a la fecha de salida", () => {
  let trabajadorA = new WorkingTime(13, 30, 11, 13, 30, 10);
  let trabajadorB = new WorkingTime(13, 30, 11, 13, 30, 12);

  expect(trabajadorA.timeIsValid()).toBe(false);
  expect(trabajadorB.timeIsValid()).toBe(true);
});
