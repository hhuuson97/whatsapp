import { connect } from "react-redux";

import { SendMessage, MessageUpdate } from "../module/home";
import Home from "../Home";
import ChatBox from "../ChatBox";

const stateToPropsHome = state => ({
  message: state.home.message,
  friendList: state.home.friendList
});

const actionCreators = { SendMessage, MessageUpdate };

export const ConnectHome = connect(stateToPropsHome, actionCreators)(Home);

export const ConnectChat = connect(stateToPropsHome, actionCreators)(ChatBox);
