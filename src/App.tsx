import { Header } from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="flex flex-col w-full h-full font-custom">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
