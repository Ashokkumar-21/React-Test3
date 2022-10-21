import React from "react";
import { InputText } from "../components/InputText";
interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="main-div">
      <div className="header-div">
        <h1 className="headerh1">Test Page</h1>
      </div>
      <div className="body-div">
        <div className="body-card">
          <h5 className="cardh5">Sign in</h5>
          <form>
          <div>
            <InputText type='text' id="text1" label="Email*" />
          </div>
          <div>
          <InputText type='password' id="text2" label="Password*" />
          </div>
          </form>
        </div>
      </div>
      <form>
        <label htmlFor="lab1">Test</label>
        <input type="text" id="lab1" />
      </form>
    </div>
  );
};
