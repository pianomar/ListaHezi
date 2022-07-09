import { StyleSheet, View } from "react-native";
import CustomModal from "./components/Modal";
import { useState } from "react";
import AddItem from "./components/AddItem";
import List from "./components/List";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandlerChangeItem = (text) => setTextItem(text);
  const onHandlerAddItem = () => {
    setItemList((currentItems) => [
      ...currentItems,
      { id: Date.now(), value: textItem, completed: false }
    ]);
    setTextItem("");
  };

  const onHandlerDeleteItem = (id) => {
    setItemList((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
    setModalVisible(!modalVisible);
  };
  const onHandlerModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(!modalVisible);
  };

  const onHandlerCheckItem = (id) => {
    const item = itemList.find((item) => item.id === id);
    item.completed = !item.completed;
    setItemList([...itemList.filter((item) => item.id !== id), item]);
  };

  return (
    <View style={styles.screen}>
      <CustomModal
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        onHandlerDeleteItem={onHandlerDeleteItem}
      />
      <AddItem
        textItem={textItem}
        onHandlerChangeItem={onHandlerChangeItem}
        onHandlerAddItem={onHandlerAddItem}
      />
      <List
        itemList={itemList}
        onHandlerModal={onHandlerModal}
        onHandlerCheckItem={onHandlerCheckItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: "10%",
    padding: 30
  }
});
