import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if (goalTitle) {
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalTitle },
      ]);

      setIsAddMode(false);
    }
  };
  const deleteItem = (item_id) => {
    setCourseGoals((prevValue) => prevValue.filter((item) => item.id !== item_id));
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onCancel={cancelGoalHandler} visible={isAddMode} goalHandler={addGoalHandler} />
      <FlatList
        data={courseGoals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <GoalItem value={itemData} onDelete={deleteItem} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
