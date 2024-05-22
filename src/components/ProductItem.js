import { Text, View, Image } from "react-native";
import React from "react";
import Bag from "../../assets/bag.png";

const ProductItem = ({ title, brand, image, price }) => {
  return (
    <View style={{ backgroundColor: "#ffffff", padding: 8, justifyContent: "center", alignItems: "center", borderRadius: 8, marginBottom: 8, borderWidth: 1, borderColor: "#cbd5e0" }}>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image source={{ uri: image }} style={{ borderRadius: 10, height: 80, width: 80, resizeMode: "contain" }} />
        </View>
        <View style={{ flex: 1, paddingLeft: 8 }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
            <Text style={{ fontSize: 12, color: "#718096" }}>{brand}</Text>
          </View>
          <View style={{ marginTop: 4 }}>
            <Text style={{ fontSize: 12 }}>Price: ${price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
