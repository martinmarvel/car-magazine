<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <router-link to="/">
          <a class="navbar-brand" href="#">Car Magazine</a></router-link
        >

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link active" aria-current="page" href="#"
                  >Home</a
                ></router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/NewPost"
                ><a class="nav-link" href="#">NewPost</a></router-link
              >
            </li>
          </ul>

          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>