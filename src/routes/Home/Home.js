import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Tabs,
  Tab,
  Text,
  Body,
  Right
} from "native-base";
import { UIManager, findNodeHandle } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";

var ImagePicker = require("react-native-image-picker");

import Chat from "./components/Chat";
import Phone from "./components/Phone";
import Status from "./components/Status";

const { height, width } = Dimensions.get("window");

var options = {
  title: "Chụp ảnh",
  customButtons: [],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: "#006060"
  },
  headerApp: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  headerButton: {
    backgroundColor: "#006060",
    justifyContent: "center",
    shadowColor: "transparent",
    shadowOpacity: 0,
    shadowOffset: { height: 0, width: 0 },
    elevation: 0,
    width: 40
  },
  headerIcon: {
    color: "white",
    fontSize: 18
  },
  tabs: {
    backgroundColor: "#006060"
  },
  camera: {
    backgroundColor: "#006060",
    width: 40,
    justifyContent: "center"
  },
  tabsText: {
    fontSize: 12
  }
});

class Home extends Component {
  handleShowPopupError() {}

  handleMenuPress = () => {
    UIManager.showPopupMenu(
      findNodeHandle(this.refs.menu),
      ["Cài đặt"],
      this.handleShowPopupError,
      () => {}
    );
  };

  render() {
    return (
      <Container>
        <Header hasTabs style={styles.headerBar} noShadow={true}>
          <Body>
            <Text style={styles.headerApp}>WhatsApp</Text>
          </Body>
          <Right>
            <Button style={styles.headerButton}>
              <Icon name="search" style={styles.headerIcon} />
            </Button>
            <Button
              full
              style={styles.headerButton}
              onPress={() => {
                ImagePicker.showImagePicker(options, response => {
                  if (response.didCancel) {
                  } else if (response.error) {
                  } else if (response.customButton) {
                  } else {
                    // You can also display the image using data:
                    let img = {
                      uri: "data:image/jpeg;base64," + response.data
                    };

                    this.setState({
                      avatarSource: img
                    });
                  }
                });
              }}
            >
              <Icon name="camera" style={styles.headerIcon} />
            </Button>
            <Button style={styles.headerButton} onPress={this.handleMenuPress}>
              <Icon name="ellipsis-v" style={styles.headerIcon} ref="menu" />
            </Button>
          </Right>
        </Header>
        <Tabs initialPage={0}>
          <Tab
            heading="CHAT"
            activeTabStyle={styles.tabs}
            tabStyle={styles.tabs}
            textStyle={styles.tabsText}
            activeTextStyle={styles.tabsText}
          >
            <Chat friendList={this.props.friendList} />
          </Tab>
          <Tab
            heading="TRẠNG THÁI"
            activeTabStyle={styles.tabs}
            tabStyle={styles.tabs}
            textStyle={styles.tabsText}
            activeTextStyle={styles.tabsText}
          >
            <Status />
          </Tab>
          <Tab
            heading="CUỘC GỌI"
            activeTabStyle={styles.tabs}
            tabStyle={styles.tabs}
            textStyle={styles.tabsText}
            activeTextStyle={styles.tabsText}
          >
            <Phone friendList={this.props.friendList} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Home;
