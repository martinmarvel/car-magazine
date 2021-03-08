<template>
  <div>
    <div v-for="news in newsList" :key="news.id" class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">
          {{ news.title }}
          <span class="text-muted">{{ news.previewText }}</span>
        </h2>
        <br />
        <p class="lead">
          {{ news.newsText }}
        </p>
      </div>
      <div class="col-md-5">
        <img :src="news.thumbnail" :alt="news.title" />
      </div>
      <hr class="divider" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Post",

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

<style scoped>
.carousel-item {
  width: 100%;
  height: 100%;
}

img {
  height: 100%;
  width: 100%;
}
</style>