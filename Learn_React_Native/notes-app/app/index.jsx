import { Image, StyleSheet, View } from "react-native";
import AvatarImage from "../assets/images/avatar.png";

export default function Index() {
  return (
    <View
    style={ViewStyles.container}
    >
      <Image style={ImageStyles.image} source={AvatarImage}></Image>
    </View>
  );
}

const ImageStyles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 200
  }, 
});

const ViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 100
  }
});
