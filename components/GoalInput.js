import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

const GoalInput = ({ goalHandler, onCancel, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState();

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    goalHandler(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button s onPress={onCancel} color="red" title="Cancel" />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="ADD" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: { justifyContent: "center", flex: 1, alignItems: "center" },
  input: {
    borderBottomColor: "black",
    marginBottom: 10,
    width: "80%",
    borderBottomWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
  },
});
