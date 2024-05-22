import { Text, View, Image } from "react-native";
import React from "react";

const OrderItem = ({orderId,title,image,brand,date,price,qty}) => {
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri:image}} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.brand}>{brand}</Text>
          <Text style={styles.quantity}>Quantity: {qty}</Text>
          <Text style={styles.date}>Date: {date}</Text>
          <Text style={styles.orderId}>OrderId: <Text style={styles.orderIdValue}>#{orderId}</Text></Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 2,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  imageContainer: {
    paddingRight: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  brand: {
    fontSize: 14,
    marginTop: 3,
  },
  quantity: {
    fontSize: 12,
    marginTop: 3,
  },
  date: {
    fontSize: 12,
    marginTop: 3,
  },
  orderId: {
    fontSize: 12,
    marginTop: 3,
  },
  orderIdValue: {
    fontWeight: 'bold',
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },
};

export default OrderItem;
