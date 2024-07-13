import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTaskScreen = ({ route, navigation }) => {
  const { setTasks } = route.params;
  const [text, setText] = useState('');

  const addTask = () => {
    setTasks(prevTasks => [
      ...prevTasks,
      { id: Date.now().toString(), text }
    ]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default AddTaskScreen;
