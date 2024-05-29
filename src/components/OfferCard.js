import React, { Component } from "react";
import { Text, View, Pressable, Image } from "react-native";
import Suit from "../../assets/suit.png";

class OfferCardClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.discount}>50% Off</Text>
          <Text style={styles.offer}>On everything today</Text>
          <Text style={styles.code}>With code: FSCREATION</Text>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Get Now</Text>
          </Pressable>
        </View>
        <View>
          <Image source={Suit} style={styles.image} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    maxWidth: 250,
    paddingVertical: 2,
    marginRight: 6,
    maxHeight: 160,
    overflow: 'hidden',
    backgroundColor: '#c7c7c7',
    borderRadius: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  discount: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  offer: {
    fontSize: 16,
  },
  code: {
    fontSize: 12,
    marginTop: 5,
  },
  button: {
    backgroundColor: 'black',
    width: 60,
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: {
    width: 55,
    height: 150,
    resizeMode: 'contain',
  },
};

export default OfferCardClass;
