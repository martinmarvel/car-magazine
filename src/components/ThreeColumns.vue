<template>
  <div class="container marketing">
    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div v-for="news in newsList" :key="news.id" class="col-lg-4">
        <h2>{{ news.title }}</h2>
        <p>
          Some representative placeholder content for the three columns of text
          below the carousel. This is the first column.
        </p>
        <p><a class="btn btn-secondary" href="#">View details »</a></p>
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