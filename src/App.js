import "./styles/scss/styles.scss";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  LcMania,
  Merch,
  SingleLcMania,
  About,
  Latest,
  Article,
  Creators,
  Creator,
  Contact,
  Join,
} from "./pages";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/lcmanias" element={<LcMania />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/lcmania/:id" element={<SingleLcMania />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/creator/:id" element={<Creator />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
      </Route>
    </Routes>
  );
}

export default App;
