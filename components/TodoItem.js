import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import CheckboxChecked from "../assets/check.svg";
import CheckboxUnchecked from "../assets/uncheck.svg";
import DeleteIcon from "../assets/delete.svg";

import React from "react";
import { useDispatch } from "react-redux";
import todoSlice from "../redux/slices/todoSlice";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const { updateTodo, deleteTodo } = todoSlice.actions;

  const deleteItem = () => {
    Alert.alert("할 일 삭제", "정말로 삭제하시겠습니까?", [
      {
        text: "삭제",
        onPress: () => {
          dispatch(deleteTodo(props.id));
        },
      },
      {
        text: "취소",
      },
    ]);
  };

  const updateItem = () => {
    dispatch(updateTodo(props.id));
  };

  return (
    <View style={styles.itemContainer}>
      <Pressable style={styles.itemCheckbox} hitSlop={10} onPress={updateItem}>
        {props.state !== "todo" ? (
          <CheckboxChecked style={styles.itemCheckboxCheckedIcon} />
        ) : (
          <CheckboxUnchecked />
        )}
      </Pressable>
      <Text
        style={[
          styles.itemText,
          props.state === "todo" ? "" : styles.itemTextChecked,
        ]}
      >
        {props.text}
      </Text>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonText]}
        hitSlop={10}
        onPress={deleteItem}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f7f8fa",
  },
  itemCheckbox: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckboxCheckedIcon: {
    shadowColor: "#000000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: 0,
    width: 0,
    height: 4,
  },
  itemText: {
    marginRight: "auto",
    paddingRight: 25,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
    color: "black",
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: "line-through",
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonText: {
    opacity: 0.8,
  },
});

export default TodoItem;
