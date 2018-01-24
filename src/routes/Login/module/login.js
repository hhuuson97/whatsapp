import update from "react-addons-update";
import constants from "./actionConstants";

const { SET_PHONE, SET_INFO } = constants;

export function SetPhoneNum(payload) {
  return {
    type: SET_PHONE,
    payload
  };
}

export function SetInfomation(payload) {
  return {
    type: SET_INFO,
    payload
  };
}

function handleSetPhoneNum(state, action) {
  return update(state, {
    phoneNum: {
      countryCode: {
        $set: action.payload.countryCode
      },
      phone: {
        $set: action.payload.phone
      }
    }
  });
}

function handleSetInfomation(state, action) {
  return update(state, {
    info: {
      image: {
        $set: action.payload.image
      },
      name: {
        $set: action.payload.name
      }
    }
  });
}

const ACTION_HANDLERS = {
  SET_PHONE: handleSetPhoneNum,
  SET_INFO: handleSetInfomation
};

const initialState = {
  phoneNum: {},
  info: {}
};

export function LoginReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
