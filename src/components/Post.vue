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
        // firebase den gelen data objesinin postList array ine aktarma işlemi
        let data = response.data;
        for (let key in data) {
          this.newsList.push({ ...data[key], id: key });
        }
      })
      .catch((e) => console.log(e));
  },
};
</script>

<style scoped>
img {
  width: 500px;
  height: 500px;
}
</style>