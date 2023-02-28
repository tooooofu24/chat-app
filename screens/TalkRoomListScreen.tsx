import { ScrollView, StyleSheet } from "react-native";
import { List } from "react-native-paper";

import { TalkTile } from "../components/TalkTile";

export default function TalkRoomListScreen() {
  return (
    <ScrollView style={styles.container}>
      <List.Section style={{ width: "100%" }}>
        <TalkTile />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 5,
    backgroundColor: "#fff",
  },
});
