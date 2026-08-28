import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Landing />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/projects/:id"
                    element={<ProjectDetails />}
                />

            </Routes>

        </BrowserRouter>

    );
}


export default App;