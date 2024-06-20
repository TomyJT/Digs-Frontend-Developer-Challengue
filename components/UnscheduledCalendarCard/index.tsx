import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import LocationIcon from "../../assets/icons/LocationIcon";

export default function UnscheduledCalendarCard({ action }) {
  if (!action) {
    return <></>;
  }

  // Adress is not pressent here because it wasn't showing on the API response. I feel that I need to clarify this because on the figma design it was showing.
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dateContainer}>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#666666" }}>
          TBD
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{action.name}</Text>
        <Text style={styles.subtitleText}>Schedule date & time TBD</Text>
      </View>
    </View>
  );
}
