import React, { useState } from "react";
import Boryeong11 from "../Components/Boryeong11_check";
import Boryeong12 from "../Components/Boryeong12_check";
import Boryeong13 from "../Components/Boryeong13_check";
import Boryeong14 from "../Components/Boryeong14_check";

function SitetestCheck() {
  return (
    <div className="m-4">
      <div className="space-y-10 flex-col text-lg">
        <Boryeong11 />
        <Boryeong12 />
        <Boryeong13 />
        <Boryeong14 />
      </div>
    </div>
  );
}

export default SitetestCheck;
