import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

export default function Gallery({ navigation }) {
  //for top image control
  const [placeHolder, setPlaceHolder] = useState(false);
  const [image, setImage] = useState(null);

  //to store input fields
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookPublisher, setBookPublisher] = useState("");
  const [bookPublisherYear, setBookPublisherYear] = useState("");
  const [pageNumber, setPageNumber] = useState("");

  //for form validation
  const [validImg, setValidImg] = useState("#cdcdcd");
  const [validTitle, setValidTitle] = useState(" ");
  const [validAuthor, setValidAuthor] = useState(" ");
  const [validDesc, setValidDesc] = useState(" ");
  const [validPub, setValidPub] = useState(" ");
  const [validYear, setValidYear] = useState(" ");
  const [validPage, setValidPage] = useState(" ");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need media library permissions to make this work!");
        }
      }
    })();
  }, []);

  const choosePicture = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        await saveImage(uri);
      } else {
        console.error("ImagePicker cancelled or no URI");
      }
    } catch (e) {
      console.error("Error choosing picture:", e);
    }
  };

  const saveImage = async (uri) => {
    if (!uri) {
      console.error("No URI to save");
      return;
    }

    const folderUri = FileSystem.documentDirectory + "images/";
    const filename = uri.split("/").pop();

    try {
      await FileSystem.makeDirectoryAsync(folderUri, { intermediates: true });
    } catch (e) {
      console.error("Error creating directory:", e);
    }

    const newPath = folderUri + filename;

    try {
      await FileSystem.moveAsync({
        from: uri,
        to: newPath,
      });
      console.log("Image saved to:", newPath);
      setImage(newPath);
      setPlaceHolder(true);
    } catch (e) {
      console.error("Error saving image:", e);
    }
  };

  const choosingPicture = () => {
    choosePicture();
  };

  //for input validation
  const inputValidAll = () => {
    let isValid = true;

    if (!image) {
      setValidImg("red");
      isValid = false;
    } else {
      setValidImg("#cdcdcd");
    }

    if (!bookTitle.trim() || bookTitle.length < 7) {
      setValidTitle("Book title must be 7+ character");
      isValid = false;
    } else {
      setValidTitle(" ");
    }

    if (!bookAuthor.trim() || bookAuthor.length < 7) {
      setValidAuthor("Book author must be 7+ character");
      isValid = false;
    } else {
      setValidAuthor(" ");
    }

    if (!bookDescription.trim() || bookDescription.length < 15) {
      setValidDesc("Book description must be 15+ character");
      isValid = false;
    } else {
      setValidDesc(" ");
    }

    if (!bookPublisher.trim() || bookPublisher.length < 7){
      setValidPub("Book publisher must be 7+ character");
      isValid = false;
    } else {
      setValidPub(" ");
    }

    if (!/^\d{4}$/.test(bookPublisherYear)) {
      setValidYear("Book publisher must be 4 digit");
      isValid = false;
    } else {
      setValidYear(" ");
    }

    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 5000) {
      setValidPage("Page number is b/n 1 and 5000");
      isValid = false;
    } else {
      setValidPage(" ");
    }

    // Perform submission or other actions if all fields are valid
    if (isValid) {
      console.log("Form is valid. Proceed with submission.");
      // Add your form submission logic here
    }
  };

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.back}
      >
        <FontAwesome5 name="long-arrow-alt-left" size={20} color={"#000"} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={[styles.picHolder, { backgroundColor: validImg }]}>
          <TouchableOpacity onPress={choosingPicture} style={styles.CamIcon}>
            <FontAwesome name="photo" size={40} color={"#b7f297"} />
          </TouchableOpacity>
          {placeHolder && image && (
            <Image source={{ uri: image }} style={styles.img} />
          )}
        </View>

        <Text style={styles.txtDetail}>Enter Book Detail</Text>
        <TextInput
          placeholder="Enter Book Title"
          value={bookTitle}
          onChangeText={setBookTitle}
          style={styles.input}
        />
        {validTitle ? <Text style={styles.errorText}>{validTitle}</Text> : null}

        <TextInput
          placeholder="Enter Book Author"
          value={bookAuthor}
          onChangeText={setBookAuthor}
          style={styles.input}
        />
        {validAuthor ? (
          <Text style={styles.errorText}>{validAuthor}</Text>
        ) : null}

        <TextInput
          placeholder="Enter Book Description"
          value={bookDescription}
          onChangeText={setBookDescription}
          style={styles.input}
        />
        {validDesc ? <Text style={styles.errorText}>{validDesc}</Text> : null}

        <TextInput
          placeholder="Enter Book Publisher"
          value={bookPublisher}
          onChangeText={setBookPublisher}
          style={styles.input}
        />
        {validPub ? <Text style={styles.errorText}>{validPub}</Text> : null}

        <TextInput
          placeholder="Enter Book Publisher Year"
          value={bookPublisherYear}
          onChangeText={setBookPublisherYear}
          style={styles.input}
        />
        {validYear ? <Text style={styles.errorText}>{validYear}</Text> : null}

        <TextInput
          placeholder="Enter Page Number"
          value={pageNumber}
          onChangeText={setPageNumber}
          style={styles.input}
        />
        {validPage ? <Text style={styles.errorText}>{validPage}</Text> : null}

        <TouchableOpacity style={styles.submitBtn} onPress={inputValidAll}>
          <Text style={styles.btnTxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  back: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  picHolder: {
    width: 150,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 100,
  },
  CamIcon: {
    position: "absolute",
    left: 55,
    top: 30,
    zIndex: 1,
  },
  txtDetail: {
    margin: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 0.5,
    textAlign: "center",
    width: "100%",
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    height: 40,
    width: "90%",
    fontSize: 20,
    marginBottom: 5,
    paddingLeft: 5,
  },
  submitBtn: {
    padding: 10,
    backgroundColor: "#b7f297",
    width: "60%",
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    width: "90%",
    textAlign: "left",
  },
});
