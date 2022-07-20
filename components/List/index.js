import React from 'react'

import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable
} from "react-native";

import CheckBox from 'react-native-check-box'

export default function List(props) {
  const { itemList, onHandlerModal, onHandlerCheckItem, onHandlerClickItem } = props;

  return (
    <FlatList
      data={itemList}
      renderItem={(data) => (
        <Pressable style={styles.item} onPress={() => onHandlerClickItem(data.item.value)}>
          <CheckBox
            onClick={() => onHandlerCheckItem(data.item.id)}
            isChecked={data.item.completed}
          />
          <Text
            style={[
              styles.itemText,
              data.item.completed ? styles.completed : null
            ]}
          >
            {data.item.value}
          </Text>
          <Text
            onPress={() => onHandlerModal(data.item.id)}
            style={styles.removeButton}
            title
          >
            x
          </Text>
        </Pressable>
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    margin: "5%",
    height: 50,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.0,
    shadowRadius: 10,

    elevation: 6,
  },
  itemText: {
    margin: 5,
    flex: 1
  },
  removeButton: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "sans-serif",
    height: 22,
    width: 20,
    borderRadius: 5,
    textAlign: 'center'
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#d2d2d2"
  }
});
