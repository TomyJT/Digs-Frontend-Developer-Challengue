import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { CheckIcon } from "react-native-heroicons/outline";

export default function EmptyStateCard() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dateContainer}>
        <Text
          style={{ fontSize: 14, fontWeight: "bold", color: "#666666" }}
        ></Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>No Maintenance Scheduled</Text>
      </View>
    </View>
  );
}
