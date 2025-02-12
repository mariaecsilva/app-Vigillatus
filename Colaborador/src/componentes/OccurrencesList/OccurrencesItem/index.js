import React from "react";
import { View, Text, Image } from "react-native";
import Styles from "./styles.js";
import InfoRow from "../../InfoRow/index.js"
export default function OcorrencesItem({ setor, data, status }) {

  return (
    <View>
          <View style={Styles.container}>
            <View style={Styles.box}>
              <View style={Styles.imageBox}>
                <Image
                  style={Styles.image}
                  source={require("../../../images/occurrenceImage.png")}
                />
              </View>
              <View style={Styles.textBox}>
                <InfoRow label="Setor" value={setor} />
                <InfoRow label="Data" value={data} />
                <InfoRow label="Status" value={status} />
              </View>
            </View>
            <View style={Styles.horizontalLine} />
          </View>
    </View>
  );
}
