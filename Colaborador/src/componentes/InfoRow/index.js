import React from "react";
import { View, Text, Image } from "react-native";
import Styles from "./styles.js";

export default function InfoRow({ label, value }) {
  return (
    <View style={Styles.textBox}>
      <Text style={Styles.grayText}>{label}:</Text>
      <Text style={Styles.blackText}>{value}</Text>
    </View>
  );
}
