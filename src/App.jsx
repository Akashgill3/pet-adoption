import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Tommy" animal="Dog" breed="Mixed" />
    <Pet name="Whiskey" animal="Cat" breed="Mixed" />
    <Pet name="Hades" animal="Cat" breed="Mixed" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
