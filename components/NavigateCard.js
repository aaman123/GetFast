import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setDestination } from "../slices/NavSlice";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-center text-xl font-semibold py-5">
        Good Morning, Aman
      </Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            styles={searchBoxStyles}
            placeholder="Where to ?"
            minLength={2}
            enablePoweredByContainer={false}
            returnKeyType={"search"}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
            fetchDetails={true}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              navigation.navigate("RideOptions");
            }}
          />
        </View>

        <NavFavorites />
      </View>

      <View className="flex flex-row justify-evenly items-center py-4 mt-auto border-t border-gray-100">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RideOptions");
          }}
          className="bg-black flex-row w-24 px-4 py-3 rounded-full justify-between items-center"
        >
          <Icon type="font-awesome" name="car" color="white" size={18} />
          <Text className="text-white">Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-black flex-row w-24 px-4 py-3 rounded-full justify-between items-center">
          <Icon
            type="ionicon"
            name="fast-food-outline"
            color="white"
            size={18}
          />
          <Text className="text-center text-white">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const searchBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 0,
    paddingTop: 20,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    fontSize: 18,
    borderRadius: 0,
  },
  textInputContainer: {
    paddingBottom: 0,
    paddingHorizontal: 20,
  },
});

export default NavigateCard;
