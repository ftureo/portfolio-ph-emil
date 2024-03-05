import React from "react";
import { paths } from "./paths";

const Home = React.lazy(() => import("../pages/Home"));
const AboutMe = React.lazy(() => import("../pages/About-me"));
const MainAlbum = React.lazy(() => import("../pages/MainAlbum"));
const SpecialAlbum = React.lazy(() => import("../pages/SpecialAlbum"));
const Shop = React.lazy(() => import("../pages/Shop"));

export const routes = [
    { path: paths.HOME, element: <Home /> },
    { path: paths.MAIN_ALBUM, element: <MainAlbum /> },
    { path: paths.SPECIAL_ALBUM, element: <SpecialAlbum /> },
    { path: paths.ABOUT_ME, element: <AboutMe /> },
    { path: paths.SHOP, element: <Shop /> },
];