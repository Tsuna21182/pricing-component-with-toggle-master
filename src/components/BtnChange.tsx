type BtnChangeProps = {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

function BtnChange({ isOn, setIsOn }: BtnChangeProps) {
  return (
    <button
      className="bg-gradient-to-r from-primero to-segundo w-9 h-5 rounded-xl cursor-pointer hover:from-LightGrayishBlue hover:to-LightGrayishBlue transition duration-200 ease-in-out"
      onClick={() => setIsOn(!isOn)}
    >
      <div
        className={`bg-white rounded-full h-4 w-4 mx-1 transform duration-300 ease-in-out  ${
          isOn ? "translate-x-0" : "translate-x-3.5"
        }`}
      ></div>
    </button>
  );
}

export default BtnChange;
