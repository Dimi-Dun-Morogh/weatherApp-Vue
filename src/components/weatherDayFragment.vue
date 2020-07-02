<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        {{ dayOfTheWeek }}
        <span>{{ monthDayNumb }}</span>
      </div>
      <span>
        <el-tooltip :content="iconTooltip" placement="left-start">
          <img :src="weatherIcon" alt="icon" />
        </el-tooltip>
      </span>
      <div>
        <span>{{ weatherTemp }}</span>
        <span> {{ weatherInfo }} </span>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "weatherDayFragment",
  props: ["dayFragment"],
  data: () => ({
    calendar: {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    },
    weatherArray: []
  }),
  computed: {
    getDate() {
      let dayData = Object.values(this.dayFragment)[0];
      return new Date(dayData.dt_txt);
    },
    dayOfTheWeek() {
      let day = this.getDate.getDay();
      return `${this.calendar[day]}`;
    },
    monthDayNumb() {
      let date = this.getDate;
      let [, month, numb] = date.toString().split(" ");
      return `${month} ${numb}`;
    },
    weatherIcon() {
      let index = Math.floor(this.weatherArray.length / 2);
      const icon = this.weatherArray[index].weather[0].icon;
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    },
    iconTooltip() {
      let index = Math.floor(this.weatherArray.length / 2);
      return `${this.weatherArray[index].weather[0].description}`;
    },
    weatherInfo() {
      let index = Math.floor(this.weatherArray.length / 2);
      return `${this.weatherArray[index].weather[0].main}`;
    },
    weatherTemp() {
      let tempOne = this.weatherArray[0].main.temp;
      let tempTwo = this.weatherArray[this.weatherArray.length - 1].main.temp;
      console.log(tempOne);
      return `${tempOne > 0 ? "+" + tempOne : tempOne} ... ${
        tempTwo > 0 ? "+" + tempTwo : tempTwo
      }`;
    }
  },
  watch: {},
  created: function() {
    this.weatherArray = Object.values(this.dayFragment);
  },
  methods: {}
};
</script>

<style scoped>
.box-card >>> {
  width: 150px;
}
span {
  display: block;
}
</style>
