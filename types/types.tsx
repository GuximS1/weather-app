export interface getCityByName {
  getCityByName: City;
}
interface City {
  country: String;
  name: String;
  weather: Weather;
}
interface Weather {
  clouds: Clouds;
  summary: Summary;
  temperature: Temperature;
  timestamp: Number;
  wind: Wind;
}
interface Clouds {
  all: Number;
  humidity: Number;
  visibility: Number;
}
interface Summary {
  description: String;
  icon: String;
  title: String;
}
interface Temperature {
  actual: Number;
  feelsLike: Number;
}
interface Wind {
  deg: Number;
  speed: Number;
}
