import { useNavigation } from "@react-navigation/native";
import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import { Icon } from "react-native-elements";

const NavOptions = () => {
  const data = [
    {
      id: 123,
      image: "http://links.papareact.com/3pn",
      title: "Get a ride",
      screen: "MapScreen",
    },
    {
      id: 234,
      image: "http://links.papareact.com/28w",
      title: "Order Food",
      screen: "EatsScreen",
    },
  ];

  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="m-2 bg-gray-200 p-2 w-40 pl-6 pt-4 pb-8"
            onPress={() => {
              navigation.navigate(item.screen);
            }}
          >
            <View>
              <Image
                source={{
                  uri: item.image,
                }}
                style={{
                  resizeMode: "contain",
                }}
                className="h-24 w-24 rounded-full border-1"
              />
              <Text className="text-lg pt-4 font-semibold">{item.title}</Text>
              <Icon
                name="arrowright"
                color="white"
                type="antdesign"
                className="bg-black w-10 rounded-full p-2 mt-4"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;
