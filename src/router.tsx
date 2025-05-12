import { createHashRouter } from "react-router-dom";

import HomePage from './Pages/Home';
import RedeirectPage from "./Pages/Redirect";

const routers = createHashRouter([
    {
        path: "/home",
        errorElement: <RedeirectPage/>,
        element: <HomePage/>,
    }
]);

export default routers;