import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/Layout";
import { NotFound } from "./pages/NotFound";
import routes from "./routes";

function App() {
    console.log({routes});
    const router = createBrowserRouter([
        {
            element: <Layout />,
            errorElement: <NotFound />,
            children: routes,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
