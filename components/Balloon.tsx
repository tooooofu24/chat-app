import { Text, View } from "react-native";

export const Balloon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>こんにちは！</Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: "skyblue",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    maxWidth: "70%",
  },
  text: {
    color: "white",
  },
};
