import React, { MouseEventHandler } from "react";

interface OverlayProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Overlay = ({ onClick }: OverlayProps) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen"
      onClick={onClick}
    ></div>
  );
  
};

export default Overlay;
