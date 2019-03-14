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
let footInch = 2; // foot * 12

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
          <Text styles={styles.headerText}>Unit Conversion: Length</Text>
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
    
    fromLengthUnit = this.state.fromTimeUnitDropdown;
    fromLengthUnitValue = this.state.fromTimeUnitText;
    toLengthUnit = this.state.toTimeUnitDropdown;

    if(fromTimeUnit == 'Meter' && toTimeUnit == 'Kilometer'){
      //1
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(meterKilometer);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Kilometer' && toTimeUnit == 'Meter'){
      //2
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(meterKilometer);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Meter' && toTimeUnit == 'Foot'){
      //3
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(meterFoot);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Foot' && toTimeUnit == 'Meter'){
      //4
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(meterFoot);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Meter' && toTimeUnit == 'Inch'){
      //5
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(meterInch);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Inch' && toTimeUnit == 'Meter'){
      //6
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(meterInch);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Kilometer' && toTimeUnit == 'Foot'){
      //7
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(kilometerFoot);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Foot' && toTimeUnit == 'Kilometer'){
      //8
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(kilometerFoot);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Kilometer' && toTimeUnit == 'Inch'){
      //9
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(kilometerInch);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Inch' && toTimeUnit == 'Kilometer'){
      //10
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(kilometerInch);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Foot' && toTimeUnit == 'Inch'){
      //11
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(footInch);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Inch' && toTimeUnit == 'Foot'){
      //12
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(footInch);
      convertedValue = convertedValue.toString();
    }
    else{
      convertedValue = fromTimeUnitValue;
    }

    this.setState({toMassUnitText: convertedValue});
  }
  reset(){
    this.setState({
      fromMassUnitText: "",
      toMassUnitText: "",
    });
  }
}


