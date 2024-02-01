import React from "react";
import { Home, Dashboard, Summary } from "./MainComponents";
import Summaries from "./MainComponents/Summaries";

const Main = ({ activeState, setActiveState, data, setLoader }) => {
  const getComponent = (activeState) => {
    switch (activeState) {
      case "home":
        return (
          <Home
            setActiveState={setActiveState}
            data={data}
            setLoader={setLoader}
          />
        );
      case "dashboard":
        return <Dashboard setLoader={setLoader} />;
      case "summary":
        return <Summary data={data} setLoader={setLoader} />;
      case "summaries":
        return <Summaries data={data} setLoader={setLoader} />;
      default:
        return (
          <Home
            setActiveState={setActiveState}
            data={data}
            setLoader={setLoader}
          />
        );
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
