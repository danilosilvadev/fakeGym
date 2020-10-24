import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { onChange } from "react-native-reanimated";
import { Card } from "../components";

function Home(props) {
  const handleChanges = () => {
    props.navigation.navigate("report");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <View style={styles.boxOne}></View>
        <View style={styles.boxTwo}>
          <Text style={styles.name}>Hi, fatass</Text>
          <Text style={styles.subtitle}>Lie to others, lie to yourself.</Text>
        </View>
        <View style={styles.boxThree}>
          <ImageBackground
            source={require("../assets/images/graphone.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.boxFour}></View>
      </View>
      <ScrollView style={styles.containerTwo}>
        <View style={styles.line}></View>
        <View style={styles.progress}>
          <Text style={styles.textone}>Not a motivational quote:</Text>
          <Text style={styles.quote}>
            “If at first you don't succeed, try, try again. Then quit. No use
            being a damn fool about it.” - W.C. Fields
          </Text>
        </View>
        <View style={styles.progress}>
          <Text style={styles.textone}>Fake Workouts:</Text>
        </View>
        <View style={styles.cards}>
          <Card
            move="bounceInLeft"
            image={require("../assets/images/checkbox.png")}
            title="Upper body"
            subtitle="Pretend you don't have chicken arms"
            screenChange={handleChanges}
          />
          <Card
            move="bounceInLeft"
            image={require("../assets/images/checkbox.png")}
            title="Lower body"
            subtitle="Pretend you don't have chicken arms"
            screenChange={handleChanges}
          />
          <Card
            move="bounceInLeft"
            image={require("../assets/images/checkbox.png")}
            title="Full body"
            subtitle="Pretend you don't have chicken arms"
            screenChange={handleChanges}
          />
          <Card
            move="bounceInLeft"
            image={require("../assets/images/checkbox.png")}
            title="Cardio"
            subtitle="Pretend you don't have chicken arms"
            screenChange={handleChanges}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#136Df3",
  },
  containerOne: {
    flex: 1,
  },
  image: {
    width: 405,
    height: "110%",
    zIndex: 100,
    transform: [{ rotate: "10deg" }],
  },
  containerTwo: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  boxOne: {
    flex: 1,
  },
  boxTwo: {
    flex: 0.8,
    marginHorizontal: 35,
  },
  boxThree: {
    flex: 2.5,
  },
  boxFour: {
    flex: 0.5,
    color: "#fff",
    flexDirection: "row",
  },
  name: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
    letterSpacing: -0.5,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "white",
    fontStyle: "italic",
  },
  line: {
    width: 66,
    height: 4,
    backgroundColor: "#F4F0F0",
    borderRadius: 2,
    marginVertical: 25,
    left: 150,
  },
  progress: {
    left: 50,
  },
  textone: {
    fontSize: 20,
    color: "#2D2D2D",
    letterSpacing: -0.5,
  },
  quote: {
    fontSize: 15,
    color: "grey",
    width: "80%",
    marginTop: 10,
    marginBottom: 10,
  },
  cards: {
    flex: 1,
    display: "flex",
    marginTop: 10,
    marginHorizontal: 30,
  },
});

export default Home;
