import React from "react";
import StepperInput from "../InputStepper";
import CustomButton from "../Button";
import OrderValue from "../OrderValue";

const CartItemCard = ({ item }) => {
  return (
    <div className="flex my-auto justify-center gap-2 bg-gray-200 ">
      <div>
        <table
          className=" mt-8 mb-4 max-w-4xl w-full whitespace-nowrap
         rounded-lg bg-white divide-y divide-gray-300 overflow-hidden"
        >
          <thead className="bg-red-500">
            <tr className="text-white text-left">
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                Product
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                Name
              </th>

              <th className="font-semibold text-sm uppercase px-6 py-4">
                Price
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                Quantity
              </th>
              {/* <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                Quantity
              </th> */}
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                Total Price
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {item.map((item) => (
              <tr>
                <td className="px-6 py-4">
                  <div className="flex flex-col items-center space-x-3">
                    <div className="inline-flex w-10 h-10">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt="User avatar"
                        src={item.image}
                      />
                    </div>
                    {/* <div>
                      <p> {item.name}</p>
                    </div> */}
                  </div>
                </td>
                <td className="px-6 py-4 text-center">{item.name}</td>
                <td className="px-6 py-4">
                  <p className=""> $ {item.price} </p>
                </td>
                <td className="px-6 py-4 text-center">
                  <StepperInput item={item} />
                </td>
                {/* <td className="px-6 py-4 text-center text-gray-500">
                  {item.quantity}
                </td> */}
                <td className="px-6 py-4 text-center">
                  $ {item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>

          {/* <tfoot>
            <tr>
              <td className="col-span-5 bg-green-300"></td>
            </tr>
          </tfoot> */}
        </table>
        <div className=" h-fit mb-4">
          <OrderValue />
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
