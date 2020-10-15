<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success">
    <router-link class="navbar-brand text-danger" to="/" exact>Vuex</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" exact>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add-user">Add User</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar-brand {
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
}
a {
  color: #ffffff;
  margin: 0 10px;
  text-decoration: none;
  font-size: 20px;
}
</style>
