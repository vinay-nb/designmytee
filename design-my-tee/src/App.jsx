import Customizer from "./pages/Customizer";
import Home from "./pages/home";
import CanvasModel from "./canvas";
import "./index.css";

function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
}

export default App;
