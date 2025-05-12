import { createHashRouter } from "react-router-dom";

import HomePage from './Pages/Home';

const routers = createHashRouter([
    {
        path: "",
        children: [
            {
                path: "/",
                element: <HomePage/>,
            }
        ]
    }
]);

export default routers;