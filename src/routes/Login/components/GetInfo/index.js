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
  Body
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

class GetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
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
              <Button rounded style={styles.cameraButton}>
                <VIcon name="camera" style={styles.icon} />
              </Button>
            </View>
            <Item style={styles.input}>
              <Input style={styles.inputName} placeholder="Nhập tên bạn" />
            </Item>
            <View style={{ flex: 1 }}>
              <Icon name="smile-o" style={styles.keyBoard} />
            </View>
          </Item>
        </View>
        <View style={{ flex: 2 }}>
          <Button style={styles.button} onPress={() => {}}>
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
