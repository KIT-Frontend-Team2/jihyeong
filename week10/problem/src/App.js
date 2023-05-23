import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './adapters/router';
import ModalProvider from './store/2_context';

function App() {
  return (
    <>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </>
  );
}

export default App;
