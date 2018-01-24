import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Text,
  Button,
  Segment
} from "native-base";
import { View, UIManager, findNodeHandle, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";
import PropTypes from "prop-types";

import PopupMenu from "../PopupMenu";
import styles from "./styles";

class GetPhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryHint: { name: "United States", cca2: "US", callingCode: "+1" },
      phoneNumber: "",
      callback: (countryHint, phoneNumber) => {
        this.setState({
          countryHint: countryHint,
          phoneNumber: phoneNumber
        });
      }
    };
  }

  handleShowPopupError = () => {};

  handleMenuPress = () => {
    UIManager.showPopupMenu(
      findNodeHandle(this.refs.menu),
      ["Trợ giúp"],
      this.handleShowPopupError,
      () => {
        Linking.openURL("https://faq.whatsapp.com/");
      }
    );
  };

  render() {
    return (
      <Container>
        <Header noShadow style={styles.header}>
          <Left />
          <Body>
            <Segment style={{ backgroundColor: "transparent" }}>
              <Text style={styles.headertext}>Xác minh số điện thoại</Text>
            </Segment>
          </Body>
          <Right>
            <Button transparent onPress={this.handleMenuPress}>
              <Icon ref="menu" name="ellipsis-v" style={styles.icon} />
            </Button>
          </Right>
        </Header>
        <View style={{ flex: 4 }}>
          <Text style={styles.text}>
            WhatsApp sẽ gửi một tin nhắn để xác minh số điện thoại của bạn. Nhập
            mã quốc gia và số điện thoại:
          </Text>
          <PopupMenu
            countryHint={this.state.countryHint}
            phoneNumber={this.state.phoneNumber}
            callback={this.state.callback}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            style={styles.button}
            onPress={() => {
              if (
                this.state.countryHint &&
                this.state.countryHint.name &&
                this.state.phoneNumber != ""
              ) {
                this.props.SetPhoneNum({
                  countryCode: this.state.countryHint.callingCode,
                  phone: this.state.phoneNumber
                });
                Actions.PhoneVerification();
              }
            }}
          >
            <Text>TIẾP</Text>
          </Button>
          <Text style={styles.alert}>Phí tin nhắn có thể được áp dụng</Text>
        </View>
      </Container>
    );
  }
}

export default GetPhoneNumber;
