<template>
  <div class="container marketing">
    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div v-for="news in newsList.slice(0, 3)" :key="news.id" class="col-lg-4">
        <h2>{{ news.title }}</h2>
        <p>
          {{ news.previewText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ThreeColumns",

  data() {
    return {
      newsList: [],
    };
  },

  created() {
    axios
      .get("/news.json")
      .then((response) => {
        let data = response.data;
        for (let key in data) {
          this.newsList.unshift({ ...data[key], id: key });
        }
      })
      .catch((e) => console.log(e));
  },
};
</script>