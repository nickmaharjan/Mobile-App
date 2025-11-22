import React, { useState } from "react";
import { View, Text, Button, Modal} from "react-native";

export default function Counter() {
  const [count, setCount] = useState(2);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:"#ffffffff"}}>
      <View style={{backgroundColor: "#f0f0f0", padding: 30, borderRadius: 10, marginBottom: 20}}> 
      <Text style={{marginBottom: 20, fontSize: 40, textAlign: "center"}}>{count}</Text>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          gap: 10,
        }}
      >
        <Button title="Increase" onPress={() => setCount(count + 1)} />
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
      </View>

      <Button title="Open Modal" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={{flex: 1, justifyContent: "center",alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)",}}>
          <View style={{backgroundColor: "white",padding: 25,borderRadius: 10,alignItems: "center",}}>
            <Text style={{fontSize: 20,marginBottom: 15,}}>
              Modal is Open!
            </Text>
            <Button title="Close Modal" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
    </View>
  );
}