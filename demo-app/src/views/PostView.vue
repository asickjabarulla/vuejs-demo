<template>
  <div class="container-fluid">
    <post :post="postView" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Post from "../components/Post/Post.vue";
export default {
  name: "postView",
  components: {
    Post,
  },

  computed: {
    postView() {
      return this.$store.state.post;
    },
  },

  mounted() {
    this.getPostById(this.$route.params.id);
  },

  methods: {
    ...mapActions(["getPostById"]),
  },
};
</script>
