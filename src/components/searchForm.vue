<template>
  <div class="wrap">
    <span>Welcome to Weather App</span>
    <el-form :model="form" :inline="true" @submit.native.prevent>
      <el-form-item label="City name">
        <el-input
          v-model="form.cityName"
          @keyup.enter.native="onSubmit"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
          icon="el-icon-search"
        ></el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "searchForm",
  data: () => ({
    form: {
      cityName: ""
    }
  }),
  methods: {
    ...mapActions("weatherData", ["getWeatherData"]),
    async onSubmit(e) {
      e.preventDefault();
      console.log(this.form);
      await this.getWeatherData(this.form.cityName);
    }
  }
};
</script>

<style scoped>
.wrap {
  min-width: 400px;
}
span {
  margin-bottom: 10px;
  display: block;
  font-family: "Italianno", cursive;
  font-size: 50px;
}
</style>
