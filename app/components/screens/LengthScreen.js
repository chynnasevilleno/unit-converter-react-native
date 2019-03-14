import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import MenuButton from "../components/MenuButton";
import { Dropdown } from 'react-native-material-dropdown';
import styles from './Styles'

// Variables
let meterKilometer = 1000; // metre / 1000
let meterFoot = 3.281; // metre * 3.281
let meterInch = 39.37; // metre * 39.37
let kilometerFoot = 3280.84; // kilometer * 3280.84
let kilometerInch = 39370.079; // kilometer * 39370.079
let footInch = 12; // foot * 12

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

        {/* Header View */}
        <View style={styles.header}>
        <Text style={{fontSize: 20,
            textTransform: 'capitalize',
            color: '#2F364D',
            fontWeight: 'bold',
            zIndex: 1,
            paddingTop: 20,}}>Unit Conversion: Length</Text>
          <MenuButton navigation={this.props.navigation} />
        </View>

        {/* Conversion View */}
        <View style={styles.fromUnitContainer}>
          <View style={styles.content}>
            <Dropdown
                label=''
                data={lengthData}
                rippleCentered={true}
                itemPadding={10}
                onChangeText={(value) => this.setState({fromLengthUnitDropdown:value})}
            />
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
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
                data={lengthData}
                rippleCentered={true}
                itemPadding={10}
                onChangeText={(value) => this.setState({toLengthUnitDropdown:value})}
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
              onPress={() => this.reset()}
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
    //alert("Successfully Converted"); // debugging
    
    fromLengthUnit = this.state.fromLengthUnitDropdown;
    fromLengthUnitValue = this.state.fromLengthUnitText;
    toLengthUnit = this.state.toLengthUnitDropdown;

    if(fromLengthUnit == 'Meter' && toLengthUnit == 'Kilometer'){
      //1
      convertedValue = parseFloat(fromLengthUnitValue) / parseFloat(meterKilometer);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Kilometer' && toLengthUnit == 'Meter'){
      //2
      convertedValue = parseFloat(fromLengthUnitValue) * parseFloat(meterKilometer);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Meter' && toLengthUnit == 'Foot'){
      //3
      convertedValue = parseFloat(fromLengthUnitValue) * parseFloat(meterFoot);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Foot' && toLengthUnit == 'Meter'){
      //4
      convertedValue = parseFloat(fromLengthUnitValue) / parseFloat(meterFoot);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Meter' && toLengthUnit == 'Inch'){
      //5
      convertedValue = parseFloat(fromLengthUnitValue) * parseFloat(meterInch);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Inch' && toLengthUnit == 'Meter'){
      //6
      convertedValue = parseFloat(fromLengthUnitValue) / parseFloat(meterInch);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Kilometer' && toLengthUnit == 'Foot'){
      //7
      convertedValue = parseFloat(fromLengthUnitValue) * parseFloat(kilometerFoot);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Foot' && toLengthUnit == 'Kilometer'){
      //8
      convertedValue = parseFloat(fromLengthUnitValue) / parseFloat(kilometerFoot);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Kilometer' && toLengthUnit == 'Inch'){
      //9
      convertedValue = parseFloat(fromLengthUnitValue) * parseFloat(kilometerInch);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Inch' && toLengthUnit == 'Kilometer'){
      //10
      convertedValue = parseFloat(fromLengthUnitValue) / parseFloat(kilometerInch);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Foot' && toLengthUnit == 'Inch'){
      //11
      convertedValue = parseFloat(fromLengthUnitValue) * parseFloat(footInch);
      convertedValue = convertedValue.toString();
    }
    else if(fromLengthUnit == 'Inch' && toLengthUnit == 'Foot'){
      //12
      convertedValue = parseFloat(fromLengthUnitValue) / parseFloat(footInch);
      convertedValue = convertedValue.toString();
    }
    else{
      convertedValue = fromLengthUnitValue;
    }
    this.setState({toLengthUnitText: convertedValue});

    alert("Successfully Converted"); // debugging
  }
  reset(){
    this.setState({
      fromLengthUnitText: "",
      toLengthUnitText: "",
    });
  }
}


