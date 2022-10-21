import React from "react";
interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="main-div">
      <div className="header-div">
        <h1>Test Page</h1>
      </div>
      <div className="body-div">
        <div className="body-card">
          <div className="input-grp-txt">
            <input type="text" />
          </div>
          <div className="input-grp-pas">
            <input type="password" />
          </div>
        </div>
      </div>
    </div>
  );
};
