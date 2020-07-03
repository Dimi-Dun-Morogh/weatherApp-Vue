<template>
  <div class="card-wrap">
    <el-card class="box-card">
      <span class="top">{{ fragment.time }}</span>
      <span class="img-block">
        <el-tooltip :content="iconTooltip" placement="left-start">
          <img :src="weatherIcon" alt="icon" />
        </el-tooltip>
      </span>
      <div class="bottom">
        <span>{{ weatherDegree }}</span>
        <span>{{ iconTooltip }}</span>
      </div>

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
.card-wrap {
  display: flex;
}
span {
  display: block;
  /* margin-left: 10px; */
}
.img-block {
  background-color: #9fcbf29e;
}
span img {
  cursor: pointer;
}
.box-card >>> {
  /* display: flex; */
  overflow: hidden;
  padding: 0;
  width: 100px;
  background-color: rgb(6, 65, 37);
  border: 0px;
}
.box-card .top {
  background-color: #2d40dc;
  padding: 10px;
  color: #fff;
}
.box-card >>> .el-card__body {
  padding: 0px;
}
.bottom {
  /* background-color: rgb(6, 65, 37); */
  padding: 10px;
  color: floralwhite;
}
</style>
