<template>
  <form class="text-left">
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
    <button type="submit" @click.prevent="addUser" class="btn btn-success ">Add User</button>
  </form>
</template>

<script>
export default {
  name: 'AddUser',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
    };
  },
  methods: {
    async addUser() {
      let res = await this.$store.dispatch('addUser', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
      });

      if (res == 1) {
        this.$router.replace('/');
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
