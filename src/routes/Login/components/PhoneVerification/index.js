import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Text,
  Button,
  Segment,
  Form,
  Item,
  Input
} from "native-base";
import { View, UIManager, findNodeHandle, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";
import PropTypes from "prop-types";
import TextInputState from "react-native/lib/TextInputState";

import PopupMenu from "../PopupMenu";
import styles from "./styles";

class GetPhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: 90,
      m: 1,
      s: 30
    };
  }

  timing = () => {
    if (this.mounted) {
      if (this.state.countdown > 0) {
        this.setState({
          countdown: this.state.countdown - 1,
          m: Math.floor((this.state.countdown - 1) / 60),
          s: (this.state.countdown - 1) % 60
        });
      } else Actions.pop();
    } else clearInterval(this.interval);
  };

  componentDidMount() {
    this.interval = setInterval(this.timing, 1000);
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
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
          <Left style={{ flex: 0 }} />
          <Body>
            <Segment style={{ backgroundColor: "transparent" }}>
              <Text style={styles.headertext}>
                Xác minh
                {" " +
                  this.props.phoneNum.countryCode +
                  this.props.phoneNum.phone}
              </Text>
            </Segment>
          </Body>
          <Right>
            <Button transparent onPress={this.handleMenuPress}>
              <Icon ref="menu" name="ellipsis-v" style={styles.icon} />
            </Button>
          </Right>
        </Header>
        <View>
          <Text style={styles.text}>
            <Text style={styles.info}>
              Chờ để tự động phát hiện một tin nhắn được gửi tới{" " +
                this.props.phoneNum.countryCode +
                this.props.phoneNum.phone}.{" "}
            </Text>
            <Text style={styles.backInfo} onPress={() => Actions.pop()}>
              Nhằm số?
            </Text>
          </Text>

          <Item style={styles.input}>
            <Input
              ref="validate1"
              placeholder="—"
              keyboardType="phone-pad"
              maxLength={1}
              style={styles.inputValidate}
              onChangeText={() =>
                TextInputState.focusTextInput(
                  findNodeHandle(this.refs.validate2)
                )
              }
            />
            <Input
              ref="validate2"
              placeholder="—"
              keyboardType="phone-pad"
              maxLength={1}
              style={styles.inputValidate}
              onChangeText={() =>
                TextInputState.focusTextInput(
                  findNodeHandle(this.refs.validate3)
                )
              }
            />
            <Input
              ref="validate3"
              placeholder="—"
              keyboardType="phone-pad"
              maxLength={1}
              style={styles.inputValidate}
              onChangeText={() =>
                TextInputState.focusTextInput(
                  findNodeHandle(this.refs.validate4)
                )
              }
            />
            <Input
              ref="validate4"
              placeholder="—"
              keyboardType="phone-pad"
              maxLength={1}
              style={styles.inputValidate}
              onChangeText={() =>
                TextInputState.focusTextInput(
                  findNodeHandle(this.refs.validate5)
                )
              }
            />
            <Input
              ref="validate5"
              placeholder="—"
              keyboardType="phone-pad"
              maxLength={1}
              style={styles.inputValidate}
              onChangeText={() =>
                TextInputState.focusTextInput(
                  findNodeHandle(this.refs.validate6)
                )
              }
            />
            <Input
              ref="validate6"
              placeholder="—"
              keyboardType="phone-pad"
              maxLength={1}
              style={styles.inputValidate}
              onChangeText={() => {
                clearInterval(this.interval);
                Actions.GetInfo();
              }}
            />
          </Item>
          <Text style={styles.constraint}>Nhập mã 6-chữ số</Text>
          <Form style={{ alignItems: "center" }}>
            <Item style={styles.sendMe}>
              <View style={styles.itemLeft}>
                <Icon name="commenting" style={styles.iconMessage} />
              </View>
              <View style={styles.itemMid}>
                <Text>Gửi lại tin nhắn</Text>
              </View>
              <View style={styles.itemRight}>
                <Text>
                  {(this.state.m < 10 ? "0" : "") +
                    this.state.m +
                    ":" +
                    (this.state.s < 10 ? "0" : "") +
                    this.state.s}
                </Text>
              </View>
            </Item>
            <Item style={styles.callMe}>
              <View style={styles.itemLeft}>
                <Icon name="phone" style={styles.iconPhone} />
              </View>
              <View style={styles.itemMid}>
                <Text>Gọi tôi</Text>
              </View>
              <View style={styles.itemRight}>
                <Text>
                  {(this.state.m < 10 ? "0" : "") +
                    this.state.m +
                    ":" +
                    (this.state.s < 10 ? "0" : "") +
                    this.state.s}
                </Text>
              </View>
            </Item>
          </Form>
        </View>
      </Container>
    );
  }
}

export default GetPhoneNumber;
