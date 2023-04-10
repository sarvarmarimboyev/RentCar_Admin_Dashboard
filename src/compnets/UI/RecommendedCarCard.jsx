import React from "react";

function RecommendedCarCard(props) {
  const { carName, retweet, imgUrl, rentPrice, percentage } = props.item;

  return (
    <div className="recommend__car-card">
      <div className="recommend__car-top">
        <h5>
          <span>
            <i class="ri-restart-line"></i>
          </span>
          {percentage}% Recomended
        </h5>
      </div>
      <div className="recommaend__car-img">
        <img src={imgUrl} alt="" />
        <div className="recommend__car-bottom">
          <h4>{carName}</h4>
          <div className="recommed__car-other   ">
            <div className="recommend__icons">
              <p>
                <span>
                  <i class="ri-repeat-line"></i>
                </span>
                {retweet}k
              </p>
              <p>
                <i class="ri-settings-2-line"></i>
              </p>
              <p>
                <i class="ri-timer-flash-line"></i>
              </p>
            </div>
            <span>${rentPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedCarCard;
