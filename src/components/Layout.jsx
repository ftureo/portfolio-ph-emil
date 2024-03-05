import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loader } from "./Loader";

export const Layout = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};
