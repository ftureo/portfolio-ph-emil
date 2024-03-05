// Import to use React Router DOM and routing completely
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <h1 className="text-3xl font-bold underline">
                            React App
                        </h1>
                    </>
                }
            />
            {/* <Route path="/about" element={<About />} /> */}
        </Routes>
    );
}

export default App;
