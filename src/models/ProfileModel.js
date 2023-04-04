import Normalizer from "@/helpers/Normalizer";

export default class ProfileModel {
  firstName = "";
  lastName = "";
  username = "";
  age = null;
  avatar = "";
  description = "";
  gender = "";
  interest = null;
  searchGlobal = null;
  range = null;
  #location = {};
  #beers = [];

  constructor() {}

  setLocation(location) {
    this.#location = location;
  }

  getLocation() {
    return this.#location;
  }

  addLikeBeer(likeBeer) {
    this.#beers.push(likeBeer);
  }

  removeLikeBeer(beerName) {
    this.#beers = this.#beers.filter((b) => b.name !== beerName);
  }

  getLikedBeers() {
    return this.#beers;
  }

  normalize() {
    const n = new Normalizer();
    this.firstName = n.firstLetterCapital(this.firstName);
    this.lastName = n.firstLetterCapital(this.lastName);
  }

  getAllData() {
    return {
      ...this,
      beers: this.getLikedBeers(),
      location: this.getLocation(),
    };
  }
}
