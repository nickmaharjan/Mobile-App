import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";

export default function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSignIn = () => setShowModal(true);
  const handleCancel = () => { setUsername(""); setPassword(""); };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      <View style={{ width: "20%" }}>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
        <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={handleCancel} style={{ borderWidth: 1, padding: 10, flex: 1, marginRight: 5 }}>
            <Text style={{ textAlign: "center" }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignIn} style={{ backgroundColor: "#1c56a1ff", padding: 10, flex: 1, marginLeft: 5 }}>
            <Text style={{ color: "#fff", textAlign: "center" }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent visible={showModal} animationType="fade">
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)" }}>
          <View style={{ width: 250, padding: 20, backgroundColor: "#fff", borderRadius: 10, alignItems: "center" }}>
            <Text style={{ marginBottom: 15 }}>Signed in successfully!</Text>
            <TouchableOpacity onPress={() => setShowModal(false)} style={{ padding: 10, backgroundColor: "#ffffffff", borderRadius: 5 }}>
              <Text style={{ color: "#1c56a1ff" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
