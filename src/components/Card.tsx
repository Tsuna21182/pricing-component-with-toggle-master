import Btn from "./Btn";

type CardProps = {
  item: {
    id: number;
    name: string;
    price: number;
    description: string;
    users: string;
    send: string;
  };
  index: number;
};

function Card({ item, index }: CardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-sm shadow-LightGrayishBlue odd:bg-white even:bg-gradient-to-r from-primero to-segundo odd:text-GrayishBlue even:text-white sm:odd:h-[25rem] sm:even:h-[27rem] sm:even:mt-[-15px]`}
    >
      <p className=" font-semibold">{item.name}</p>
      <p className=" font-bold text-3xl mt-4 border-b-1 border-LightGrayishBlue pb-4 w-full text-center">
        ${item.price}
      </p>
      <p className=" font-semibold mt-5 border-b-1 border-LightGrayishBlue pb-4 w-full text-center">
        {item.description}
      </p>
      <p className=" font-semibold mt-5 border-b-1 border-LightGrayishBlue pb-4 w-full text-center">
        {item.users}
      </p>
      <p className=" font-semibold mt-5 border-b-1 border-LightGrayishBlue pb-4 w-full text-center">
        {item.send}
      </p>
      <Btn index={index} />
    </div>
  );
}

export default Card;
