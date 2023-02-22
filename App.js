//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
//
//export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});

import React, { useState } from 'react';
import { View, StyleSheet, Text, Keyboard, ScrollView } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task === '') return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style = { styles.container }>
      <Text style = { styles.heading }>ToDo</Text>
      
      <ScrollView style = { styles.scrollView }>
        {
          tasks.map((task, index) => {
            return (
              <View key = { index } style = { styles.taskContainer }>
                <TaskItem index = { index + 1 } task = { task } deleteTask = { () => deleteTask(index) }/>
              </View>
            )
          })
        }
      </ScrollView>

      <TaskInputField addTask = { addTask }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1a3c'
  },

  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },

  scrollView: {
    marginBottom: 70,
  },

  taskContainer: {
    marginTop: 20,
  }
});
