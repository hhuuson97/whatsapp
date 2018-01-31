import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Text,
  Button,
  Header,
  Item,
  Input,
  Icon as VIcon,
  ListItem,
  CheckBox,
  Right,
  Body,
  Thumbnail
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import { Actions } from "react-native-router-flux";

var ImagePicker = require("react-native-image-picker");

import styles from "./styles";

var options = {
  title: "Chọn ảnh đại diện",
  customButtons: [],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class GetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      name: "",
      avatar: {
        uri: ""
      }
    };
  }

  render() {
    return (
      <Container>
        <Header noShadow style={styles.header}>
          <Text style={styles.headertext}>Thông tin cá nhân</Text>
        </Header>
        <View style={{ flex: 10 }}>
          <Text style={styles.text}>
            Vui lòng cung cấp tên bạn và ảnh đại diện
          </Text>
          <Item style={styles.inputGroup}>
            <View style={styles.camera}>
              <Button
                rounded
                style={styles.cameraButton}
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
                        avatar: {
                          uri: img.uri
                        }
                      });
                    }
                  });
                }}
              >
                {this.state.avatar.uri === "" && (
                  <VIcon name="camera" style={styles.icon} />
                )}
                {this.state.avatar.uri != "" && (
                  <Thumbnail
                    source={this.state.avatar}
                    style={styles.thumbnail}
                  />
                )}
              </Button>
            </View>
            <Item style={styles.input}>
              <Input
                value={this.state.name}
                style={styles.inputName}
                placeholder="Nhập tên bạn"
                autoCapitalize="words"
                onChangeText={newName => this.setState({ name: newName })}
              />
            </Item>
            <View style={{ flex: 1 }}>
              <Icon name="smile-o" style={styles.keyBoard} />
            </View>
          </Item>
        </View>
        <View style={{ flex: 2 }}>
          <Button
            style={styles.button}
            onPress={() => {
              if (this.state.name) {
                this.props.SetInfomation({
                  image: this.state.avatar,
                  name: this.state.name
                });
                Actions.reset("Home");
              }
            }}
          >
            <Text>TIẾP</Text>
          </Button>
        </View>
        <View style={{ flex: 1 }}>
          <ListItem
            style={{
              flex: 1,
              backgroundColor: "transparent",
              borderColor: "transparent"
            }}
          >
            <Body style={{ flex: 20 }}>
              <Text style={styles.recommend}>
                Tạo biểu tượng WhatsApp trên màn hình chính
              </Text>
            </Body>
            <Right style={{ justifyContent: "center", flex: 1 }}>
              <CheckBox
                checked={this.state.checked}
                onPress={() =>
                  this.setState({
                    checked: !this.state.checked
                  })
                }
                style={{ backgroundColor: "green", borderColor: "green" }}
              />
            </Right>
          </ListItem>
        </View>
      </Container>
    );
  }
}

export default GetInfo;
