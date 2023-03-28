export default class Normalizer {
  constructor() {}

  firstLetterCapital(string) {
    let n = string;
    n = n.toLowerCase();
    n = n.charAt(0).toUpperCase() + n.slice(1);
    return n;
  }

  allLetterLow(string) {
    let n = string;
    n = n.toLowerCase();
    return n;
  }
}
