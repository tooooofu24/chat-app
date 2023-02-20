import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";

import { TalkRoomListScreen } from "@/components/screens/TalkRoomListScreen";

/**
 * 各ページのパラメーターを定義
 */
export type RootStackParamList = {
  TalkRoomList: undefined;
  TalkRoom: undefined;
  MyPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TalkRoomList">
        <Stack.Screen
          name="TalkRoomList"
          component={TalkRoomListScreen}
          options={{ title: "トーク一覧" }}
        />
        {/* <Stack.Screen
          name="TalkRoom"
          component={TalkRoomScreen}
          options={{ title: "トーク" }}
        />
        <Stack.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{ title: "マイページ" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
