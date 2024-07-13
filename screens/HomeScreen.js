import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Button title="Add Task" onPress={() => navigation.navigate('AddTask', { setTasks })} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
            <Button title="Delete" onPress={() => deleteTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  taskItem: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#f9c2ff',
  },
  taskText: {
    fontSize: 18,
  },
});

export default HomeScreen;
