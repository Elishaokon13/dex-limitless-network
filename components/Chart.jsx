import React from "react";

const Iframe = () => {
  return (
    <div className="flex-initial md:flex-initial ml-10 items-center justify-center min-h-screen">
      <iframe
        width="auto"
        height="560"
        src="https://coinbrain.com/coins/bnb-0xc13cbf50370e5eae6f5dd9d8a1015007f34c4ead/lite?theme=dark&padding=16&currency=USD"
      ></iframe>
    </div>
  );
};

export default Iframe;
