import { createHashRouter } from "react-router-dom";

import HomePage from './Pages/Home';
import RedirectPage from "./Pages/Redirect";
import NotFoundPage from "./Pages/NotFound";

const routers = createHashRouter([
    {
        path: "/",
        errorElement: <NotFoundPage/>,
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