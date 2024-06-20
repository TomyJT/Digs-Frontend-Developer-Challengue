import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import LocationIcon from "@/assets/icons/LocationIcon";
import ClockIcon from "@/assets/icons/ClockIcon";

export default function ScheduledCalendarCard({ action }) {
  if (!action) {
    return <></>;
  }

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getDayOfMonth = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const getDayOfWeek = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return dayNames[date.getDay()];
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dateContainer}>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#666666" }}>
          {getDayOfWeek(action.scheduledDate)}
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#000000",
            marginBottom: 10,
          }}
        >
          {getDayOfMonth(action.scheduledDate)}
        </Text>
        <ClockIcon />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{action.name}</Text>
        <View style={styles.companyInfoContainer}>
          <Text style={styles.subtitleText}>{action.vendor.vendorName}</Text>
          <Text style={{ ...styles.subtitleText, fontWeight: "bold" }}>
            {action.vendor.phoneNumber}
          </Text>
        </View>
        {action.vendor.streetAddress ? (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <LocationIcon />
            <Text style={styles.subtitleText}>
              {action.vendor.streetAddress}
            </Text>
          </View>
        ) : (
          <></>
        )}

        <Text style={styles.subtitleText}>
          Scheduled {action.arrivalStartWindow} - {action.arrivalEndWindow}
        </Text>
      </View>
    </View>
  );
}
