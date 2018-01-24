import React, { Component } from "react";
import { Container, Button } from "native-base";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";

import styles from "./styles";

class Wellcome extends Component {
  render() {
    return (
      <Container>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.header}>Chào mừng tới với WhatsApp</Text>
        </View>
        <View style={{ flex: 4 }} />
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Text style={styles.text}>
            Nhấn 'Đồng ý và tiếp tục' để đồng ý Điều khoản dịch vụ và Chính sách
            bảo mật WhatsApp.
          </Text>
          <Button
            style={styles.button}
            onPress={() => {
              Actions.GetPhoneNumber();
            }}
          >
            <Text style={styles.buttonText}>ĐỒNG Ý VÀ TIẾP TỤC</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default Wellcome;
