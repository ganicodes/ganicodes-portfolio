import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { GridLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-[100vh] items-center justify-center bg-bg">
          <div className="content-center">
            <GridLoader color="#00c834" />
          </div>
        </div>
      ) : (
        <div className=" mx-auto min-h-[1000px] bg-bg px-4 pt-6 font-noto text-white md:px-0 md:pt-10">
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
