import BtnChange from "./components/BtnChange";
import Card from "./components/Card";
import DbMonthly from "./Data/DbMonthly";
import DbAnnually from "./Data/DbAnnually";
import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);
  const pricingData = isOn ? DbAnnually : DbMonthly;

  return (
    <>
      <h1 className="font-bold text-GrayishBlue text-xl text-center mt-10">
        Our Pricing
      </h1>
      <div className="flex justify-center items-center mt-5 gap-5">
        <p className="text-LightGrayishBlue">Annually</p>
        <BtnChange isOn={isOn} setIsOn={setIsOn} />
        <p className="text-LightGrayishBlue">Monthly</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-1 m-10 md:px-2 lg:px-10 xl:px-38">
        {pricingData.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}
      </div>
    </>
  );
}

export default App;
