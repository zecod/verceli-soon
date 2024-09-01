import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero"; // Import your Home component
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Intro } from "./components/Intro";


const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/intro" element={<Intro />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
