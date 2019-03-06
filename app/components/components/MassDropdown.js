import React from "react";
import { StyleSheet} from "react-native";
import { Dropdown } from 'react-native-material-dropdown';

// defines the dropdown component for mass
// and displays the dropdown to another class
// onChangeText={
//    (unit) => this.setState({getUnit: (String(this.state.massData[unit]))})
//}



export default class MassDropdown extends React.Component {
    render() {

        let massData = [{
            value: 'Gram',
          }, {
            value: 'Kilogram',
          }, {
            value: 'Ounce',
          }, {
            value: 'Pound',
          }];
      
        return (
            <Dropdown
                label=''
                data={massData}
                value={'Gram'}
                rippleCentered={true}
                itemPadding={10}
            />
        );
    }
  
}

