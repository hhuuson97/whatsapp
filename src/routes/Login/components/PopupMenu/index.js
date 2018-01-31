import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, UIManager, findNodeHandle } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Form, Label, Item, Input, Text } from "native-base";

import Countries from "./data";
import styles from "./styles";

class PopupMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryHint: this.props.countryHint,
      actions: [],
      onPress: (eventName, index) => {
        if (eventName === "itemSelected")
          this.setState({
            countryHint: {
              name: Countries[index].name,
              cca2: Countries[index].code,
              callingCode: Countries[index].dial_code
            }
          });
        this.props.callback(this.state.countryHint, this.state.phoneNumber);
      },
      phoneNumber: this.props.phoneNumber
    };
  }

  handleShowPopupError = () => {};

  handleMenuPress = () => {
    UIManager.showPopupMenu(
      findNodeHandle(this.refs.menu),
      this.state.actions,
      this.handleShowPopupError,
      this.state.onPress
    );
  };

  componentDidMount() {
    for (let i = 0; i < Countries.length; i++) {
      this.state.actions.push(Countries[i].name);
    }
  }

  render() {
    return (
      <View>
        <Form style={styles.form}>
          <Item onPress={this.handleMenuPress} style={styles.itemHint}>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 4 }}>
              <Label style={styles.label}>{this.state.countryHint.name}</Label>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                active
                ref="menu"
                name="sort-desc"
                size={20}
                style={styles.icon}
              />
            </View>
          </Item>
          <Item style={styles.input}>
            <Item style={styles.inputcc}>
              <Label>+</Label>
              <Input
                keyboardType="phone-pad"
                maxLength={4}
                value={this.state.countryHint.callingCode.slice(1)}
                style={styles.cc}
                onChangeText={textChange => {
                  textChange = "+" + textChange;
                  for (let i = 0; i < Countries.length; i++)
                    if (Countries[i].dial_code === textChange) {
                      this.setState({
                        countryHint: {
                          name: Countries[i].name,
                          cca2: Countries[i].code,
                          callingCode: Countries[i].dial_code
                        }
                      });
                      this.props.callback(
                        {
                          name: Countries[i].name,
                          cca2: Countries[i].code,
                          callingCode: Countries[i].dial_code
                        },
                        this.state.phoneNumber
                      );
                      return;
                    }
                  this.setState({
                    countryHint: {
                      callingCode: textChange
                    }
                  });
                  this.props.callback(
                    {
                      callingCode: textChange
                    },
                    this.state.phoneNumber
                  );
                }}
              />
            </Item>
            <Item style={styles.inputspace} />
            <Item style={styles.inputphone}>
              <Input
                placeholder="số điện thoại"
                keyboardType="phone-pad"
                value={this.state.phoneNumber}
                onChangeText={numChange => {
                  this.setState({
                    phoneNumber: numChange
                  });
                  this.props.callback(this.state.countryHint, numChange);
                }}
              />
            </Item>
          </Item>
        </Form>
      </View>
    );
  }
}

PopupMenu.propTypes = {
  countryHint: PropTypes.object.isRequired,
  phoneNumber: PropTypes.string.isRequired
};

export default PopupMenu;
