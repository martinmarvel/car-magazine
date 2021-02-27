<template>
  <div>
    <hr class="divider" />
    <Header />
    <hr class="divider" />
    <form @submit.prevent="onSubmit">
      <div class="row mb-2">
        <label class="col-sm-2 col-form-label">Title</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="news.title"
            placeholder="Type news title..."
          />
        </div>
      </div>

      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Thumbnail</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="news.thumbnail"
            placeholder="Image URL..."
          />
        </div>
      </div>

      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Text Preview</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            v-model="news.previewText"
            placeholder="Short title..."
          />
        </div>
      </div>

      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">News Text</label>
        <div class="col-sm-10">
          <textarea
            v-model="news.newsText"
            cols="30"
            rows="5"
            class="form-control"
            placeholder="500 character max..."
          ></textarea>
        </div>
      </div>
      <p>
        <button type="submit" class="btn btn-primary my-2">Save</button>
        <button @click="$router.push('/')" class="btn btn-secondary my-2">
          Cancel
        </button>
      </p>
    </form>
    <hr class="divider" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      news: {
        title: "",
        thumbnail: "",
        newsText: "",
        previewText: "",
      },
    };
  },

  methods: {
    onSubmit() {
      axios
        .post("/news.json", { ...this.news, updatedDate: new Date() })
        .then((response) => {
          console.log(response);
          this.post = {};
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
