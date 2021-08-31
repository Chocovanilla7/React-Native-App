import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GoalItem = ({ value, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(value.item.id)}>
      <View style={styles.listItem}>
        <Text>{value.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderBottomWidth: 1,
  },
});
