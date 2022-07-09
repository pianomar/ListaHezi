import { View, TextInput, Button, StyleSheet } from "react-native";

export default function AddItem(props) {
  const { textItem, onHandlerChangeItem, onHandlerAddItem } = props;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Escribe aqui"
        style={textItem ? styles.input : styles.emptyInput}
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />
      <Button
        title="Agregar"
        style={styles.button}
        onPress={onHandlerAddItem}
        disabled={textItem.length < 1}
      />
    </View>
  );
}

const inputStyle = {
  width: "80%",
  height: 50,
  borderColor: "black",
  borderWidth: 1,
  paddingHorizontal: 10
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  input: {
    ...inputStyle
  },
  emptyInput: {
    ...inputStyle,
    color: "#d2d2d2"
  }
});
