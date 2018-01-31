import update from "react-addons-update";
import constants from "./actionConstants";

const { SEND_MESSAGE, MESSAGE_UPDATE } = constants;

export function SendMessage(payload) {
  return {
    type: SEND_MESSAGE,
    payload
  };
}

export function MessageUpdate(payload) {
  return {
    type: MESSAGE_UPDATE,
    payload
  };
}

function handlerSendMessage(state, action) {
  var copy = state.friendList;
  copy
    .find(element => {
      return element.id === action.payload.id;
    })
    .chatList.push(action.payload.mes);
  return update(state, {
    friendList: {
      $set: copy
    }
  });
}

function handlerMessageUpdate(state, action) {
  return update(state, {
    message: {
      $set: action.payload
    }
  });
}

const ACTION_HANDLERS = {
  SEND_MESSAGE: handlerSendMessage,
  MESSAGE_UPDATE: handlerMessageUpdate
};

const initialState = {
  message: "",
  friendList: [
    {
      id: "1000000",
      phoneNum: "+1234567890",
      info: { image: { uri: "" }, name: "Thầy Định" },
      phoneList: [],
      chatList: [
        {
          author: "1000000",
          message: "Hello every body!!!",
          time: "10:30 10/01/2018",
          status: "seen"
        },
        {
          author: "0000001",
          message: "Em chào thầy Định :v",
          time: "10:32 10/01/2018",
          status: "seen"
        }
      ]
    },
    {
      id: "1000001",
      phoneNum: "+1234560789",
      info: { image: { uri: "" }, name: "Thầy Xinh" },
      phoneList: [],
      chatList: [
        {
          author: "1000001",
          message: "Hello",
          time: "10:30 10/01/2018",
          status: "seen"
        }
      ]
    },
    {
      id: "1000002",
      phoneNum: "+1234567890",
      info: { image: { uri: "" }, name: "Thầy Phúc" },
      phoneList: [],
      chatList: [
        {
          author: "1000002",
          message: "Hello",
          time: "10:30 10/01/2018",
          status: "seen"
        }
      ]
    },
    {
      id: "1000003",
      phoneNum: "+1234560789",
      info: { image: { uri: "" }, name: "Thầy Kiên" },
      phoneList: [],
      chatList: [
        {
          author: "1000003",
          message: "Hello",
          time: "10:30 10/01/2018",
          status: "seen"
        }
      ]
    },
    {
      id: "1000004",
      phoneNum: "+1234560789",
      info: { image: { uri: "" }, name: "Thầy Quang" },
      phoneList: [],
      chatList: [
        {
          author: "1000004",
          message: "Hello",
          time: "10:30 10/01/2018",
          status: "seen"
        }
      ]
    },
    {
      id: "1000005",
      phoneNum: "+1234567890",
      info: { image: { uri: "" }, name: "Thầy Đạt" },
      phoneList: [],
      chatList: [
        {
          author: "1000005",
          message: "Hello",
          time: "10:30 10/01/2018",
          status: "seen"
        }
      ]
    },
    {
      id: "1000006",
      phoneNum: "+1234560789",
      info: { image: { uri: "" }, name: "Thầy Huy" },
      phoneList: [],
      chatList: [
        {
          author: "1000006",
          message: "Hello",
          time: "10:30 10/01/2018",
          status: "seen"
        }
      ]
    },
    {
      id: "1000007",
      phoneNum: "+1234567890",
      info: { image: { uri: "" }, name: "Thầy Khoa" },
      phoneList: [],
      chatList: [
        {
          author: "1000007",
          message: "Hello",
          time: "10:30 10/01/2018",
          status: "seen"
        }
      ]
    },
    {
      id: "1000008",
      phoneNum: "+1234560789",
      info: { image: { uri: "" }, name: "Thầy Lộc" },
      phoneList: [],
      chatList: [
        {
          author: "1000008",
          message: "Hello",
          time: "10:30 10/01/2018",
          status: "seen"
        }
      ]
    }
  ]
};

export function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
