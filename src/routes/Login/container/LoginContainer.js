import { connect } from "react-redux";

import { SetPhoneNum, SetInfomation } from "../module/login";
import Wellcome from "../components/Wellcome";
import GetPhoneNumber from "../components/GetPhoneNumber";
import PhoneVerification from "../components/PhoneVerification";
import GetInfo from "../components/GetInfo";

const stateToProps = state => ({
  phoneNum: state.login.phoneNum || {},
  info: state.login.info || {}
});

const actionCreators = {
  SetPhoneNum,
  SetInfomation
};

export const ConnectWellcome = connect(stateToProps, actionCreators)(Wellcome);

export const ConnectGetPhoneNumber = connect(stateToProps, actionCreators)(
  GetPhoneNumber
);

export const ConnectPhoneVerification = connect(stateToProps, actionCreators)(
  PhoneVerification
);

export const ConnectGetInfo = connect(stateToProps, actionCreators)(GetInfo);
