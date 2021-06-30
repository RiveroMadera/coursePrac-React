import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/Login',
    component: Login,
  },
  {
    exact: true,
    path: '/Register',
    component: Register,
  },
  {
    exact: true,
    path: '/Player/:id',
    component: Player,
  },
  {
    name: 'NotFound',
    // path: '/NotFound',
    component: NotFound,
  },
];

export default routes;
