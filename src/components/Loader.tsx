import React from "react";
import Lottie from "lottie-react"
import bar from "../assets/LottieFile/bar.json"

const Loader = () => {
  return <div>
    <div className="flex justify-center items-center w-[95vw] h-screen">
      <div>
        <Lottie animationData={bar} loop={false} />
      </div>
    </div>
    </div>;
};

export default Loader;
