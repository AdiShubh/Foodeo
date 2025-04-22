import React, { useEffect, useState } from "react";
import MenuCard from "../MenuCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// Import the useDishes hook
import useDishes from "../../hooks/useDishes"; // Make sure the path is correct

const MenuSection = () => {
  // Use the custom hook to fetch dishes and handle filtering
  const { dishes, loading, error,  } = useDishes();

  
  
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
            <Tab
              className="whitespace-nowrap md:ml-8 text-gray-900 text-xl font-normal bg-gray-300 md:px-8 px-3 py-2 rounded-md"
              onClick={() => setFilter('')} // All categories
            >
              All Category
            </Tab>
            <Tab
              className="text-gray-900 text-xl font-normal bg-gray-300 md:px-10 px-3 py-2 rounded-md"
              onClick={() => setFilter("dinner")}
            >
              Dinner
            </Tab>
            <Tab
              className="text-gray-900 text-xl font-normal bg-gray-300 md:px-10 px-3 py-2 rounded-md"
              onClick={() => setFilter("lunch")}
            >
              Lunch
            </Tab>
            <Tab
              className="text-gray-900 text-xl font-normal bg-gray-300 md:px-10 px-3 py-2 rounded-md"
              onClick={() => setFilter("dessert")}
            >
              Dessert
            </Tab>
            <Tab
              className="mr-[51px] md:mr-6 text-gray-900 text-xl font-normal bg-gray-300 md:px-10 px-3 py-2 rounded-md"
              onClick={() => setFilter("drinks")}
            >
              Drink
            </Tab>
          </TabList>

          {/* Filtered and Display Dishes Based on Selected Tab */}
          <TabPanel className="flex gap-[30px] justify-center flex-wrap ">
            {/* Display all dishes if no filter is selected */}
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              dishes.map((item, index) => (
                <MenuCard key={index} item={item} />
              ))
            )}
          </TabPanel>
          <TabPanel className="flex gap-[30px] justify-center flex-wrap ">
            {/* Display dishes filtered by type: "dinner" */}
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              dishes
                .filter((item) => item.type === "dinner")
                .map((item, index) => <MenuCard key={index} item={item} />)
            )}
          </TabPanel>
          <TabPanel className="flex gap-[30px] justify-center flex-wrap ">
            {/* Display dishes filtered by type: "lunch" */}
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              dishes
                .filter((item) => item.type === "lunch")
                .map((item, index) => <MenuCard key={index} item={item} />)
            )}
          </TabPanel>
          <TabPanel className="flex gap-[30px] justify-center flex-wrap ">
            {/* Display dishes filtered by type: "dessert" */}
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              dishes
                .filter((item) => item.type === "dessert")
                .map((item, index) => <MenuCard key={index} item={item} />)
            )}
          </TabPanel>
          <TabPanel className="flex gap-[30px] justify-center flex-wrap ">
            {/* Display dishes filtered by type: "drinks" */}
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              dishes
                .filter((item) => item.type === "drinks")
                .map((item, index) => <MenuCard key={index} item={item} />)
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MenuSection;
