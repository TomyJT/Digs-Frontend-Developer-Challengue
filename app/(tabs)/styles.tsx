import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: "#fff",
  },
  headerContainer: {
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 0.5,
    height: 100,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  dataText: {
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
  dateText: {
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
