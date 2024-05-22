import { Text, View, Image, Pressable, ToastAndroid } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import User from "../../assets/user.png";
import AuthContext from "../features/authContext";
import { logout } from "../features/firebase/userAuth";

const ProfileScreen = () => {
  
  const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = async () => {
    const res = await logout()
    if (res.success === true) {
      ToastAndroid.show("Logged Out Successfully", ToastAndroid.BOTTOM)
      setIsLoggedIn(false);
      setCurrentUser(null)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff", padding: 24, justifyContent: "space-between" }}>
      <View>
        <View style={{ marginTop: 16, justifyContent: "center", alignItems: "center" }}>
          <View style={{ borderWidth: 1, borderColor: "#cbd5e0", borderRadius: 10 }}>
            <Image source={User} style={{ height: 160, width: 160, borderRadius: 80, overflow: "hidden" }} />
          </View>
        </View>
        <View style={{ marginTop: 24 }}>
          {isLoggedIn ? (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{currentUser?.name}</Text>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#718096" }}>{currentUser?.email}</Text>
            </View>
          ) : (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Login to view your Profile!</Text>
            </View>
          )}
        </View>
      </View>
      {isLoggedIn && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Pressable onPress={handleLogout} style={{ backgroundColor: "#000000", width: "100%", paddingVertical: 16, borderRadius: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#ffffff", textAlign: "center" }}>Log Out</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;
