<template>
  <div>
    <div class="weather-today" v-show="weatherDataToday">
      <span>Weather Today</span>
      <div class="container">
        <div
          v-for="(fragment, index) in weatherDataToday"
          :key="index"
          class="fragment-container"
        >
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
span {
  font-size: 23px;
}
.fragment-container {
  /* flex-grow: 1; */
  background-color: #064125;
  background-color: #064125;
  border: 1px solid rgba(255, 255, 255, 0.8);
}
@media (max-width: 650px) {
  .container {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
