import React from "react";

const Summary = () => {
  const summary =
    "All of us, irrespective of our age, have friends. From among the number of friends we have, there might be one or two of them with whom we communicate each and every thing that happens in our lives. A day without a conversation with our friend might make us feel incomplete. A conversation between two friends can be based on the most trivial of things to the most serious ones.";

  const getSentenceArray = (summary) => {
    console.log(summary.split(". "));
    return summary.split(". ");
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
