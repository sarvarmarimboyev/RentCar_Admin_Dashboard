import React from "react";
import "../../styles/booking.css";

import CarItem from "../UI/CarItem";
import bookingCars from "../../assets/dummy-data/booking-cars";

const Bookings = () => {
  return (
    <div className="bookings">
      <div className="booking_wrapper">
        <h2 className="booking__title">Booking</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>

          <div className="filter__widget-02">
            <select>
              <option value="Toyota">Toyota</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
            </select>
          </div>
        </div>

        <div className="booking__car-list">
          {bookingCars.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
