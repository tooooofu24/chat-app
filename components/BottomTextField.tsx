import React from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput } from "react-native";

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} behavior="padding">
      <TextInput placeholder="Aa" style={styles.textInput} multiline />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderColor: "#000000",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default KeyboardAvoidingComponent;
