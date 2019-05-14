<template>
  <div class="logoColumn">
    <div class="logoContainer">
      <img alt="rose and pine logo" src="../assets/logo.svg" class="logo"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class LogoColumn extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logoColumn {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 33%;
}
.logoContainer {
  margin: 0;
  position: absolute;
  top: 10%;
  -ms-transform: translateY(-10%);
  transform: translateY(-10%)
}
.logo {
  display: relative;
  height: 50%;
  width: 50%;
}
.rightColumn {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 67%;
  background-color: #4B4A4B;
}
</style>
