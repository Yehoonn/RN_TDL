import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoSlice from "../redux/slices/todoSlice";

const InputForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { addTodo } = todoSlice.actions;

  const handleSubmit = () => {
    if (input === "") {
      Alert.alert("등록 실패", "내용을 입력해주세요");
    } else {
      Alert.alert("할 일 등록", "신규 등록을 완료하시겠습니까?", [
        {
          text: "등록",
          onPress: () => {
            dispatch(addTodo(input));
            setInput("");
          },
        },
        {
          text: "취소",
        },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.addFormContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요"
        value={input}
        onChangeText={setInput}
        onSubmitEditing={handleSubmit}
      ></TextInput>
      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: "#f7f8fa",
  },

  inputField: {
    flex: 1,
    height: 42,
    padding: 5,
    marginRight: 25,
    borderRadius: 4,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    color: "#000000",
    fontSize: 15,
    textAlignVertical: "center",
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  addButtonText: {
    fontSize: 25,
    color: "white",
  },
});

export default InputForm;
