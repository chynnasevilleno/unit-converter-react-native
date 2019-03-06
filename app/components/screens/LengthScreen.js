import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import MenuButton from "../components/MenuButton";
import { Dropdown } from 'react-native-material-dropdown';


// Variables


//Dropdown array
let lengthData = [{
  value: 'Meter',
}, {
  value: 'Kilometer',
}, {
  value: 'Foot',
}, {
  value: 'Inch',
}];

export default class LengthScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        fromLengthUnitText: "",
        toLengthUnitText: "",
        fromLengthUnitDropdown: "",
        toLengthUnitDropdown: "",
    }
}

  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />

        {/* Header View */}
        <View style={styles.header}>
          <Text styles={styles.headerText}>Unit Conversion: Length</Text>
        </View>

        {/* Conversion View */}
        <View style={styles.fromUnitContainer}>
          <View style={styles.content}>
            <Dropdown
                label=''
                data={massData}
                rippleCentered={true}
                itemPadding={10}
                onChangeText={(value) => this.setState({fromLengthUnitDropdown:value})}
            />
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              clearTextOnFocus={true}
              placeholder="Enter value to convert from"
              value={this.state.fromLengthUnitText}
              onChangeText={(unitValue) => this.setState({fromLengthUnitText:unitValue})}
            />
          </View>
        </View>
        <View style={styles.toUnitContainer}>
          <View style={styles.content}>
            <Dropdown
                label=''
                data={massData}
                rippleCentered={true}
                itemPadding={10}
            />
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="Conversion output"
              value={this.state.toLengthUnitText}
            />
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <View style={styles.convertButton}>
            <TouchableOpacity
              onPress={() => this.onCovertButtonClicked()}
              >
              <View>
                <Text>Convert</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.resetButton}>
            <TouchableOpacity
              onPress={() => this.clear()}
              >
              <View>
                <Text>Reset</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  onCovertButtonClicked(){
    alert(this.state.fromLengthUnitDropdown +" "+this.state.fromLengthUnitText); // debugging
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#2F364D',
    fontWeight: 'bold'
  },
  headerText:{
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#2F364D',
    fontWeight: 'bold'
  },
  fromUnitContainer: {
    flex: 3,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  textInput:{
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    height: 50,
    padding: 5,
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

