import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Avatar, Badge, List } from "react-native-paper";

export const TalkTile = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("TalkRoom");
  };
  return (
    <List.Item
      onPress={onPress}
      title="まこち"
      description="初めまして！まこです！"
      titleStyle={{
        fontWeight: "bold",
      }}
      left={() => (
        <Avatar.Image
          size={50}
          source={{
            uri: "https://pbs.twimg.com/profile_images/1622586006225707008/kT90Cq_M_400x400.jpg",
          }}
        />
      )}
      right={() => (
        <View style={{ justifyContent: "center" }}>
          <Badge
            size={25}
            style={{ backgroundColor: "skyblue", color: "#fff" }}
          >
            3
          </Badge>
        </View>
      )}
    />
  );
};
