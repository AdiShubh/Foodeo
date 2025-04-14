import React from "react";
import CustomButton from "../Button";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap w-[350px] p-[25px] max-w-[1112px] bg-slate-100 hover:shadow-xl hover:shadow-gray-400 rounded-2xl">
      <div>
        <img
          src={item.image}
          alt="image"
          className="w-[270px] my-1.5  md:h-auto  object-cover"
        />
      </div>
      <div className="text-center text-2xl my-2 font-semibold">
        <p>{item.name}</p>
      </div>
      <div className="text-center text-gray-800 text-sm">
        <p>{item.text}</p>
      </div>
      {/* <div className="text-xl">{item.ratings}</div> */}
      <div className="flex flex-row text-2xl font-semibold items-center justify-between gap-2 mt-[30px] w-[95%]">
        <p>$ {item.price}</p>
        <div>
          <CustomButton
            color="red"
            size="lg"
            shape="round"
            onClick={() => {
              navigate("/orderonline");
            }}
          >
            Order Now
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
