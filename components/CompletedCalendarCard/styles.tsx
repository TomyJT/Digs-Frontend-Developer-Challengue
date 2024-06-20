import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    height: "auto",
    flexDirection: "row",
    marginVertical: 10,
    paddingLeft: 12,
    paddingRight: 16,
  },
  dateContainer: {
    width: "10%",
    height: "auto",
    backgroundColor: "#fff",
    alignItems: "center",
    marginRight: 5,
  },
  textContainer: {
    width: "90%",
    height: "auto",
    backgroundColor: "#00B47D",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    margin: 0,
  },
  subtitleText: {
    fontSize: 18,
    color: "#fff",
  },
  companyInfoContainer: {
    marginBottom: 10,
  },
});
