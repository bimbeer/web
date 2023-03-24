export default class Validator {
  constructor() {}

  email(email) {
    let result = { status: true, message: "", messageArray: [] };

    if (!email.includes("@") || !email.includes(".")) {
      result.status = false;
      result.messageArray.push("Nieprawidłowy adres email");
    }

    result.message = this.#arrayToString(result.messageArray);
    return result;
  }

  password(password) {
    let result = { status: true, message: "", messageArray: [] };

    if (password.length < 8) {
      result.status = false;
      result.messageArray.push("Hasło musi posiadać minimum 8 znaków");
    }

    if (!/[0-9]/.test(password)) {
      result.status = false;
      result.messageArray.push("Hasło musi posiadać cyfrę");
    }

    if (!/[A-Z]/.test(password)) {
      result.status = false;
      result.messageArray.push("Hasło musi posiadać dużą literę");
    }

    if (!/[a-z]/.test(password)) {
      result.status = false;
      result.messageArray.push("Hasło musi posiadać małą literę");
    }

    result.message = this.#arrayToString(result.messageArray);
    return result;
  }

  passwordEqual(password, replayPassword) {
    let result = { status: true, message: "", messageArray: [] };

    if (password !== replayPassword) {
      result.status = false;
      result.messageArray.push("Hasła nie są takie same");
    }

    result.message = this.#arrayToString(result.messageArray);
    return result;
  }

  #arrayToString(array) {
    return array.join(", ");
  }
}
