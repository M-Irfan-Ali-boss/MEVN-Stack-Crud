<template>
  <div class="hello">
    <h1>Welcome to Your Vue-Vuex App</h1>
    <div class="alert alert-success" role="alert" v-if="deleted">
      User has been successfully deleted!
    </div>
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
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.address }}</td>
              <td>
                <button @click="editUser(user.id)"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
                <button @click="deleteUser(user.id)"><i class="material-icons text-danger" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Layout',
  data() {
    return {
      deleted: false,
    };
  },
  computed: mapState(['users']),
  methods: {
    editUser(id) {
      this.$router.push(`/edit-user/${id}`);
    },
    async deleteUser(id) {
      const result = await this.$store.dispatch('deleteUser', id);
      if (result === 1) {
        this.deleted = true;
        setTimeout(() => {
          this.deleted = false;
        }, 2000);
      } else {
        this.deleted = false;
      }
    },
  },
  created() {
    this.$store.dispatch('getAllUsers');
  },
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
button {
  background: transparent;
  border: 0;
}
button:focus {
  outline: none;
}
</style>
