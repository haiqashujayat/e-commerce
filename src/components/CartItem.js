import { Text, View, Image, Pressable, ToastAndroid } from "react-native";
import React, { useContext } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { removeItemById } from "../features/firebase/cart";
import CartContext from "../features/cartContext";

const CartItem = ({ title, image, price, brand, qty, id }) => {
  const { setCartItems } = useContext(CartContext);

  const removeItem = async () => {
    const res = await removeItemById(id);
    if (res.success === true) {
      ToastAndroid.show("Removed Successfully", ToastAndroid.BOTTOM);
      setCartItems(res.data);
    }
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
        <View style={{ padding: 10 }}>
          <Image
            source={{ uri: image }}
            style={{ width: 80, height: 80, borderRadius: 10 }}
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }} numberOfLines={1}>
            {title}
          </Text>
          <Text style={{ fontSize: 14, marginBottom: 5 }}>{brand}</Text>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Qty: {qty}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>${price}</Text>
        </View>
        <Pressable onPress={removeItem} style={{ justifyContent: "center", alignItems: "center", padding: 10 }}>
          <MaterialIcons name="delete-outline" size={24} color="black" />
          <Text style={{ fontSize: 12 }}>Remove</Text>
        </Pressable>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }} />
    </View>
  );
};

export default CartItem;
