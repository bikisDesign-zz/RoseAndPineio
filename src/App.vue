<template>
  <div id="app">
    <LeftColumn></LeftColumn>
    <div id="nav">
      <router-view/>
      <Navigation></Navigation>
    </div>
    <router-view />
  </div>
</template>
<script>

import Navigation from './components/Navigation'
import LeftColumn from "./components/LeftColumn"
export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'LeftColumn': LeftColumn,
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Roboto",  "Dosis", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
