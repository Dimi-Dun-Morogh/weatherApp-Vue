<template>
  <div v-show="weatherData">
    Weather by Days
    <div class="daysWrapper">
      <div v-for="(day, index) in weatherData" :key="index">
        <weatherDayFragment :dayFragment="day" />
      </div>
    </div>
  </div>
</template>
<script>
import weatherDayFragment from "./weatherDayFragment.vue";
import { mapGetters } from "vuex";
export default {
  name: "weatherByDays",
  components: {
    weatherDayFragment
  },
  computed: {
    ...mapGetters("weatherData", ["weatherData"])
  }
};
</script>
<style scoped>
.daysWrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  flex-wrap: wrap;
}
@media (max-width: 800px) {
  .daysWrapper {
    justify-content: center;
  }
}
</style>
