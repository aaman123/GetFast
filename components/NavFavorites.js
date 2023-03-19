import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { Icon } from "react-native-elements";

const NavFavorites = () => {
  const data = [
    {
      id: 123,
      icon: "home",
      location: "Home",
      destination: "123 London Red Eye",
    },
    {
      id: 234,
      icon: "briefcase",
      location: "Work",
      destination: "New Delhi, India",
    },
    {
      id: 345,
      icon: "airplane-outline",
      location: "Airport",
      destination: "Kennedy International Airport",
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="bg-gray-400 h-[0.5]" />}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity className="flex-row m-4 items-center space-x-2">
          <View className="bg-gray-300 rounded-full p-4">
            <Icon type="ionicon" name={icon} size={22} />
          </View>
          <View>
            <Text className="text-lg font-bold">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;
