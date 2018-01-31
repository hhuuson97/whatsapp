import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Content,
  Footer,
  Button,
  Icon as NativeIcon,
  Thumbnail,
  Title,
  Input
} from "native-base";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { UIManager, findNodeHandle } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

var ImagePicker = require("react-native-image-picker");

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
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 10
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
  },
  thumbnail: {
    height: 40,
    width: 40
  },
  content: {
    backgroundColor: "#EEEEEE"
  },
  chatMes: {
    maxWidth: width * 0.8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 5,
    flexDirection: "column"
  },
  footer: {
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70
  },
  inputBox: {
    width: width * 0.9 - 50,
    height: 50,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "#FFFFFF",
    flexDirection: "row"
  },
  emojiButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: width * 0.9 - 150
  },
  cameraButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  microButtonView: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 40,
    height: 40
  },
  microButton: {
    borderWidth: 1,
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#006060",
    borderRadius: 50
  }
});

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.editting = false;
  }

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
        <Header style={styles.headerBar}>
          <Left>
            <Button
              iconLeft
              style={styles.headerButton}
              onPress={() => Actions.pop()}
            >
              <NativeIcon name="arrow-round-back" style={styles.headerIcon} />
            </Button>
          </Left>
          <Body style={{ flexDirection: "row" }}>
            {this.props.friend.info.image.uri != "" && (
              <Thumbnail source={this.props.friend.info.image} />
            )}
            {this.props.friend.info.image.uri === "" && (
              <Thumbnail
                source={{
                  uri:
                    "data:image/jpeg;base64,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"
                }}
                style={styles.thumbnail}
              />
            )}
            <Title style={styles.headerApp}>
              {this.props.friend.info.name}
            </Title>
          </Body>
          <Right>
            <Button style={styles.headerButton}>
              <Icon name="phone" style={styles.headerIcon} />
            </Button>
            <Button style={styles.headerButton}>
              <Icon name="paperclip" style={styles.headerIcon} />
            </Button>
            <Button style={styles.headerButton} onPress={this.handleMenuPress}>
              <Icon name="ellipsis-v" style={styles.headerIcon} ref="menu" />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          {this.props.friend.chatList.map((mes, id) => {
            if (mes.author === "0000001")
              //your self
              return (
                <View
                  key={id}
                  collapsable={true}
                  style={{ alignItems: "flex-end" }}
                >
                  <View style={styles.chatMes}>
                    <Text multiline={true} style={{ fontSize: 16 }}>
                      {mes.message}
                    </Text>
                    <Text
                      multiline={true}
                      style={{ fontSize: 10, alignSelf: "flex-end" }}
                    >
                      {mes.time}
                      {mes.status === "seen" && (
                        <Text>
                          <Text> </Text>
                          <Icon name="check-circle" color="blue" />
                        </Text>
                      )}
                      {mes.status === "unseen" && (
                        <Text>
                          <Text> </Text>
                          <Icon name="check-circle" color="gray" />
                        </Text>
                      )}
                    </Text>
                  </View>
                </View>
              );
            else
              return (
                <View
                  key={id}
                  collapsable={true}
                  style={{ alignItems: "flex-start" }}
                >
                  <View style={styles.chatMes}>
                    <Text multiline={true} style={{ fontSize: 16 }}>
                      {mes.message}
                    </Text>
                    <Text
                      multiline={true}
                      style={{ fontSize: 10, alignSelf: "flex-end" }}
                    >
                      {mes.time}
                    </Text>
                  </View>
                </View>
              );
          })}
        </Content>
        <View style={styles.footer}>
          <View style={styles.inputBox}>
            <View style={styles.emojiButton}>
              <TouchableOpacity>
                <Icon name="smile-o" size={25} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.input}>
              <TextInput
                editable={true}
                multiline={true}
                placeholder="Nhập tin nhắn"
                autoCapitalize="sentences"
                underlineColorAndroid="transparent"
                onFocus={() => {
                  this.editting = true;
                }}
                value={this.props.message}
                onChangeText={text => this.props.MessageUpdate(text)}
                onEndEditing={() => {
                  this.editting = false;
                }}
              />
            </View>
            <View style={styles.cameraButton}>
              <TouchableOpacity>
                <Icon name="camera" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.microButtonView}>
            <TouchableOpacity
              style={styles.microButton}
              onPress={() => {
                if (this.props.message.length > 0) {
                  var today = new Date();
                  var date =
                    today.getFullYear() +
                    "-" +
                    (today.getMonth() + 1) +
                    "-" +
                    today.getDate();
                  var time = today.getHours() + ":" + today.getMinutes();
                  var datetime = time + " " + date;
                  this.props.SendMessage({
                    id: this.props.friend.id,
                    mes: {
                      author: "0000001",
                      message: this.props.message,
                      time: datetime,
                      status: "unseen"
                    }
                  });
                  this.props.MessageUpdate("");
                }
              }}
            >
              <Icon
                name={this.editting ? "send" : "microphone"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

export default ChatBox;
