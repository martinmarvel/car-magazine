<template>
  <!-- CAROUSEL -->
  <div>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class=""
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          class="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          class=""
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item">
          <img
            class="img"
            src="https://www.novitecgroup.com/assets/images/slider/lamborghini/aventador/sv-header__FocusFillWzE5MjAsNjAwLGZhbHNlLDBd.jpg"
            alt=""
          />

          <div class="container">
            <div class="carousel-caption text-start">
              <h1>Example headline.</h1>
              <p>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item active">
          <img
            class="img"
            src="https://www.scuderiacarparts.com/blog/wp-content/uploads/2019/05/lowering-hero.jpg"
            alt=""
          />

          <div class="container">
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="img"
            src="https://www.mclarensterling.com/static/dealer-14435/WF40647_VASTEMCL_HSUpdates_720S.jpg"
            alt=""
          />

          <div class="container">
            <div class="carousel-caption text-end">
              <h1>One more for good measure.</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {
  height: 100%;
  width: 100%;
}
</style>
