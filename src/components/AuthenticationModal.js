import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";
import AuthContext from "../features/authContext";
import Logo from "../../assets/logo.png";
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from "../features/firebase/userAuth";

const AuthenticationModal = ({ modalVisible, setModalVisible }) => {
  const [type, setType] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");
  const [loading,setLoading] = useState(false)

  const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);

  const handleLogin = async() => {
    setLoading(true)
    const res= await loginWithEmailAndPassword(email,password)
    if(res.success===true){
      console.log("res",res)
      setCurrentUser(res.user)
      setModalVisible(false);
      setIsLoggedIn(true)
      setLoading(false)
    }
    setModalVisible(false);
  };
  

  const handleRegister = async() => {
    setLoading(true)
    const res = await registerWithEmailAndPassword(name,email,password)
    if(res.success===true){
      setCurrentUser({name,email})
      setModalVisible(false);
      setIsLoggedIn(true)
      setLoading(false)
    }
    setLoading(false)
  };

  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, [currentUser]);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        {type === "login" ? (
          <Pressable onPress={()=>setModalVisible(false)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ width: '80%', padding: 20, backgroundColor: '#fff', borderRadius: 10, zIndex: 10 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Email:</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
              />
              <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Password:</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
              />

              <TouchableOpacity
                onPress={handleLogin}
                style={{ backgroundColor: 'black', padding: 10, borderRadius: 5 }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                  Login
                </Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ color: '#999' }}>Not a User?</Text>
                <Pressable onPress={() => setType("register")}>
                  <Text style={{ fontWeight: 'bold' }}> Register</Text>
                </Pressable>
              </View>
              {loading && <ActivityIndicator />}
            </View>
          </Pressable>
        ) : (
          <Pressable onPress={()=>setModalVisible(false)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ width: '80%', padding: 20, backgroundColor: '#fff', borderRadius: 10, zIndex: 10 }}>
              <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Name:</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
              />
              <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Email:</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
              />
              <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Password:</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
              />

              <TouchableOpacity
                onPress={handleRegister}
                style={{ backgroundColor: 'black', padding: 10, borderRadius: 5 }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                  Register
                </Text>
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ color: '#999' }}>Already a User?</Text>
                <Pressable onPress={() => setType("login")}>
                  <Text style={{ fontWeight: 'bold' }}> Login</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        )}
      </Modal>
    </View>
  );
};

export default AuthenticationModal;
