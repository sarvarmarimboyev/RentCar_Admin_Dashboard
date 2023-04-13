import React from "react";
import "../../styles/sell-car.css";
import sellCar from "../../assets/images/sell-car.png";
import TrackingCharts from "../../charts/TrackingCharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const SellCar = () => {
  const percentage = 55;
  const  percentage2=66;
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Sell Car</h2>
        <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>2022 Mercedes Benz</h2>
            <img src={sellCar} alt="" />
          </div>
          <div className="tracking__history">
            <h3>Tracking History</h3>
            <TrackingCharts />
          </div>
        </div>
        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Offers</h2>
            <div className="filter__widget-02">
              <select>
                <option value="Toyota">Toyota</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
              </select>
            </div>
          </div>

          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Lillian James</h3>
                <h6 className="avg__price">
                  $16,605 <span>Average price</span>
                </h6>

                <h6 className="market__price">Market averge is $16,605</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: `#01d293`,
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      backgroundColor: "#01d293",
                      textSize: "18px",
                    })}
                  />
                </div>
                  <h4>Impression Share</h4>
              </div>
                    <div className="box__03">
                      <span className="model__spend-icon">
                        <i class="ri-car-line"></i>
                      </span>
                      <h6 className="spend__amount">$1174</h6>
                    <p className="spend__title">Model Spend</p>
                    </div>
                    <div className="box__04">
                      <span className="model__spend-icon">
                        <i class="ri-share-forward-line"></i>
                      </span>
                      <h6 className="spend__amount">$1174</h6>
                    <p className="spend__title"> Spend per Unit turned</p>
                    </div>
                    <div className="box__05">
                      <span className="model__spend-icon">
                        <i class="ri-money-dollar-circle-line"></i>
                      </span>
                      <h6 className="spend__amount">$878</h6>
                    <p className="spend__title">Model Spend</p>
                    </div>
            </div>

            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Jon Doe </h3>
                <h6 className="avg__price">
                  $11,705 <span>Average price</span>
                </h6>

                <h6 className="market__price">Market averge is $16,605</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage2}
                    text={`${percentage2}%`}
                    styles={buildStyles({
                      pathColor: `#01d293`,
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      backgroundColor: "#01d293",
                      textSize: "18px",
                    })}
                  />
                </div>
                  <h4>Impression Share</h4>
              </div>
                    <div className="box__03">
                      <span className="model__spend-icon">
                        <i class="ri-car-line"></i>
                      </span>
                      <h6 className="spend__amount">$1174</h6>
                    <p className="spend__title">Model Spend</p>
                    </div>
                    <div className="box__04">
                      <span className="model__spend-icon">
                        <i class="ri-share-forward-line"></i>
                      </span>
                      <h6 className="spend__amount">$1174</h6>
                    <p className="spend__title"> Spend per Unit turned</p>
                    </div>
                    <div className="box__05">
                      <span className="model__spend-icon">
                        <i class="ri-money-dollar-circle-line"></i>
                      </span>
                      <h6 className="spend__amount">$878</h6>
                    <p className="spend__title">Model Spend</p>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
