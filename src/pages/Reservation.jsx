import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const ReservationForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setselectedTime] = useState(null);
  const [selectedPersons, setselectedPersons] = useState(null);

  const schema = yup.object().shape({
    date: yup
      .date()
      .required("Date is required")
      .max(
        new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        "Cannot select a date more than 10 days from today"
      ),
    time: yup.string().required("Time slot is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const timeSlots = () => {
    const startTime = new Date(0, 0, 0, 11, 0);
    const endTime = new Date(0, 0, 0, 21, 0);
    const timeSlots = [];

    while (startTime <= endTime) {
      timeSlots.push(startTime.toLocaleTimeString([], { hour12: false }));
      startTime.setTime(startTime.getTime() + 45 * 60 * 1000);
    }

    return timeSlots;
  };

  const timeOptions = timeSlots();

  function partSize(i) {
    if (i <= 0) {
      return 0; // Handle invalid input (i cannot be negative or zero)
    }

    const parts = [];
    for (let j = 1; j <= i; j++) {
      parts.push(j);
    }

    return parts;
  }

  const Persons = partSize(10);

  return (
    <div className="w-11/12 mx-auto my-12 p-10  flex flex-col  md:flex-row gap-4  ">
      <div className="md:w-1/2 flex items-center p-6 justify-center  ">
        <img
          src="img007.png"
          alt="Restaurant Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/2 p-4      ">
        <h2 className="text-6xl font-semibold mb-4 text-center">
          Book a Table
        </h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className=" mx-auto w-11/12   my-10  ">
            <div className=" w-full  mx-auto   mb-8 ">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  register("date", { value: date });
                }}
                wrapperClassName="w-full "
                fixedHeight
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
                className="text-2xl w-full  border rounded-md p-4"
                maxDate={new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)}
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>
            <div className="mb-8">
              <select
                id="time"
                {...register("time")}
                className="text-2xl  w-full border rounded-md p-4"
                onChange={(e) => setselectedTime(e.target.value)}
              >
                <option value="">Select a time</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="text-red-500">{errors.time.message}</p>
              )}
            </div>
            <div className="mb-8">
              <select
                id="partySize"
                {...register("partySize")}
                className="text-2xl   w-full border rounded-md p-4"
                onChange={(e) => setselectedPersons(e.target.value)}
              >
                <option value="">Select a party size</option>
                {Persons.map((person) => (
                  <option key={person} value={person}>
                    {person}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="text-red-500">{errors.partSize.message}</p>
              )}
            </div>
            <div className="mb-4">
              <p className="text-gray-700  text-2xl mb-4  ">
                Selected Date:
                <span className="text-green-700 font-semibold ml-4">
                  {selectedDate?.toLocaleDateString()}
                </span>
              </p>
              <p className="text-gray-700 text-2xl mb-4 ">
                Selected Time:
                <span className="text-green-700 font-semibold ml-4">
                  {selectedTime}
                </span>
              </p>
              <p className="text-gray-700 text-2xl ">
                Selected Persons:
                <span className="text-green-700 font-semibold ml-4">
                  {selectedPersons}
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-3xl  w-full mt-14  text-white px-4 py-6 rounded-xl"
              disabled={!selectedDate || !selectedTime || !selectedPersons}
              onClick={() => toast.success("Reservation Confirmed ")}
            >
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;


