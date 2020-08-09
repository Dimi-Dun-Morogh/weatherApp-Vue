<template>
  <div v-show="isThereData" class="cityInfoWrap">
    <ul>
      <li>Country: {{ this.city === null ? "" : this.city.country }}</li>
      <li>City: {{ this.city === null ? "" : this.city.name }}</li>
      <li>Population: {{ this.city === null ? "" : this.city.population }}</li>
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
  data: () => ({}),
  watch: {},
  computed: {
    ...mapGetters("weatherData", ["city"]),
    isThereData() {
      return this.city === null ? false : true;
    },
    sunrise() {
      return this.city === null ? false : formatDate(this.city.sunrise);
    },
    sunset() {
      return this.city === null ? false : formatDate(this.city.sunset);
    }
  },
  methods: {}
};
</script>
<style scoped>
.cityInfoWrap {
  background-color: #ffffffa3;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
}
ul {
  font-weight: bold;
}
li {
  display: inline;
}
li + li {
  margin-left: 10px;
}
@media (max-width: 650px) {
  ul {
    padding-left: 0;
  }
}
</style>
