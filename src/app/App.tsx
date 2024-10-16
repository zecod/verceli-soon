import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Hero } from "./components/hero/Hero"; // Import your Home component
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Intro } from "./components/Intro";
import { NotFound } from "./components/NotFound";
import Home from "./Home";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
