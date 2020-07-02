import axios from "../../plugins/axios";
import mutations from "../mutations";
const weatherStore = {
  namespaced: true,
  state: {
    weatherData: null,
    weatherDataToday: null,
    city: null
  },
  getters: {
    weatherData: ({ weatherData }) => weatherData,
    weatherDataToday: ({ weatherDataToday }) => weatherDataToday,
    city: ({ city }) => city
  },
  mutations: {
    [mutations.WEATHER_DATA](state, obj) {
      state.weatherData = obj;
    },
    [mutations.WEATHER_DATA_CURR_DAY](state, obj) {
      state.weatherDataToday = obj;
    },
    [mutations.SET_CITY](state, obj) {
      state.city = obj;
    }
  },
  actions: {
    serializeWeatherData({ commit }, { city, list }) {
      const data = {};
      commit(mutations.SET_CITY, city);
      console.log("arrayweather", list);
      list.forEach(day => {
        const date = day["dt_txt"].split(" ")[0];
        const time = day["dt_txt"].split(" ")[1].slice(0, 5);
        let temp = String(day.main.temp);
        console.log(typeof temp);
        temp = temp.slice(0, 2);
        day.main.temp = temp;
        if (data[date] === undefined) {
          data[date] = {};
        }
        data[date][day["dt_txt"]] = {
          ...day,
          time
        };
      });
      commit(mutations.WEATHER_DATA, data);
      console.log(Object.values(data));
      commit(mutations.WEATHER_DATA_CURR_DAY, Object.values(data)[0]);
      return data;
    },
    async getWeatherData({ dispatch }, city) {
      try {
        const data = await axios.get(
          `forecast?q=${city}&units=metric&appid=${process.env.VUE_APP_API_KEY}`
        );
        console.log(data.data);
        const serializedData = dispatch("serializeWeatherData", data.data);
        // commit(mutations.WEATHER_DATA, serializedData);
        return serializedData;
      } catch (error) {
        console.log(error);
      }
    }
  }
};

export default weatherStore;
