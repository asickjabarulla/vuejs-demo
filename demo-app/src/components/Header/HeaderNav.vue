<template>
  <div class="navbar navbar-dark bg-dark shadow-sm header-cls">
    <div class="container d-flex justify-content-start">
      <a :href="'/'">
        <img :src="image" width="50" />
      </a>
      <a :href="'/'">
        <h2 class="text-white pl-5">BLOG</h2>
      </a>
    </div>
  </div>
</template>

<script>
import image from "./images/logo.png";

export default {
  data: function () {
    return {
      image: image,
    };
  },
};
</script>
<style scoped>
.navbar h2 {
  padding: 0px 15px;
}
.header-cls a {
  text-decoration: none;
}
</style>
