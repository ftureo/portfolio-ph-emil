import { Routes, Route } from "react-router-dom";

import { paths } from "./routes/paths";
import { Home, AboutMe, NotFound, Shop, Albumes } from "./pages";

function App() {
    return (
        <Routes>
            <Route path={paths.HOME} element={<Home />} />
            <Route path={paths.ABOUT_ME} element={<AboutMe />} />
            <Route
                path={paths.ALBUMES}
                element={<Albumes title="Main Title" />}
            />
            <Route path={paths.SHOP} element={<Shop />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
