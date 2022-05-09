import HomePage from '../views/pages/homepage';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/detail/:id': Detail,
};
 
export default routes;