import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
      },
      zIndex:{
        zIndex: 100,
      },
      header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        textTransform: 'capitalize',
        color: '#2F364D',
        fontWeight: 'bold',
        zIndex: 1,
      },
      headerText:{
        fontSize: 100,
        textTransform: 'capitalize',
        color: '#2F364D',
        fontWeight: 'bold',
        zIndex: 1,
      },
      fromUnitContainer: {
        flex: 3,
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: 40,
        zIndex: 1,
      },
      textInput:{
        backgroundColor: '#F4F5F7',
        borderRadius: 4,
        height: 50,
        padding: 5,
        zIndex: 1,
      },
      toUnitContainer: {
        flex: 3,
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: 40,
      },
      buttonsContainer: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
      },
      content: {
        alignSelf: 'stretch',
      },
});