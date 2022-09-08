import WorkingTime from "./workingTime.js";
import Keyboard from "./keyboard.js";

let checkInHour = Keyboard.readNumber("\nEscribe la hora de entrada: ");
let checkInMinutes = Keyboard.readNumber("Escribe los minutos de entrada: ");
let checkInSeconds = Keyboard.readNumber("Escribe los segundos de entrada: ");

let checkOutHour = Keyboard.readNumber("\nEscribe la hora de salida: ");
let checkOutMinutes = Keyboard.readNumber("Escribe los minutos de salida: ");
let checkOutSeconds = Keyboard.readNumber("Escribe los segundos de salida: ");

let trabajador = new WorkingTime(
  checkInHour,
  checkInMinutes,
  checkInSeconds,
  checkOutHour,
  checkOutMinutes,
  checkOutSeconds
);

console.log(trabajador.getTimeWorked());
