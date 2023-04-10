import React from "react";
import "../../styles/dashboard.css";
import { SingleCard } from "../reusable/SingleCard";
import MileCharts from "../../charts/MileCharts";
import CarStatsCharts from "../../charts/CarStatsCharts";
import RecommendedCarCard from "../UI/RecommendedCarCard";
import recommendCars from './../../assets/dummy-data/recommendCars';

const carobj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
};
const tripobj = {
  title: "Daily trips",
  totalNumber: 1950,
  icon: "ri-steering-2-line",
};
const clientobg = {
  title: "Clients Annaully",
  totalNumber: "82k", 
  icon: "ri-user-line",
};

const distanceobj = {
  title: "Kilometrs Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carobj} />
          <SingleCard item={tripobj} />
          <SingleCard item={clientobg} />
          <SingleCard item={distanceobj} />
        </div>
        <div className="statics">
          <div className="state">
            <h3 className="stats__title">Mile Statistics</h3>
            <MileCharts />
          </div>

          <div className="state">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsCharts />
          </div>
        </div>
        <div className="recommend__cars-wrapper">
{
  recommendCars.map(item=> <RecommendedCarCard item={item} key={item.id}  />)
}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
