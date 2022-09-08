import readlineSync from "readline-sync";

export default class Keyboard {
  static readString(msg) {
    let value = readlineSync.question(msg);

    return value;
  }

  static readNumber(msg) {
    let value = readlineSync.question(msg);
    return Number(value);
  }
}
