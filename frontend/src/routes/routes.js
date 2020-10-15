import Layout from '../components/Layout.vue';
import AddUser from '../components/AddUser.vue';
import EditUser from '../components/EditUser.vue';

export const routes = [
  { path: '', component: Layout },
  { path: '/add-user', component: AddUser },
  { path: '/edit-user/:id', component: EditUser },
];
