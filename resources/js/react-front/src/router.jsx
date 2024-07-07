import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <ErrorPage />,
    }
]);

export default router;
