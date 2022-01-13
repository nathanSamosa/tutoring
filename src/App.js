import React from "react";
import { Route, Routes } from "react-router"

import Home from "./Home"
import ReviewPage from "./components/form-components/review-page"
import ContactPage from "./components/form-components/contact-page";



function App() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/review/*" element={<ReviewPage />} />
                <Route path="/contact/*" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default App;
