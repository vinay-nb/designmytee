import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="absolute left-full ml-3 glassmorphism p-3 w-[195px] h-[220px] rounded-md flex flex-col gap-4">
      <textarea
        className="w-full bg-transparent text-sm border border-gray-300 p-2 outline-none flex-1 text-white"
        placeholder="Ask ai"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="asking ai"
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
