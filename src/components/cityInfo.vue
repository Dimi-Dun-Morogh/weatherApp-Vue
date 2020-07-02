<template>
  <div v-show="isThereData">
    <ul>
      <li>Country: {{ country }}</li>
      <li>City: {{ City }}</li>
      <li>Population: {{ population }}</li>
      <li>Sunrise: {{ sunrise }}</li>
      <li>Sunset: {{ sunset }}</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import formatDate from "../filters/formatDate";
export default {
  name: "cityInfo",
  data: () => ({
    country: "",
    City: "",
    population: "",
    sunrise: "",
    sunset: ""
  }),
  watch: {
    isThereData: "fillInfo"
  },
  computed: {
    ...mapGetters("weatherData", ["city"]),
    isThereData() {
      return this.city === null ? false : true;
    }
  },
  methods: {
    fillInfo() {
      this.country = this.city.country;
      this.City = this.city.name;
      this.population = this.city.population;
      this.sunrise = formatDate(this.city.sunrise);
      this.sunset = formatDate(this.city.sunset);
    }
  }
};
</script>
<style scoped>
ul {
}
li {
  display: inline;
}
li + li {
  margin-left: 10px;
}
</style>
