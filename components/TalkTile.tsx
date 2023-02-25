import { View } from "react-native";
import { Avatar, Badge, List } from "react-native-paper";

export const TalkTile = () => {
  return (
    <List.Item
      onPress={() => {
        console.log("pressed");
      }}
      title="まこち"
      description="初めまして！まこです！"
      titleStyle={{
        color: "#000",
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
