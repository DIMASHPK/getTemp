import axios from "axios";

class Api {
  constructor(config) {
    this.apiKey = "1de54b9a24229c64442c6df730d443d4";
    this.instance = axios.create(config);
  }
}

class CitiesApi extends Api {
  getCities = async (city) => {
    try {
      const { data } = await this.instance.get(
        `/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=metric`
      );
      return data;
    } catch ({ response: { data } }) {
      return { isError: true, ...data };
    }
  };
}

const citiesApiConf = {
  baseURL: "https://api.openweathermap.org",
};

export const citiesApi = new CitiesApi(citiesApiConf);
