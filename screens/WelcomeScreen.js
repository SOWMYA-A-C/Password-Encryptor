import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Alert, KeyboardAvoidingView, Modal } from 'react-native';
import db from '../firebaseConfig';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
            lastName:'',
            password:'',
            confirmPassword:'',
            emailId:'',
            isButtonPressedAndIsModalVisible:false,
        }
    }

    signingUp = (email, password, confirmPassword) =>{
        if(password !== confirmPassword){
            return (
                Alert.alert('Your password does not match \n Consider changing your password')
            );
        }else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{
                db.collection('users').add({
                    name:this.state.name,
                    email_address:this.state.emailId,
                    password:this.state.password,
                });
                return (
                    Alert.alert('User added successfully! Go organize your events!',
                                '',
                                [
                                    {text:'Ok!', onPress:()=>this.setState({
                                        isButtonPressedAndIsModalVisible:false,
                                    })}
                                ])
                );
            })
            .catch((error)=>{
                var message = error.message;
                return(
                    Alert.alert(message)
                );
            });
        }
    }
    showModal = () =>{
        return(
        <Modal animationType = "fade" transparent = {true} visible = {this.state.isButtonPressedAndIsModalVisible}>
            <View style = {{ flex:1,
                            borderRadius:20,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:"#ffff",
                            marginRight:30,
                            marginLeft : 30,
                            marginTop:80,
                            marginBottom:80
                             }}>
                <ScrollView style = {{width:'100%'}}>
                    <KeyboardAvoidingView style = {{
                           flex:1,
                           justifyContent:'center',
                           alignItems:'center'
                           }}>
                    <Text style = {{  justifyContent:'center',
                                      alignSelf:'center',
                                      fontSize:30,
                                      color:'#ff5722',
                                      margin:50
                                      }}>
                            Registeration
                    </Text>

                    <View>
                        <TextInput
                        style = {{   width:"75%",
                        height:35,
                        alignSelf:'center',
                        borderColor:'#ffab91',
                        borderRadius:10,
                        borderWidth:1,
                        marginTop:20,
                        padding:10}}
                        placeholder = "Name"
                        onChangeText = {(text)=>{
                            this.setState({
                                name:text
                            });
                        }}
                        value = {this.state.name}
                        />
                    </View>

                    <View>
                        <TextInput
                        style = {{   width:"75%",
                        height:35,
                        alignSelf:'center',
                        borderColor:'#ffab91',
                        borderRadius:10,
                        borderWidth:1,
                        marginTop:20,
                        padding:10}}
                            placeholder = "Email Address"
                            keyboardType = 'email-address'
                            onChangeText = {(text)=>{
                                this.setState({
                                    emailId:text,
                                });
                            }}
                            value = {this.state.emailId}
                        />
                    </View>

                    <View>
                        <TextInput
                        style = {{   width:"75%",
                        height:35,
                        alignSelf:'center',
                        borderColor:'#ffab91',
                        borderRadius:10,
                        borderWidth:1,
                        marginTop:20,
                        padding:10}}
                        placeholder = "Type your password here!"
                        keyboardType = 'numeric'
                        onChangeText = {(text)=>{
                            this.setState({
                                password:text,
                            });
                        }}
                        value = {this.state.password}
                        />
                    </View>

                    <View>
                        <TextInput
                        style = {{   width:"75%",
                        height:35,
                        alignSelf:'center',
                        borderColor:'#ffab91',
                        borderRadius:10,
                        borderWidth:1,
                        marginTop:20,
                        padding:10}}
                        placeholder = "Confirm your password"
                        keyboardType = 'numeric'
                        onChangeText = {(text)=>{
                            this.setState({
                                confirmPassword:text,
                            });
                        }}
                        value = {this.state.confirmPassword}
                        />
                    </View>

                    <View>
                        <TouchableOpacity onPress = {()=>{this.signingUp(this.state.emailId, this.state.password, this.state.confirmPassword)}}
                                        style = {{   width:200,
                                            height:40,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            borderWidth:1,
                                            borderRadius:10,
                                            marginTop:30}}>

                            <Text style = {{   color:'#ff5722',
                                               fontSize:15,
                                               fontWeight:'bold'
                                               }}> Register! </Text>

                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress = {()=>{this.setState({isButtonPressedAndIsModalVisible:false})}}
                        style = {{   width:200,
                            height:30,
                            justifyContent:'center',
                            alignItems:'center',
                            marginTop:5}}
                        >
                                <Text style = {{color:'white'}}> Cancel </Text>
                        </TouchableOpacity>
                    </View>
                    </KeyboardAvoidingView>
                </ScrollView>
           </View>
        </Modal>
        );
    }
    signingIn = (emailId, password) =>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            this.props.navigation.navigate('PasswordEncryptor');
        })
        .catch((error)=>{
            var message = error.message;
            return(
                Alert.alert(message)
            );
        })
    }
    render(){
        return(
            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                {
                   (this.state.isButtonPressedAndIsModalVisible)  ?
                   (this.showModal())                             :
                   (console.log('Modal is not visible for some reason.'))
                }

                <View>
                    <TextInput
                        placeholder = "Email Address"
                        keyboardType = 'email-address'
                        onChangeText = {(text)=>{
                            this.setState({
                                emailId:text,
                            });
                        }}
                        value = {this.state.emailId}
                    />
                </View>

                <View>
                    <TextInput
                        placeholder = "Password"
                        secureTextEntry = {true}
                        onChangeText = {(text)=>{
                            this.setState({
                                password:text
                            });
                        }}
                    />
                </View>

                <View>
                    <TouchableOpacity onPress = {()=>{this.signingIn(this.state.emailId, this.state.password)}}>
                        <Text> Organize! </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress = {()=>{this.setState({isButtonPressedAndIsModalVisible:true})}}>
                        <Text> Sign Up! </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}