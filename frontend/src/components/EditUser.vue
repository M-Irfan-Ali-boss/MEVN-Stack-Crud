<template>
  <form class="text-left" @submit.prevent="updateUser(singleUser[0].id)" v-if="singleUser.length > 0">
    <div class="alert alert-danger" role="alert" v-if="error">
      <h5>User Not Updated!</h5>
    </div>
    <div class="form-group">
      <label for="name">Name:*</label>
      <input type="text" class="form-control" id="name" name="name" v-model="name" />
    </div>
    <div class="form-group">
      <label for="email">Email Address:*</label>
      <input type="email" class="form-control" id="email" name="email" v-model="email" />
    </div>
    <div class="form-group">
      <label for="phone">Phone Number:*</label>
      <input type="number" class="form-control" id="phone" name="phone" v-model="phone" />
    </div>
    <div class="form-group">
      <label for="address">Address:*</label>
      <textarea name="address" class="form-control" id="address" v-model="address"></textarea>
    </div>
    <button type="submit" class="btn btn-success ">Update User</button>
  </form>
  <div class="alert alert-danger" role="alert" v-else>
    <h1>User Not Found</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'EditUser',
  data() {
    return {
      id: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      error: false,
    };
  },
  methods: {
    async updateUser(id) {
      let result = await this.$store.dispatch('updateUser', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        id,
      });
      if (result === 1) {
        this.$router.replace('/');
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 2000);
      }
      console.log(result);
    },
  },
  computed: {
    ...mapState(['singleUser']),
  },
  watch: {
    singleUser(old) {
      this.name = old[0].name;
      this.email = old[0].email;
      this.phone = old[0].phone;
      this.address = old[0].address;
      this.id = old[0].id;
    },
  },
  mounted() {
    this.$store.dispatch('getSingleUser', { id: window.location.pathname.split('/')[2] });
  },
};
</script>

<style lang="scss" scoped></style>
