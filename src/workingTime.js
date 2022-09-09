export default class WorkingTime {
  constructor(
    checkInHour,
    checkInMinutes,
    checkInSeconds,
    checkOutHour,
    checkOutMinutes,
    checkOutSeconds
  ) {
    this.checkInHour = checkInHour;
    this.checkInMinutes = checkInMinutes;
    this.checkInSeconds = checkInSeconds;
    this.checkOutHour = checkOutHour;
    this.checkOutMinutes = checkOutMinutes;
    this.checkOutSeconds = checkOutSeconds;
  }

  getTimeWorked() {
    let workedHours = this.checkOutHour - this.checkInHour;
    let workedMinutes = this.checkOutMinutes - this.checkInMinutes;
    let workedSeconds = this.checkOutSeconds - this.checkInSeconds;

    if (workedMinutes < 0) {
      workedMinutes += 60;
      workedHours -= 1;
    }

    if (workedSeconds < 0) {
      workedSeconds += 60;
      workedMinutes -= 1;
    }

    return `\n${workedHours} horas, ${workedMinutes} minutos y ${workedSeconds} segundos trabajados`;
  }
}
