export default class Validator {
  #MATURE_AGE = 18;

  constructor() {}

  email(email) {
    let result = { status: true, message: "", messageArray: [] };

    if (!email.includes("@") || !email.includes(".")) {
      result.status = false;
      result.messageArray.push("Incorrect e-mail address");
    }

    result.message = this.#arrayToString(result.messageArray);
    return result;
  }

  password(password) {
    let result = { status: true, message: "", messageArray: [] };

    if (password.length < 8) {
      result.status = false;
      result.messageArray.push("The password must have at least 8 characters");
    }

    if (!/[0-9]/.test(password)) {
      result.status = false;
      result.messageArray.push("The password must contain a number");
    }

    if (!/[A-Z]/.test(password)) {
      result.status = false;
      result.messageArray.push("The password must contain a capital letter");
    }

    if (!/[a-z]/.test(password)) {
      result.status = false;
      result.messageArray.push("The password must contain a lowercase letter");
    }

    result.message = this.#arrayToString(result.messageArray);
    return result;
  }

  passwordEqual(password, replayPassword) {
    let result = { status: true, message: "", messageArray: [] };

    if (password !== replayPassword) {
      result.status = false;
      result.messageArray.push("The passwords are not the same");
    }

    result.message = this.#arrayToString(result.messageArray);
    return result;
  }

  isEqual(string, string2) {
    if (string === string2) return true;
    return false;
  }

  isEmpty(string) {
    if (string === "" || string === undefined || string === null) {
      return true;
    }
    return false;
  }

  isMoreThan(string, len) {
    if (string.length > len) return true;
    return false;
  }

  isLessThan(string, len) {
    if (string.length < len) return true;
    return false;
  }

  isAgeLessThanMature(age) {
    if (parseInt(age) < this.#MATURE_AGE) return true;
    return false;
  }

  #arrayToString(array) {
    return array.join(", ");
  }
}
