import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Menu from "./pages/Menu";
import Search from "./pages/Search";

function App() {
    return (
        <div>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route path="/Search" element={<Search />} />
                    </Routes>
                    <Routes>
                        <Route path="/form" element={<Form />} />
                    </Routes>
                    <Routes>
                        <Route path="/info" element={<Info />} />
                    </Routes>
                    <Routes>
                        <Route path="/bonus" element={<Menu />} />
                    </Routes>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
