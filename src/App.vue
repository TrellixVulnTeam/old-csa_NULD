<template>
  <div id="app" >
    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

    <!-- <div class="m-0 p-0 orange-flag shadow-sm"> -->

    <div class="diagonal-box w-100 h-100 m-0 p-0 ">

    </div>
    <div class="m-0 p-0  ">
      <!-- <img
        src="./assets/img/logos/EL_Logo.svg"
        alt=""
        style="
          opacity: 49%;
          position: absolute;
          float: left;
          left: -14px;
          transform: rotate(310deg);
          margin-top: 122px;
          margin-left: 0px;
        "
      /> -->

      <NavBar></NavBar>
      
      <router-view />

    </div>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar },
  async created () {
    // debugger;
      
  },
};
</script>

<style lang="scss">
@import "./app.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

	// red: 'rgb(255, 99, 132)',
	// orange: 'rgb(255, 159, 64)',
	// yellow: 'rgb(255, 205, 86)',
	// green: 'rgb(75, 192, 192)',
	// blue: 'rgb(54, 162, 235)',
	// purple: 'rgb(153, 102, 255)',
	// grey: 'rgb(201, 203, 207)'
.diagonal-box {
	// background-image: linear-gradient(45deg, #654ea3, #eaafc8);
  background-color: rgb(255, 159, 64);
	transform: skewY(-11deg) translateY(-60%);

  position: absolute;
  z-index:-1
}

.orange-flag {
  position: absolute;
  height: 400px;
  width: 100%;
  background-color: $orange;

  background: linear-gradient(to right bottom, #e05151, $el-Orange);
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.active {
      color: #75879a;
    }
  }
}

.ml-tab {
  margin-left: $navBarWidth;
}
.ml-tab-x {
  margin-left: $navBarWidth + 20px;
}
.logout {
  position: absolute;
  right: 0px;
  padding: 20px;
  border-radius: 0 0 0 40px;
  color: white;
  // background-color: $el-light-dark;
}
.sidebar {
  border-radius: 0 0 30px 0;
 
  height: 700px;
  width: 20%; 
  max-width: 250px;
  background-color:white;
  position:absolute;
  
}

body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td { margin:0; padding:0; }
table { border-collapse:collapse; border-spacing:0; }
fieldset,img { border:0; }
address,caption,cite,code,dfn,em,strong,th,var { font-style:normal; font-weight:normal; }
caption,th { text-align:left; }
h1,h2,h3,h4,h5,h6 { font-size:100%; font-weight:normal; }
q:before,q:after { content:''; }
abbr,acronym { border:0; }

body { background: #fff; }
/* optional Container STYLES */
.chart { height: 600px; margin: 5px; width: 900px; }
.Treant > .node { padding: 3px; border: 1px solid #484848; border-radius: 3px; }
.Treant > .node img { width: 100%; height: 100%; }

.Treant .collapse-switch { width: 100%; height: 100%; border: none; }
.Treant .node.collapsed { background-color: #DEF82D; }
.Treant .node.collapsed .collapse-switch { background: none; }
</style>
