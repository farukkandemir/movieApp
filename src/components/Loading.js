import React from "react";
import {Puff} from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Puff
        height="80"
        width="80"
        radisu={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        visible={true}
      />
    </div>
  );
}

export default Loading;
