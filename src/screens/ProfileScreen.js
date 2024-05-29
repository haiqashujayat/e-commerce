import React, { useContext } from "react";
import { Text, View, Image, Pressable, ToastAndroid, StyleSheet } from "react-native";
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
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <View style={styles.imageBorder}>
            <Image source={User} style={styles.image} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          {isLoggedIn ? (
            <View style={styles.textContainer}>
              <Text style={styles.name}>{currentUser?.name}</Text>
              <Text style={styles.email}>{currentUser?.email}</Text>
            </View>
          ) : (
            <View style={styles.textContainer}>
              <Text style={styles.notLoggedIn}>Login to view your Profile!</Text>
            </View>
          )}
        </View>
      </View>
      {isLoggedIn && (
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Log Out</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
    justifyContent: "space-between"
  },
  imageContainer: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  imageBorder: {
    borderWidth: 1,
    borderColor: "#cbd5e0",
    borderRadius: 10
  },
  image: {
    height: 160,
    width: 160,
    borderRadius: 80,
    overflow: "hidden"
  },
  infoContainer: {
    marginTop: 24
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  email: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#718096"
  },
  notLoggedIn: {
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: "#000000",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center"
  }
});

export default ProfileScreen;
