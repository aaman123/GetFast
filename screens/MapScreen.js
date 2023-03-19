import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        className="absolute z-50 top-10 left-8 rounded-full bg-gray-400 p-3 shadow-lg"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <Icon name="menu-outline" type="ionicon" size={22} />
      </TouchableOpacity>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
