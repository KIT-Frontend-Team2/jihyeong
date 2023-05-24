import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './adapters/router';
import ModalProvider from './store/2_context';
import ListProvider from './store/3_context';
function App() {
    return (
        <>
            <ListProvider>
                <ModalProvider>
                    <RouterProvider router={router} />
                </ModalProvider>
            </ListProvider>
        </>
    );
}

export default App;
