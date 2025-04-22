import { useState, useEffect } from "react";
import axios from "axios";

const useDishes = () => {
  const [dishes, setDishes] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/dishes/alldishes");
        setDishes(response.data); // Make sure response.data is an array
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Failed to fetch data");
      }
    };
    fetchDishes();
  }, []);

  const filteredDishes = dishes.filter((dish) =>
    filter ? dish.type === filter : true
  );

  return {
    dishes: filteredDishes, // Return filtered dishes
    loading,
    error,
    setFilter,
  };
};

export default useDishes;
