import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OrderCard from "../OrderCard";
import useDishes from "../../hooks/useDishes"; // Importing the useDishes hook

const OrderSection = () => {
  // Use the custom hook to fetch dishes and handle filtering
  const { dishes, loading, error } = useDishes();

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
            <Tab className="whitespace-nowrap md:ml-8 text-gray-900 text-xl font-normal bg-gray-300 md:px-8 px-3 py-2 rounded-md">
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

          {/* All Categories Tab */}
          <TabPanel className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              dishes.map((item, index) => {
                return <OrderCard key={index} item={item} />;
              })
            )}
          </TabPanel>

          {/* Dinner Tab */}
          <TabPanel className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              dishes
                .filter((item) => item.type === "dinner")
                .map((item, index) => {
                  return <OrderCard key={index} item={item} />;
                })
            )}
          </TabPanel>

          {/* Lunch Tab */}
          <TabPanel className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              dishes
                .filter((item) => item.type === "lunch")
                .map((item, index) => {
                  return <OrderCard key={index} item={item} />;
                })
            )}
          </TabPanel>

          {/* Dessert Tab */}
          <TabPanel className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              dishes
                .filter((item) => item.type === "dessert")
                .map((item, index) => {
                  return <OrderCard key={index} item={item} />;
                })
            )}
          </TabPanel>

          {/* Drinks Tab */}
          <TabPanel className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              dishes
                .filter((item) => item.type === "drinks")
                .map((item, index) => {
                  return <OrderCard key={index} item={item} />;
                })
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderSection;
