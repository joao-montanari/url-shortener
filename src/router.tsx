import { createHashRouter } from "react-router-dom";

import HomePage from './Pages/Home';
import RedirectPage from "./Pages/Redirect";

const routers = createHashRouter([
    {
        path: "/",
        // errorElement: <RedirectPage/>,
        // element: <HomePage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "/home",
                element: <HomePage/>,
            },
            {
                path: "/r",
                element: <RedirectPage/>,
            },
            {
                path: "/r/:id",
                element: <RedirectPage/>,
            }
        ]
    }
]);

export default routers;