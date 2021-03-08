<template>
  <div>
    <hr class="divider" />
    <Header />
    <hr class="divider" />
    <Carousel />
    <hr class="divider" />
    <ThreeColumns />
    <hr class="divider" />
    <Post />
    <Footer />
  </div>
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
