import WorkingTime from "../src/workingTime.js";

test("Obtiene el tiempo de diferencia entre la hora de entrada y la hora de salida", () => {
  let trabajadorA = new WorkingTime(13, 30, 9, 13, 30, 12);
  let trabajadorB = new WorkingTime(10, 30, 0, 14, 40, 0);
  let trabajadorC = new WorkingTime(13, 30, 0, 14, 20, 0);
  let trabajadorD = new WorkingTime(13, 56, 56, 17, 34, 34);
  let trabajadorE = new WorkingTime(12, 6, 34, 19, 58, 49);

  expect(trabajadorA.getTimeWorked()).toBe(
    "\n0 horas, 0 minutos y 3 segundos trabajados"
  );
  expect(trabajadorB.getTimeWorked()).toBe(
    "\n4 horas, 10 minutos y 0 segundos trabajados"
  );
  expect(trabajadorC.getTimeWorked()).toBe(
    "\n0 horas, 50 minutos y 0 segundos trabajados"
  );
  expect(trabajadorD.getTimeWorked()).toBe(
    "\n3 horas, 37 minutos y 38 segundos trabajados"
  );
  expect(trabajadorE.getTimeWorked()).toBe(
    "\n7 horas, 52 minutos y 15 segundos trabajados"
  );
});
