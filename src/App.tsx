import BtnChange from "./components/BtnChange";
import Card from "./components/Card";
import DbMonthly from "./Data/DbMonthly";

function App() {
  return (
    <>
      <h1 className="font-bold text-GrayishBlue text-xl text-center mt-10">
        Our Pricing
      </h1>
      <div className="flex justify-center items-center mt-5 gap-5">
        <p className="text-LightGrayishBlue">Annually</p>
        <BtnChange />
        <p className="text-LightGrayishBlue">Monthly</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-5 m-10">
        {DbMonthly.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
