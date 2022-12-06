import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Nav } from "./Components/Navagation/Nav";
import Auth from "./Pages/auth/Auth";
import { Shop } from "./Pages/Shop/Shop";

const Hats = () => {
    return <h1>Hats Component</h1>;
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Nav />}>
                <Route index element={<Home />} />
                <Route path="hats" element={<Hats />} />
                <Route path="auth" element={<Auth />} />
                <Route path="shop" element={<Shop />} />
                <Route path="jackets" element={""} />
                <Route path="sneakers" element={""} />
                <Route path="womens" element={""} />
                <Route path="mens" element={""} />

            </Route>
        </Routes>
    );
};

export default App;
