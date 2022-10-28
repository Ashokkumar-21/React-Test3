import React from "react";
import { InputText } from "../components/InputText";
import { LoginBtn } from "../components/LoginBtn";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { HeadDiv } from "../components/HeadDiv";
interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="main-div">
      <HeadDiv />
      <div className="body-div">
        <div className="body-card">
          <Tabs>
            <TabList>
              <Tab>Login</Tab>
              <Tab>SignUp</Tab>
            </TabList>
            <TabPanel>
              <h5 className="cardh5">Sign in</h5>
              <form>
                <InputText type="text" id="text1" label="Email*" />
                <InputText type="password" id="text2" label="Password*" />
              </form>
              <LoginBtn type="submit" value="string" addclass="green" />
            </TabPanel>
            <TabPanel>
              <h5 className="cardh5">Sign Up</h5>
              <form>
                <InputText type="text" id="text1" label="Email*" />
                <InputText type="password" id="text2" label="Password*" />
              </form>
              <LoginBtn type="submit" value="string" addclass="green" />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
