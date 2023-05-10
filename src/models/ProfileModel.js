import Normalizer from "@/helpers/Normalizer";
import { getItem } from "../helpers/localStorage";

export default class ProfileModel {
  firstName = "";
  lastName = "";
  username = "";
  age = 18;
  avatar = "";
  description = "";
  gender = "";
  interest = null;
  searchGlobal = true;
  range = 0;
  #location = {};
  #beers = [];

  constructor() {
    if (getItem("myProfile")) {
      const myProfile = getItem("myProfile");
      this.firstName = myProfile.firstName;
      this.lastName = myProfile.lastName;
      this.username = myProfile.username;
      this.age = myProfile.age;
      this.avatar = myProfile.avatar;
      this.description = myProfile.description;
      this.gender = myProfile.gender;
      this.interest = myProfile.interest;
      this.searchGlobal = myProfile.searchGlobal;
      this.range = myProfile.range;
      this.#location = myProfile.location;
      this.#beers = myProfile.beers;
    }
  }

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
      beers: this.getLikedBeers().map((lb) => ({ ...lb })),
      location: { ...this.getLocation() },
    };
  }
}
