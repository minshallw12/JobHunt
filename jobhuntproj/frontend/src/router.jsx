import App from "./App";
import { createHashRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Error from "./components/Error";
import { getApplications } from "./utilities";

const router = createHashRouter([{
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
        {
            index: true,
            element: <HomePage/>,
            loader: getApplications
        },
    ]
}])

export default router;