import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, Pressable, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import UserLogo from '../../assets/user.png';
import OfferCard from '../components/OfferCard';
import NewArrivalsCard from '../components/NewArrivalsCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthenticationModal from '../components/AuthenticationModal';
import AuthContext from '../features/authContext';
import ProductContext from '../features/productContext';
import { getProducts } from '../features/firebase/product';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { isLoggedIn, currentUser } = useContext(AuthContext);
  const { products, setProducts } = useContext(ProductContext);

  const fetchAllProducts = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    fetchAllProducts();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <View style={{ backgroundColor: 'darkred', borderRadius: 20, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name="menu" size={24} color="#fff" />
          </View>
        </View>

        {!isLoggedIn && (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
            <Pressable onPress={() => setModalVisible(!modalVisible)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#00FF00', borderRadius: 20, paddingVertical: 8, paddingHorizontal: 15 }}>
              <Image source={UserLogo} style={{ height: 40, width: 40, backgroundColor: '#aaaaaa', borderRadius: 50 }} />
              <Text style={{ fontWeight: 'bold', paddingLeft: 5, color: '#000000' }}>Login</Text>
            </Pressable>
          </View>
        )}

        <View style={{ backgroundColor: '#D2B48C', padding: 20, borderRadius: 10, marginVertical: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Welcome, <Text style={{ fontWeight: 'bold', color: '#00FF00' }}>{currentUser?.name}</Text></Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#808080', textAlign: 'center' }}>Our E-commerce App</Text>
          </View>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
              <Text style={{ color: '#FF0000' }}>C</Text>
              <Text style={{ color: '#FFA500' }}>a</Text>
              <Text style={{ color: '#FFFF00' }}>r</Text>
              <Text style={{ color: '#008000' }}>t</Text>
              <Text style={{ color: '#0000FF' }}>Q</Text>
              <Text style={{ color: '#4B0082' }}>u</Text>
              <Text style={{ color: '#EE82EE' }}>e</Text>
              <Text style={{ color: '#A52A2A' }}>s</Text>
              <Text style={{ color: '#000000' }}>t</Text>
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 20, paddingHorizontal: 20, flexDirection: 'row', backgroundColor: '#E0E0E0', borderRadius: 30, alignItems: 'center', paddingVertical: 10 }}>
          <MaterialIcons name="search" size={24} color="#111" style={{ marginLeft: 10, marginRight: 5 }} />
          <TextInput placeholder="Browse any category" placeholderTextColor="#666666" style={{ flex: 1, fontSize: 20 }} />
        </View>

        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <OfferCard />
        </View>

        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>New Arrivals</Text>
            <Pressable onPress={() => navigation.navigate("productlistscreen")}>
              <Text style={{ color: '#808080' }}>View All</Text>
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products?.map(product => (
              <Pressable key={product.id} onPress={() => navigation.navigate("detailscreen", { productId: product.id })}>
                <NewArrivalsCard title={product.title} image={product.image} price={product.price} brand={product.brand} />
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tech Gadgets</Text>
            <Pressable onPress={() => navigation.navigate("productlistscreen")}>
              <Text style={{ color: '#808080' }}>View All</Text>
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products?.map(product => (
              <Pressable key={product.id} onPress={() => navigation.navigate("detailscreen", { productId: product.id })}>
                <NewArrivalsCard title={product.title} image={product.image} price={product.price} brand={product.brand} />
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <AuthenticationModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
