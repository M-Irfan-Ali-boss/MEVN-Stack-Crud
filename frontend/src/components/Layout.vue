<template>
  <div class="hello">
    <h1>Welcome to Your Vue-Vuex App</h1>
    <div class="table-responsive my-5">
      <div class="table-wrapper">
        <div class="table-title mb-4 text-left">
          <h2>Manage <b>Employees</b></h2>
        </div>
        <table class="table table-striped table-hover text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Thomas Hardy</td>
              <td>thomashardy@mail.com</td>
              <td>(171) 555-2222</td>
              <td>89 Chiaroscuro Rd, Portland, USA</td>
              <td>
                <router-link to="/edit-user/1"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></router-link>
                <router-link to="/delete-user"><i class="material-icons text-danger" data-toggle="tooltip" title="Delete">&#xE872;</i></router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
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
</style>
