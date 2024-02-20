import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";

const MainScreen = () => {
  const todoListAll = useSelector((item) => item.todo.todoItems);
  const todoList_Todo = todoListAll.filter((value) => value.state === "todo");
  const todoList_Done = todoListAll.filter((value) => value.state === "done");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"}></StatusBar>
      <Text style={styles.pageTitle}>ToDo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        <FlatList
          data={todoList_Todo}
          renderItem={({ item }) => <TodoItem {...item} />}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
        <FlatList
          data={todoList_Done}
          renderItem={({ item }) => <TodoItem {...item} />}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
      <InputForm></InputForm>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: "#f7f8fa",
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: "bold",
  },
  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: "bold",
  },
  emptyListText: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
});

export default MainScreen;
