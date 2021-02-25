<template>
  <div>
    <hr class="featurette-divider" data-v-469af010="" />
    <Header />
    <Posters />
    <hr class="featurette-divider" data-v-469af010="" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Posters from "../components/Posters.vue";
export default {
  components: {
    Header,
    Footer,
    Posters,
  },
};
</script>
