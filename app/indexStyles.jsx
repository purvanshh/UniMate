import { StyleSheet } from "react-native";

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "black",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    alignItems: "center", 
  },
  image: {
    width: 170,
    height: 170,
    marginBottom: 15,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginTop: 2,
    marginBottom: 24,
  },
  loaderContainer: {
    marginTop: 20,
    width: "75%",
    height: 6,
    backgroundColor: "black",
    borderRadius: 5,
    overflow: "hidden",
  },
  loaderBar: {
    height: "100%",
    backgroundColor: "white",
  },
});

export default indexStyles;
