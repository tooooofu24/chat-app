import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function MyPageScreen() {
  return (
    <View style={styles.container}>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
