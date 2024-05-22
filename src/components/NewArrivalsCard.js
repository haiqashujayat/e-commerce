import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Bag from "../../assets/bag.png";

const NewArrivalsCard = ({ title, brand, price, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  brand: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
});

export default NewArrivalsCard;
