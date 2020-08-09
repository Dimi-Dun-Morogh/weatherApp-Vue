<template>
  <div id="app">
    <div class="wrap">
      <el-card class="box-card card-wrapper">
        <searchForm />
        <cityInfo />
        <weatherToday />
        <weatherByDays />
      </el-card>
    </div>
  </div>
</template>

<script>
import searchForm from "./components/searchForm.vue";
import weatherToday from "./components/weatherToday.vue";
import weatherByDays from "./components/weatherByDays.vue";
import cityInfo from "./components/cityInfo.vue";

export default {
  name: "App",
  components: {
    searchForm,
    weatherToday,
    weatherByDays,
    cityInfo
  }
};
</script>

<style>
body {
  background-color: #367ab64d;
  background-image: url("assets/bg.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
}
.wrap {
  max-width: 960px;
}
.card-wrapper {
  border: none !important;
  background-color: rgba(255, 255, 255, 0.7) !important;
}
@media (max-width: 375px) {
  .wrap {
    max-width: 375px;
  }
}
</style>
