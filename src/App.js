import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Nav } from "./Components/Navagation/Nav";
import { Footer } from "./Components/Footer/Footer";
import SignIn from "./Pages/sign-in/Sign-in";
import SignUp from "./Pages/sign-up/Sign-up";

const Hats = () => {
    return <h1>Hats Component</h1>;
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Nav />}>
                <Route index element={<Home />} />
                <Route path="hats" element={<Hats />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />

                <Route path="jackets" element={""} />
                <Route path="sneakers" element={""} />
                <Route path="womens" element={""} />
                <Route  path="mens" element={""} />

                <Route index element={<Footer />} />
            </Route>
        </Routes>
    );
};

export default App;
