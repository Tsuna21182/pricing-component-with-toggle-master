import { useState } from "react";

function BtnChance() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      className="bg-linear-to-r from-primero to-segundo w-9 h-5 rounded-xl cursor-pointer "
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`bg-white rounded-full h-4 w-4 mx-1 transform duration-300 ease-in-out ${
          isOn ? "translate-x-0" : "translate-x-3.5"
        }`}
      ></div>
    </button>
  );
}

export default BtnChance;
