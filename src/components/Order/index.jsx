import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuCard from "../MenuCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OrderCard from "../OrderCard";
const OrderSection = () => {
  const [dishData, setDishData] = useState([]);

  async function getData() {
    const response = await axios.get("http://localhost:9000/");
    setDishData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gray-200">
      <div>
        <p className="text-center md:text-5xl text-4xl pt-4">
          Our Popular Menu
        </p>
      </div>
      <div>
        <Tabs
          className="items-center justify-start w-[80%] mx-auto mt-10 pb-10 gap-[30px] "
          selectedTabClassName="!text-white !bg-red-500  md:px-10 px-3 py-2"
          selectedTabPanelClassName="relative tab-panel--selected"
        >
          <TabList className="flex flex-wrap md:flex-row md:justify-around w-[100%] md:mx-auto gap-[16px] p-[19px] md:mb-6 md:gap-2  ">
            <Tab className="whitespace-nowrap md:ml-8   text-gray-900 text-xl font-normal bg-gray-300 md:px-8 px-3 py-2 rounded-md">
              All Category
            </Tab>
            <Tab className="text-gray-900 text-xl font-normal bg-gray-300 md:px-10 px-3 py-2 rounded-md">
              Dinner
            </Tab>
            <Tab className="text-gray-900 text-xl font-normal bg-gray-300 md:px-10 px-3 py-2 rounded-md">
              Lunch
            </Tab>
            <Tab className="text-gray-900 text-xl font-normal bg-gray-300 md:px-10 px-3 py-2 rounded-md">
              Dessert
            </Tab>
            <Tab className="mr-[51px] md:mr-6 text-gray-900 text-xl font-normal bg-gray-300 md:px-10 px-3 py-2 rounded-md">
              Drink
            </Tab>
          </TabList>
          {/* <div className="flex flex-row items-center justify-center w-full p-8 "> */}

          <TabPanel className="flex gap-[30px]  justify-center flex-wrap  ">
            {dishData.map((item, index) => {
              return <OrderCard key={index} item={item} />;
            })}
          </TabPanel>
          <TabPanel className="flex gap-[30px] justify-center flex-wrap ">
            {dishData
              .filter((item) => item.type === "dinner")
              .map((item, index) => {
                return <OrderCard key={index} item={item} />;
              })}
          </TabPanel>
          <TabPanel className="flex gap-[30px] justify-center flex-wrap ">
            {dishData
              .filter((item) => item.type === "lunch")
              .map((item, index) => {
                return <OrderCard key={index} item={item} />;
              })}
          </TabPanel>
          <TabPanel className="flex gap-[30px] justify-center flex-wrap ">
            {dishData
              .filter((item) => item.type === "dessert")
              .map((item, index) => {
                return <OrderCard key={index} item={item} />;
              })}
          </TabPanel>
          <TabPanel className="flex gap-[30px] justify-center flex-wrap ">
            {dishData
              .filter((item) => item.type === "drinks")
              .map((item, index) => {
                return <OrderCard key={index} item={item} />;
              })}
          </TabPanel>

          {/* </div> */}
        </Tabs>
      </div>
    </div>
  );
};

export default OrderSection;
