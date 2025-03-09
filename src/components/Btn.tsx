function Btn() {
  return (
    <div className="w-full">
      <button
        type="button"
        aria-label="Learn more"
        className="bg-gradient-to-r from-primero to-segundo hover:from-white hover:to-white hover:border-1 hover:border-LightGrayishBlue
         text-VeryLightGrayishBlue hover:text-primero 
          uppercase font-semibold text-xs py-2 w-full rounded-lg 
           mt-7 mb-3 transition ease-in-out duration-200 cursor-pointer"
      >
        Learn More
      </button>
    </div>
  );
}

export default Btn;
