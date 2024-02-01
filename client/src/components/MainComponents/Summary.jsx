import React, { useContext } from "react";
import { IndexContext } from "../../context/IndexContext";

const Summary = ({ data }) => {
  const { index } = useContext(IndexContext);

  const summary = data[index]?.summary;

  const getSentenceArray = (summary) => {
    console.log(summary, index, data);
    return summary?.split(". ");
  };

  const sentenceArray = getSentenceArray(summary);

  return (
    <div className="w-full h-full flex justify-end items-center">
      <div className="w-full flex flex-col justify-between p-5 items-center h-full">
        <div className="text-5xl underline w-full font-semibold">
          OTC CatchUp {`#166`} Summary
        </div>
        <div className="mt-5 w-full h-full flex flex-col">
          <div className="my-5 text-3xl text-orange-400 font-semibold">
            Topics Discussed
          </div>
          <div>
            {sentenceArray?.map((sentence) => {
              if (sentence !== "")
                return (
                  <p className="my-2 text-lg font-semibold">{sentence}.</p>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
