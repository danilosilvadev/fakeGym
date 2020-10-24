import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";

function Card(props) {
  return (
    <Animatable.View animation={props.move} duration={3500} style={styles.card}>
      <TouchableOpacity style={styles.box1} onPress={props.screenChange}>
        <View style={styles.imgWrapper}>
          <Image source={props.image}></Image>
        </View>
      </TouchableOpacity>
      <View style={styles.box2}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
  },
  cardtwo: {
    flex: 1,
  },
  box1: {
    flex: 1,
    paddingHorizontal: 10,
  },
  box2: {
    flex: 1,
  },
  imgWrapper: {
    borderRadius: 90,
    padding: 10,
    backgroundColor: "rgba(255, 19, 134, 0.2)",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#2D2D2D",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: "#2D2D2D",
    letterSpacing: -0.5,
    paddingVertical: 5,
  },
  completed: {
    height: "100%",
    width: "50%",
    borderWidth: 1,
    borderColor: "#136DF3",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  completedText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#136DF3",
  },
});

export default Card;
