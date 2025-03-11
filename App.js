import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import Feather from 'react-native-vector-icons/Feather';
import ScanScreen from './ScanScreen'; // Import màn hình quét

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Dữ liệu Insights
const insightsData = [
  { id: '1', title: 'Scan new', subtitle: 'Scanned 483', icon: 'camera', screen: 'ScanScreen' },
  { id: '2', title: 'Counterfeits', subtitle: 'Counterfeited 32', icon: 'alert-triangle' },
  { id: '3', title: 'Success', subtitle: 'Checkouts 8', icon: 'check-circle' },
  { id: '4', title: 'Directory', subtitle: 'History 26', icon: 'calendar' },
];

// Component Insights
const InsightItem = ({ title, subtitle, icon, screen, navigation }) => (
  <TouchableOpacity
    style={tw`bg-white p-4 rounded-lg w-40 h-28 items-center shadow-md`}
    onPress={() => screen && navigation.navigate(screen)}
  >
    <Feather name={icon} size={24} color="#4A90E2" />
    <Text style={tw`font-bold mt-2`}>{title}</Text>
    <Text style={tw`text-gray-500 text-sm`}>{subtitle}</Text>
  </TouchableOpacity>
);

// Màn hình chính
function HomeScreen({ navigation }) {
  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <View>
          <Text style={tw`text-xl font-bold`}>Hello 👋</Text>
          <Text>Christie Doe</Text>
        </View>
        <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={tw`w-10 h-10 rounded-full`} />
      </View>

      {/* Insights */}
      <Text style={tw`text-lg font-semibold mb-2`}>Your Insights</Text>
      <FlatList
        data={insightsData}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <InsightItem {...item} navigation={navigation} />}
        columnWrapperStyle={tw`justify-between mb-2`}
      />
    </View>
  );
}

// Stack Navigation để điều hướng giữa màn hình chính và Scan
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ScanScreen" component={ScanScreen} />
    </Stack.Navigator>
  );
}

// Thanh điều hướng
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let icons = {
              Home: 'home',
              Scan: 'camera',
              History: 'clock',
              Cart: 'shopping-cart',
            };
            return <Feather name={icons[route.name]} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4A90E2',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={MainStack} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="History" component={HomeScreen} />
        <Tab.Screen name="Cart" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
