import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import MenuButton from "../components/MenuButton";
import { Dropdown } from 'react-native-material-dropdown';


// Variables
let secondsMinutes = 60;
let hoursDays = 24;


//Dropdown array
let timeData = [{
  value: 'Seconds',
}, {
  value: 'Minutes',
}, {
  value: 'Hours',
}, {
  value: 'Days',
}];

export default class TimeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        fromTimeUnitText: "",
        toTimeUnitText: "",
        fromTimeUnitDropdown: "",
        toTimeUnitDropdown: "",
    }
}

  render() {
    return (
      <View style={styles.container}>
        {/* Header View */}
        <View style={styles.header}>
          <Text styles={styles.headerText}>Unit Conversion: Time</Text>
          <MenuButton navigation={this.props.navigation} />
        </View>

        {/* Conversion View */}
        <View style={styles.fromUnitContainer}>
          <View style={styles.content}>
            <Dropdown
                label=''
                data={timeData}
                rippleCentered={true}
                itemPadding={10}
                onChangeText={(value) => this.setState({fromTimeUnitDropdown:value})}
            />
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              clearTextOnFocus={true}
              placeholder="Enter value to convert from"
              value={this.state.fromTimeUnitText}
              onChangeText={(unitValue) => this.setState({fromTimeUnitText:unitValue})}
            />
          </View>
        </View>
        <View style={styles.toUnitContainer}>
          <View style={styles.content}>
            <Dropdown
                label=''
                data={timeData}
                rippleCentered={true}
                itemPadding={10}
                onChangeText={(value) => this.setState({toTimeUnitDropdown:value})}
            />
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="Conversion output"
              value={this.state.toTimeUnitText}
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

    fromTimeUnit = this.state.fromTimeUnitDropdown;
    fromTimeUnitValue = this.state.fromTimeUnitText;
    toTimeUnit = this.state.toTimeUnitDropdown;
    convertedValue = 0;

    if(fromTimeUnit == 'Seconds' && toTimeUnit == 'Minutes'){
      //1
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(secondsMinutes);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Minutes' && toTimeUnit == 'Seconds'){
      //2
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(secondsMinutes);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Seconds' && toTimeUnit == 'Hours'){
      //3
      secondsToHours = Math.pow(secondsMinutes, 2);
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(secondsToHours);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Hours' && toTimeUnit == 'Seconds'){
      //4
      secondsToHours = Math.pow(secondsMinutes, 2);
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(secondsToHours);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Seconds' && toTimeUnit == 'Days'){
      //5
      secondsToDays = Math.pow(secondsMinutes, 2) * hoursDays;
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(secondsToDays);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Days' && toTimeUnit == 'Seconds'){
      //6
      secondsToDays = Math.pow(secondsMinutes, 2) * hoursDays;
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(secondsToDays);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Minutes' && toTimeUnit == 'Hours'){
      //7
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(secondsMinutes);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Hours' && toTimeUnit == 'Minutes'){
      //7
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(secondsMinutes);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Minutes' && toTimeUnit == 'Days'){
      //7
      minutesToDays = hoursDays * secondsMinutes;
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(minutesToDays);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Minutes' && toTimeUnit == 'Days'){
      //7
      minutesToDays = hoursDays * secondsMinutes;
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(minutesToDays);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Hours' && toTimeUnit == 'Days'){
      //7
      convertedValue = parseFloat(fromTimeUnitValue) / parseFloat(hoursDays);
      convertedValue = convertedValue.toString();
    }
    else if(fromTimeUnit == 'Hours' && toTimeUnit == 'Days'){
      //7
      convertedValue = parseFloat(fromTimeUnitValue) * parseFloat(hoursDays);
      convertedValue = convertedValue.toString();
    }
    this.setState({toTimeUnitText: convertedValue});
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
