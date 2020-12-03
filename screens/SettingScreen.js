import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class SettingScreen extends Component{
    constructor(){
      super();
      this.state ={
        emailId:'',
        password:'',
        firstName:'',
        lastName:'',
        address:'',
        contact:'',
        docId:'',
      }
    }
    updateUserDetails=()=>{
      db.collection('users').doc(this.state.docId)
      .update({
        "first_name": this.state.firstName,
        "last_name" : this.state.lastName,
        "address"   : this.state.address,
        "contact"   : this.state.contact,
      })
  
      Alert.alert("Profile Updated Successfully")
  
    }
  
    componentDidMount(){
      this.getUserDetails()
    }
    getUserDetails=()=>{
       var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',email).get()
         .then(snapshot => { snapshot.forEach(doc => { var data = doc.data()
           this.setState({ emailId : data.email_id,
            firstName : data.first_name, 
            lastName : data.last_name,
            address : data.address,
            contact : data.contact,
            docId : doc.id }) 
              }); 
            }) 
          }
  
    render(){
      return(
        <View style={styles.container} >
          <MyHeader title="Settings" navigation={this.props.navigation}/>
          <View style={styles.formContainer}>
              <TextInput
                style={styles.formTextInput}
                placeholder ={"First Name"}
                maxLength ={8}
                onChangeText={(text)=>{
                  this.setState({
                    firstName: text
                  })
                }}
                value ={this.state.firstName}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Last Name"}
                maxLength ={8}
                onChangeText={(text)=>{
                  this.setState({
                    lastName: text
                  })
                }}
                  value ={this.state.lastName}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Contact"}
                maxLength ={10}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                  this.setState({
                    contact: text
                  })
                }}
                  value ={this.state.contact}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder ={"Address"}
                multiline = {true}
                onChangeText={(text)=>{
                  this.setState({
                    address: text
                  })
                }}
                  value ={this.state.address}
              />
              <TouchableOpacity style={styles.button}
                onPress={()=>{
                  this.updateUserDetails()
                }}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
  