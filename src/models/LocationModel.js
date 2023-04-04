import { geohashForLocation } from "geofire-common";

export default class LocationModel {
  label;
  position = {
    coordinates: [],
    geohash: "",
  };

  constructor(label, lat, lng) {
    this.label = label;
    this.position.coordinates = [lat, lng];
    this.position.geohash = this.#createGeohash(lat, lng);
  }

  #createGeohash(lat, lng) {
    return geohashForLocation([lat, lng]);
  }
}
