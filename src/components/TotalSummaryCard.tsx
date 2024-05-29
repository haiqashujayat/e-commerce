import React, { useContext } from "react";
import { Text, View, Pressable, ToastAndroid } from "react-native";
import CartContext from "../features/cartContext";
import { addToOrders } from "../features/firebase/order";
import OrderContext from "../features/orderContext";

interface TotalSummaryCardProps {
  totalPrice: number;
}

const TotalSummaryCard: React.FC<TotalSummaryCardProps> = ({ totalPrice }) => {
  const { setCartItems } = useContext(CartContext);
  const { setOrderItems } = useContext(OrderContext);

  const placeOrder = async () => {
    const res = await addToOrders();
    if (res && res.success === true) { // Check if res is defined before accessing its properties
      ToastAndroid.show("Order placed successfully!!!", ToastAndroid.BOTTOM);
      setCartItems([]);
      setOrderItems(res.data);
    }
  };

  return (
    <View style={{ borderWidth: 1, borderColor: "#CBD5E0", borderRadius: 8, padding: 16 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Total Price:</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>${totalPrice}</Text>
      </View>
      <Pressable onPress={placeOrder} style={{ backgroundColor: "#000000", padding: 16, borderRadius: 8, marginTop: 16 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#FFFFFF", textAlign: "center" }}>Place Order</Text>
      </Pressable>
    </View>
  );
};

export default TotalSummaryCard;
