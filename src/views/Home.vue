<template>
  <Header />
  <hr class="featurette-divider" data-v-469af010="" />
  <Carousel />
  <hr class="featurette-divider" data-v-469af010="" />
  <ThreeColumns />
  <hr class="featurette-divider" data-v-469af010="" />
  <Post />
  <hr class="featurette-divider" data-v-469af010="" />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import ThreeColumns from "@/components/ThreeColumns.vue";
import Post from "@/components/Post.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Carousel,
    ThreeColumns,
    Post,
    Footer,
  },
};
</script>
