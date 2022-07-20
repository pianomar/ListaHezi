import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ToDoItemScreen = props => {

    const { itemText } = props;

    return (
        <View style={styles.screen}>
            <Text style={styles.header}>{itemText}</Text>
            <Text style={styles.header}>Aca veras los detalles de tu tarea</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      margin: "10%",
    }
  });

export default ToDoItemScreen;