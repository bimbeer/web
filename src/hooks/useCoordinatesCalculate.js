export default function useCoordinatesCalculate() {
  return function (lat, lng, rad) {
    const earthRadius = 6371;
    const lat1 = (Math.PI / 180) * lat;
    const lng1 = (Math.PI / 180) * lng;

    const points = [];

    for (let i = 0; i < 360; i += 90) {
      const brng = (Math.PI / 180) * i;
      const lat2 = Math.asin(
        Math.sin(lat1) * Math.cos(rad / earthRadius) +
          Math.cos(lat1) * Math.sin(rad / earthRadius) * Math.cos(brng)
      );

      const lng2 =
        lng1 +
        Math.atan2(
          Math.sin(brng) * Math.sin(rad / earthRadius) * Math.cos(lat1),
          Math.cos(rad / earthRadius) - Math.sin(lat1) * Math.sin(lat2)
        );

      points.push({
        lat: (180 / Math.PI) * lat2,
        lng: (180 / Math.PI) * lng2,
      });
    }
    console.log(lat, lng, rad);
    console.log(points);

    return points;
  };
}
