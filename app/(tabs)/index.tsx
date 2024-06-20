import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import CardSelector from "@/components/CardSelector";
import EmptyStateCard from "@/components/EmptyStateCard";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Calendar {
  month: number;
  year: number;
  actions: Array<any>;
  map: (arg0: (item: any) => JSX.Element) => JSX.Element;
}
export default function Calendar() {
  const [data, setData] = useState<{ calendar: Calendar } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Calendar</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%" }}
      >
        <View>
          {data.calendar.map((item) => (
            <>
              <Text style={styles.dateText}>
                {monthNames[item.month]} {item.year}
              </Text>
              {item.actions.length == 0 ? (
                <EmptyStateCard />
              ) : (
                item.actions.map((actions: any) => (
                  <CardSelector actions={actions} />
                ))
              )}
            </>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
