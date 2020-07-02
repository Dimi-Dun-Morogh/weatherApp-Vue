<template>
  <div>
    <el-card class="box-card">
      <span>{{ fragment.time }}</span>
      <span>
        <el-tooltip :content="iconTooltip" placement="left-start">
          <img :src="weatherIcon" alt="icon" />
        </el-tooltip>
      </span>
      <span>{{ weatherDegree }}</span>
      <span>{{ iconTooltip }}</span>
      <!-- <ul>
        <li>Temperature: {{ fragment.main.temp }}</li>
        <li>Feels like: {{ fragment.main.feels_like }}</li>
        <li>Temp min: {{ fragment.main.temp_min }}</li>
        <li>Temp max: {{ fragment.main.temp_max }}</li>
        <li>Wind: {{ fragment.wind.speed }}</li>
      </ul> -->
    </el-card>
  </div>
</template>
<script>
export default {
  name: "weatherFragment",
  props: ["fragment"],
  computed: {
    weatherDegree() {
      return this.fragment.main.temp > 0
        ? `+${this.fragment.main.temp}`
        : this.fragment.main.temp;
    },
    weatherIcon() {
      return `http://openweathermap.org/img/wn/${this.fragment.weather[0].icon}@2x.png`;
    },
    iconTooltip() {
      return `${this.fragment.weather[0].description}`;
    },
    mainDescription() {
      return `${this.fragment.weather[0].main}`;
    }
  }
};
</script>

<style scoped>
span {
  display: block;
  margin-left: 10px;
}
span img {
  cursor: pointer;
}
.box-card >>> {
  width: 150px;
  display: flex;
  height: 220px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
