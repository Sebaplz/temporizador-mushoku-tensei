import "./App.css";
import Timer from "./components/Timer";

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 lg:gap-8">
      <h1 className="text-3xl lg:text-5xl text-center italic">
        Mushoku Tensei Season 2 Part 2
      </h1>
      <Timer />
      <h4 className="italic">X / 04 / 2024</h4>
    </main>
  );
}

export default App;
