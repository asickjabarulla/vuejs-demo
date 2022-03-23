<template>
  <div class="container-fluid">
    <post-list :posts="posts" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostList from "../components/Post/PostList.vue";
export default {
  name: "Home",
  components: {
    PostList,
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },

  mounted() {
    this.getPosts();
  },

  methods: {
    ...mapActions(["getPosts"]),
  },
};
</script>
