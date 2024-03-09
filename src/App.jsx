import { Routes, Route } from "react-router-dom";

import { paths } from "./routes/paths";
import {
    Home,
    AboutMe,
    MainAlbum,
    NotFound,
    Shop,
    SpecialAlbum,
} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={paths.HOME} element={<Home />} />
            <Route path={paths.ABOUT_ME} element={<AboutMe />} />
            <Route
                path={paths.MAIN_ALBUM}
                element={<MainAlbum title="Main Title" />}
            />
            <Route path={paths.SPECIAL_ALBUM} element={<SpecialAlbum />} />
            <Route path={paths.SHOP} element={<Shop />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
