import React, { Component } from 'react'
//import DatePicker from 'react-native-datepicker'
import { View, TextInput} from 'react-native';
// import DropdownMenu from 'react-native-dropdown-menu';
//import { Switch } from 'react-native-switch';
import {API, graphqlOperation } from '@aws-amplify/api';
import { createCity as CreateCity } from '../graphql/mutations'
//import { listCitys as ListCitys } from '../graphql/queries'
import { Button } from 'react-native-elements'

class IndividualSignUpPage extends Component {
  state = { name: '', country: '', cities: [] }
  
  
  onChange = (key, value) => {
    this.setState({ [key]: value })
  }
  createCity = async () => {
    const city = {
        name: this.state.name,
        country: this.state.country, 
    }
    console.log(city)
    const cities = [...this.state.cities, city]
    this.setState({ cities, name: '', country: '' })
    console.log(cities)
    console.log('city: ', this.state.name)
    try {
        await API.graphql(graphqlOperation(CreateCity, {input: cities}))
        console.log('city successfully created!!!')
    } catch (err) { 
        console.log('error: ', err)
    }
}
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F5FCDD'}}> 

      <TextInput 
      style={{margin: 20}}
        onChangeText={v => this.onChange('name', v)}
        placeholder='City Name'
        value={this.state.name}
        />
             <TextInput 
             style={{margin: 20}}
        onChangeText={v => this.onChange('country', v)}
        placeholder='Country'
        value={this.state.country}
        />

      <Button
          style={{margin: 20 }}
          onPress={this.createCity}
          title='Add City'
          backgroundColor='#ffa100'
          
      />
  
 </View>

    )
    }
  
  }

  export default IndividualSignUpPage;


/*}
class IndividualSignUpPage extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2020-01-01"}, time = '', switchValue = false, firstname = '', lastname = '', fullName = []
  }

  state = { name: '', country: '', cities: [] }

onChange = (key, value) => {
  this.setState({ [key]: value })
}
createCity = async () => {
      const city = {
          name: this.state.name,
          country: this.state.country, 
      }
      const cities = [...this.state.cities, city]
      this.setState({ cities, name: '', country: '' })
      try {
          await API.graphql(graphqlOperation(CreateCity, {input: city}))
          console.log('city successfully created!!!')
      } catch (err) { 
          console.log('error: ', err)
      }
  }
    toggleSwitch = () => {
      this.setState({ switchValue: !this.state.switchValue });
      };

      createUsernames = async() => {
        // store the restaurant data in a variable
       // const username = {
        //  firstname: this.state.firstname, lastname: this.state.lastname
        // }
       // console.log(username)
        {/*}
        // perform an optimistic response to update the UI immediately
        const fullName = [...this.state.fullName, username]
        console.log(fullName)
        this.setState({
          fullName,
          firstname: '', lastname: ''
          })
        ///// ending comment
        try {
          // make the API call
          await API.graphql(graphqlOperation(createUser, {
            input: this.state.firstname
          }))
          console.log('item created!')
        } catch (err) {
          console.log('error creating username', err)
        }
      }
    
  render(){
  //  var data = [["C", "Java", "JavaScript", "PHP"]];
    return (
      <View style={{flex: 1 }}>
        <View style={{flex: 1, backgroundColor: 'black', width: '100%', height: '100%'}}>
          
          <Text style={{marginTop: 40, fontSize: 25, textAlign: 'center', fontWeight: 'bold', color: 'white'}}> 
            Account Information Sign Up Page
            </Text>
            <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>

          <Text style={{marginTop: 20, fontSize: 20, textAlign: 'center', fontStyle: 'italic', color: 'white'}}> 
            Input your First Name
          </Text>
        <TextInput
                  style={{  width: 350,
                    height: 55,
                    backgroundColor: '#a9a9a9',
                    marginLeft: 30,
                    padding: 8,
                    color: 'white',
                    borderRadius: 14,
                    marginTop: 10}}
                  placeholder=' city name'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={v => this.onChange('name', v)}
                  value={this.state.name}
                />
                <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>
                <Text style={{marginTop: 5, fontSize: 20, textAlign: 'center', fontStyle: 'italic', color: 'white'}}> 
            Input your Last Name
          </Text>
        <TextInput
                  style={{  width: 350,
                    height: 55,
                    backgroundColor: '#a9a9a9',
                    marginLeft: 30,
                    padding: 8,
                    color: 'white',
                    borderRadius: 14,
                    marginTop: 10}}
                  placeholder='country'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={v => this.onChange('country', v)}
                  value={this.state.country}
                />

<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>
<Text style={{color: 'white', fontSize: 20, textAlign: 'center', marginTop: 10, marginBottom: 10 }}>
  Are you in college? 
   </Text>
   <View style={{marginLeft: 175}}>
   <Switch
        value={this.state.switchValue}
        onValueChange={this.toggleSwitch}
        changeValueImmediately={true}
        renderInsideCircle={() =>  <Text style={{ color: 'red', fontWeight: 'bold'}}> Yes</Text> }
        activeText={'Yes'}
        inActiveText={'Off'}
        backgroundActive={'green'}
        backgroundInactive={'red'}
        circleActiveColor={'green'}
        circleInActiveColor={'red'}
        renderActiveText={false}
        renderInActiveText={false}
      />
</View>

   <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>
<Text style={{marginTop: 5, fontSize: 20, textAlign: 'center', fontStyle: 'italic', color: 'white'}}> 
            If your in college input your full college name
          </Text>
        <TextInput
                  style={{  width: 350,
                    height: 55,
                    backgroundColor: '#a9a9a9',
                    marginLeft: 30,
                    padding: 8,
                    color: 'white',
                    borderRadius: 14,
                    marginTop: 10}}
                  placeholder='college'
                  autoCapitalize="none"
                  placeholderTextColor='white'
                  onChangeText={v => this.onChange('college', v)}
                  value={this.state.college}
                />

<View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>
{/*}
<View style={{height: 30}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'#a9a9a9'}
          tintColor={'white'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
           titleStyle={{color: '#a9a9a9'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
           </DropdownMenu>
//// ending commminggggg

<Text style={{ marginBottom: 10,textAlign: 'center', fontSize: 20, fontStyle: 'italic', color: 'white' }}> 
              Select your date of birth
          </Text>
         
   
  
    
      <DatePicker
        style={{width: 200, marginBottom: 10, marginLeft: 100, backgroundColor: 'white' }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1800-01-01"
        maxDate="2020-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
      //  showIcon={false}
       // customStyles={{
         // dateIcon: {
         //   position: 'absolute',
         //   left: 0,
         //   top: 4,
         //   marginLeft: 0
        //  },
         // dateInput: {
          //  marginLeft: 36
         // }
          // ... You can check the source to find the other keys.
    //    }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
       
      <View
  style={{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginTop: 10
  }}
/>

<TouchableOpacity 
                        onPress={this.createCity}
                        style ={{   height: 50,
                          width: 200,
                          borderRadius: 25,
                          borderWidth: 2.5,
                          borderColor: '#fff',
                            backgroundColor: '#0043cf',
                            borderRadius: 25,
                            marginVertical: 10,
                            paddingTop: 15, 
                            marginTop: 40,
                            marginLeft: 100 }}> 
               
            <Text style = {{ fontSize: 16,fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginTop: -1}}> Sign Up</Text>
       </TouchableOpacity>
</View>
</View>
    )

  }
}

export default IndividualSignUpPage; 
{*/