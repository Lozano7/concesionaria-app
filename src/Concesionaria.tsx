import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import store from './store/index';
import 'sweetalert2/src/sweetalert2.scss';
import 'animate.css';

function Concesionaria() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default Concesionaria;
