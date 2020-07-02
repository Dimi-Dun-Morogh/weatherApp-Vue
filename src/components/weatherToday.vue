<template>
  <div>
    <div class="weather-today" v-show="weatherDataToday">
      <span>Weather Today</span>
      <div class="container">
        <div v-for="(fragment, index) in weatherDataToday" :key="index">
          <weatherFragment :fragment="fragment" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import weatherFragment from "../components/weatherFragment";
import { mapGetters } from "vuex";

export default {
  name: "weatherToday",
  components: {
    weatherFragment
  },
  computed: {
    ...mapGetters("weatherData", ["weatherDataToday"])
  }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
</style>
