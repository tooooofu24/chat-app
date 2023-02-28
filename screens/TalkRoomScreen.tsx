import { SafeAreaView, ScrollView } from "react-native";

import { Balloon } from "../components/Balloon";
import KeyboardAvoidingComponent from "../components/BottomTextField";

export const TalkRoomScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{
          flexDirection: "column-reverse",
          flex: 1,
          backgroundColor: "red",
        }}
      >
        <Balloon />
      </ScrollView>
      <KeyboardAvoidingComponent />
    </SafeAreaView>
  );
};
