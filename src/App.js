import "./App.css";
import "./styles/scss/styles.scss";
import { Routes, Route } from "react-router-dom";
import { Home, About, Creators, Contact } from "./pages";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/creators" element={<Creators />} />
        {/* <Route path="/creator/:id" element={<Creator />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
