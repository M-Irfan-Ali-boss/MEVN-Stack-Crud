<template>
  <form class="text-left">
    <div class="form-group">
      <label for="name">Name:*</label>
      <input type="text" class="form-control" id="name" name="name" />
    </div>
    <div class="form-group">
      <label for="email">Email Address:*</label>
      <input type="email" class="form-control" id="email" name="email" />
    </div>
    <div class="form-group">
      <label for="phone">Phone Number:*</label>
      <input type="text" class="form-control" id="phone" name="phone" />
    </div>
    <div class="form-group">
      <label for="address">Address:*</label>
      <textarea name="address" class="form-control" id="address"></textarea>
    </div>
    <button type="submit" class="btn btn-success ">Add User</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
