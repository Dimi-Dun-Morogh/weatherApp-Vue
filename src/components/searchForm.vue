<template>
  <div class="wrap">
    <span>Welcome to Weather App</span>
    <el-form :model="form" :inline="true" @submit.native.prevent>
      <el-form-item class="inputLabel" label="City name">
        <el-input
          v-model="form.cityName"
          @keyup.enter.native="onSubmit"
          class="search-input"
        ></el-input>
      </el-form-item>
      <el-form-item class="button-item">
        <el-button
          type="primary"
          @click="onSubmit"
          icon="el-icon-search"
          class="button"
          >Search</el-button
        >
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
span {
  margin-bottom: 10px;
  display: block;
  font-family: "Italianno", cursive;
  font-size: 50px;
}
.button {
  background-color: #2d40dc;
}
.inputLabel {
  font-weight: bold;
  font-size: 17px;
}
@media (max-width: 469px) {
  .inputLabel {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
  }
}
</style>
