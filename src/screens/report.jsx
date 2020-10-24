import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import ViewShot from "react-native-view-shot";
import { captureScreen } from "react-native-view-shot";
import Expo, { Camera } from "expo";
import * as MediaLibrary from "expo-media-library";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

function Report(props) {
  const [printScreen, setPrintScreen] = useState(
    require("../assets/images/checkbox.png")
  );

  async function getCameraRollPermissions(uri) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(uri);
      MediaLibrary.getAlbumAsync("fakeGym").then((res) => {
        if (res) {
          MediaLibrary.addAssetsToAlbumAsync([asset], res.id, false).then(
            (res) => {
              alert("Image Saved to an existent album!", res);
            }
          );
        } else {
          MediaLibrary.createAlbumAsync("fakeGym", asset)
            .then(() => {
              alert("Image saved!", asset);
            })
            .catch((error) => {
              console.log("err", error);
            });
        }
      });
    } else {
      /// Handle permissions denied;
      console.log("Uh oh! The user has not granted us permission.");
    }
  }

  const handleCapture = () => {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    }).then(
      (uri) => {
        getCameraRollPermissions(uri);
      },
      (error) => console.error("Oops, snapshot failed", error)
    );
  };

  return (
    <View style={styles.exerciseTitle}>
      <ViewShot options={{ format: "jpg", quality: 0.9 }}>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
        <Text>...Something to rasterize...</Text>
      </ViewShot>
      <Button
        onPress={() => handleCapture()}
        title="Save report"
        color="#841584"
        accessibilityLabel="Save your report"
      />
      <View>
        {printScreen === null ? null : (
          <Image
            source={{ printScreen }}
            style={{
              width: 250,
              height: 300,
              borderWidth: 1,
              borderColor: "#136DF3",
            }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseTitle: {
    marginTop: 100,
    marginLeft: 50,
  },
});

export default Report;
