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

  hourIsValid() {
    if (
      (this.checkInHour && this.checkOutHour) <= 24 &&
      (this.checkInHour && this.checkOutHour) >= 1
    ) {
      return true;
    }

    return false;
  }
  minutesAreValid() {
    if (
      (this.checkInMinutes && this.checkOutMinutes) <= 60 &&
      (this.checkInMinutes && this.checkOutMinutes) >= 0
    ) {
      return true;
    }

    return false;
  }
  secondsAreValid() {
    if (
      (this.checkInSeconds && this.checkOutSeconds) <= 60 &&
      (this.checkInSeconds && this.checkOutSeconds) >= 0
    ) {
      return true;
    }

    return false;
  }

  timeIsValid() {
    if (this.checkInHour <= this.checkOutHour) {
      if (this.checkInMinutes > this.checkOutMinutes) {
        return false;
      }
      if (this.checkInSeconds > this.checkOutSeconds) {
        return false;
      }

      if (
        this.hourIsValid() &&
        this.minutesAreValid() &&
        this.secondsAreValid()
      )
        return true;
    }

    return false;
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
