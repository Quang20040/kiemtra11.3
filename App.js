import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const insightsData = [
  { id: '1', title: 'Scan new', subtitle: 'Scanned 483', icon: require('./assets/Group_160.png') },
  { id: '2', title: 'Counterfeits', subtitle: 'Counterfeited 32', icon: require('./assets/Frame.png') },
  { id: '3', title: 'Success', subtitle: 'Checkouts 8', icon: require('./assets/Group_158.png') },
  { id: '4', title: 'Directory', subtitle: 'History 26', icon: require('./assets/Group 151.png') },
];

const InsightItem = ({ title, subtitle, icon }) => (
  <View style={styles.card}>
    <Image source={icon} style={styles.insightIcon} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
  </View>
);

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerText}>



        <Text style={styles.title}>Hello Quang Bùi</Text>
        <Text>Christie Doe</Text>
      </View>
      <Image source={require('./assets/Ellipse6.png')} style={styles.profileImage} />
    </View>
    <Text style={styles.sectionTitle}>Your Insights</Text>
    <FlatList
      data={insightsData}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <InsightItem {...item} />}
      columnWrapperStyle={styles.columnWrapper}
    />
  </View>
);

const ScanScreen = () => (
  <View style={styles.scanContainer}>
    <TouchableOpacity style={styles.backButton}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    <Image source={require('./assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png')} style={styles.scanFrame} />
    <Image source={require('./assets/Group5.png')} style={styles.scanImage} />
    <View style={styles.scanResult}>
      <Image source={require('./assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png')} style={styles.resultThumbnail} />
      <Text style={styles.scanText}>Lauren's Orange Juice</Text>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

const getTabIcon = (name) => {
  const icons = { Home: 'home', Scan: 'scan', History: 'time', Cart: 'cart' };
  return icons[name] || 'ellipse';
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => <Ionicons name={getTabIcon(route.name)} size={size} color={color} />, 
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
        <Tab.Screen name="History" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Cart" component={HomeScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 100,
  },
  headerText: {
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardSubtitle: {
    color: 'gray',
    fontSize: 12,
  },
  insightIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  scanContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  scanFrame: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: 150,
  },
  scanImage: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  scanResult: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  scanText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  resultThumbnail: {
    width: 40,
    height: 40,
    marginRight: 20,
    
  },
  scanFrame: {
  width: 700, 
  height: 900, 
  position: 'absolute', 
  top: 10,
  resizeMode: 'contain', // Giữ nguyên tỉ lệ ảnh
},

scanImage: {
  width: '50%', // Hoặc có thể để giá trị cụ thể như 250
  height: '500', // Để chiều cao tự động theo tỉ lệ
  aspectRatio: 1, // Điều chỉnh tỉ lệ chuẩn theo ảnh gốc
  marginBottom: 1,
  resizeMode: 'contain',
},
scanHomeScreen:{
position: 'absolute',
 bottom: 0, // Đặt về sát đáy màn hình
  width: '100%',
  alignItems: 'center',
},

});
