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
};

function Card({ item }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-5 rounded-lg">
      <p className="text-GrayishBlue font-semibold">{item.name}</p>
      <p className="text-DarkGrayishBlue font-bold text-2xl mt-4 border-b-1 border-LightGrayishBlue pb-4 w-full text-center">
        ${item.price}
      </p>
      <p className="text-GrayishBlue font-semibold mt-5 border-b-1 border-LightGrayishBlue pb-4 w-full text-center">
        {item.description}
      </p>
      <p className="text-GrayishBlue font-semibold mt-5 border-b-1 border-LightGrayishBlue pb-4 w-full text-center">
        {item.users}
      </p>
      <p className="text-GrayishBlue font-semibold mt-5 border-b-1 border-LightGrayishBlue pb-4 w-full text-center">
        {item.send}
      </p>
      <Btn />
    </div>
  );
}

export default Card;
