function Btn({ index }: { index: number }) {
  return (
    <div className="w-full">
      <button
        type="button"
        aria-label="Learn more"
        className={`mt-7 mb-3 uppercase font-semibold text-xs py-2 w-full rounded-lg transition ease-in-out duration-200 cursor-pointer 
      ${
        index % 2 === 0
          ? "bg-gradient-to-r from-primero to-segundo text-VeryLightGrayishBlue hover:from-white hover:to-white hover:text-GrayishBlue hover:border-2 hover:border-LightGrayishBlue"
          : "bg-white text-GrayishBlue border border-LightGrayishBlue hover:bg-gradient-to-r hover:from-primero hover:to-segundo hover:text-white hover:border-2 hover:border-VeryLightGrayishBlue"
      }`}
      >
        Learn More
      </button>
    </div>
  );
}

export default Btn;
