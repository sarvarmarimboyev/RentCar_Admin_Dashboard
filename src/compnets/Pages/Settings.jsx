import React from "react";
import "../../styles/settings.css";
const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Settings page</h2>

        <div className="settings__top">
          <button className="settings__btn">My Details</button>
          <button className="settings__btn active__btn">Profile</button>
          <button className="settings__btn">Password</button>
          <button className="settings__btn">Email</button>
          <button className="settings__btn">Notification</button>
        </div>
        <div className="details__form">
          <h2 className="profile__titel">Profile</h2>
          <p className="profile__desc">Update your photo and personal details here</p>
          <form>
            
            <div className="form__group">
              <div>
                <label> Live in</label>
                <input type="text" placeholder=" Tashkent, Uzbekistan " />
              </div>

              <div>
                <label> Street</label>
                <input type="text" placeholder=" Sodiq Azimov " />
              </div>
            </div>



            <div className="form__group">
              <div>
                <label> Email</label>
                <input type="email" placeholder=" example@gmail.com " />
              </div>

              <div>
                <label> Number</label>
                <input type="number" placeholder=" +998 97 777 77 77 " />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label> Date of Birth</label>
                <input type="date" placeholder=" dd/mm/yyyy " />
              </div>

              <div>
                <label> Gender</label>
                <input type="text" placeholder="Male" />
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
