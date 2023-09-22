import App from "./App";
import { createHashRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Error from "./components/Error";
import { getApplications, getApplicationDetails } from "./utilities";
import JobPage from "./pages/JobPage";

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
        {
            path: '/application/:id',
            element: <JobPage/>,
            loader: getApplicationDetails
        },
        {
            path: '/job/',
            element: <JobPage/>
        }
    ]
}])

export default router;