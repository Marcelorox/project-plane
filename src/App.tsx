import { Header } from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="h-full w-full flex flex-col font-custom">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
