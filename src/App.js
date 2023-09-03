import "./styles/scss/styles.scss";
import { Routes, Route } from "react-router-dom";
import { Home, About, Creators, Creator, Contact, Join } from "./pages";
import Layout from "./components/layout";
import News from "./pages/news";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/creator/:id" element={<Creator />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/article/:id" element={<Article />} /> */}

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
