import React from "react";

function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center -mt-18 animate-pulse">
        <img
          className="animate-pulse"
          width={100}
          height={100}
          src="/img/about.png"
          alt=""
        />
        <h2 className="text-sm font-semibold animate-blink">Loading</h2>
      </div>
    </div>
  );
}

export default loading;
