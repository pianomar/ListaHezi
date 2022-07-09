import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function List(props) {
  const { itemList, onHandlerModal, onHandlerCheckItem } = props;

  return (
    <FlatList
      data={itemList}
      renderItem={(data) => (
        <View style={styles.item}>
          <input
            type="checkbox"
            checked={data.item.completed}
            onChange={() => onHandlerCheckItem(data.item.id)}
          />
          <Text
            style={[
              styles.itemText,
              data.item.completed ? styles.completed : null
            ]}
          >
            {data.item.value}
          </Text>
          <TouchableOpacity
            onPress={() => onHandlerModal(data.item.id)}
            style={styles.removeButton}
          >
            x
          </TouchableOpacity>
        </View>
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
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginTop: "5%",
    height: 50,
    padding: 10
  },
  itemText: {
    margin: 5,
    flex: 1
  },
  removeButton: {
    backgroundColor: "black",
    color: "white",
    fontFamily: "sans-serif",
    alignItems: "center",
    height: 20,
    width: 20,
    borderRadius: 5
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#d2d2d2"
  }
});
