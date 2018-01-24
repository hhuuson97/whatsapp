import React from "react";
import { Actions, Scene } from "react-native-router-flux";

import {
  ConnectWellcome as Wellcome,
  ConnectGetPhoneNumber as GetPhoneNumber,
  ConnectPhoneVerification as PhoneVerification,
  ConnectGetInfo as GetInfo
} from "./Login/container/LoginContainer";

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="Login" hideNavBar>
      <Scene key="Wellcome" component={Wellcome} title="Wellcome" initial />
      <Scene
        key="GetPhoneNumber"
        component={GetPhoneNumber}
        title="Phone Number"
      />
      <Scene
        key="PhoneVerification"
        component={PhoneVerification}
        title="Phone Verification"
      />
      <Scene key="GetInfo" component={GetInfo} title="Infomation" />
    </Scene>
  </Scene>
);

export default scenes;
