import App from "./App";
import { createHashRouter } from "react-router-dom";
import HomePage from "./components/Homepage";

const router = createHashRouter([{
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
        {
            index: true,
            element: <HomePage/>
        }
    ]
}])

export default router;