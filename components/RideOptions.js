import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectTimeToTravel } from "../slices/NavSlice";

const RideOptions = () => {
  const navigation = useNavigation();
  const SURGE_CHARGE_RATE = 1.5;
  const [selectedCar, setSelectedCar] = useState(null);
  const selectTravelTimeInfo = useSelector(selectTimeToTravel);

  const data = [
    {
      id: "Uber-123",
      title: "Uber X",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "Uber-456",
      title: "Uber XL",
      multiplier: 1.25,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "Uber-789",
      title: "Uber LUX",
      multiplier: 1.5,
      image: "https://links.papareact.com/7pf",
    },
  ];

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View className="flex-row items-center justify-center">
        <TouchableOpacity
          className="absolute top-[0.5] left-5 p-3 z-50 rounded-full"
          onPress={navigation.goBack}
        >
          <Icon name="chevron-left" type="fontawesome" size={24} />
        </TouchableOpacity>
        <Text className="text-xl pb-1 pt-3 font-semibold">
          Select a ride - {selectTravelTimeInfo?.distance?.text}
        </Text>
      </View>

      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, title, multiplier, image }, item }) => (
            <View>
              <TouchableOpacity
                className={`flex-row justify-between px-4 items-center ${
                  selectedCar?.id === id && `bg-gray-300`
                }`}
                onPress={() => {
                  setSelectedCar(item);
                }}
              >
                <Image
                  source={{
                    uri: image,
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                  }}
                />
                <View className="-ml-6 pt-4">
                  <Text className="text-xl font-semibold">{title}</Text>
                  <Text className="text-md text-gray-500">
                    {selectTravelTimeInfo?.duration?.text}
                  </Text>
                </View>
                <Text className="text-xl font-bold pt-4">
                  {new Intl.NumberFormat("en-us", {
                    style: "currency",
                    currency: "USD",
                  }).format(
                    (selectTravelTimeInfo?.duration?.value *
                      SURGE_CHARGE_RATE *
                      multiplier) /
                      100
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View>
        <TouchableOpacity
          disabled={!selectedCar}
          className={`bg-black mx-6 my-4 p-4 rounded-md ${
            !selectedCar && "bg-gray-300"
          }`}
        >
          <Text className="text-white text-center text-lg">
            Choose {selectedCar?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptions;
