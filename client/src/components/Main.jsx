import React from "react";
import { Home, Dashboard, Summary } from "./MainComponents";

const Main = ({ activeState, setLoader }) => {
  const getComponent = (activeState) => {
    switch (activeState) {
      case "home":
        return <Home setLoader={setLoader} />;
      case "dashboard":
        return <Dashboard setLoader={setLoader} />;
      case "summary":
        return <Summary setLoader={setLoader} />;
      default:
        return <Home setLoader={setLoader} />;
    }
  };

  return (
    <div className="w-full z-0 flex justify-center items-center bg-secondary-300 h-full">
      <div className="w-16 h-full" />
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-16" />
        <div className="w-full h-full pt-5">
          <div className="w-full h-full overflow-y-auto">
            {getComponent(activeState)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
