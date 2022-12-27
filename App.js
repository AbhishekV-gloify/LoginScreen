import React, { useState } from "react";
import { StyleSheet, TouchableOpacity,Text, TextInput, View } from "react-native";

const FlexDirectionBasics = () => {
  
 const [isUserName, setIsUserName] = useState('');
 const [isPassword, setIsPassword] = useState('');
 const [isLoginActive, setIsLoginActive] = useState(false);


 const validation = () => {
  if(isUserName.length>0 && isPassword.length>0){
    setIsLoginActive(true)
  } else {
    setIsLoginActive(false)    
  }
 }


  return (
    <View style={[styles.container]}>
      <View style={styles.hellocontent}>
          <Text style={styles.hello}>Hello</Text>
          </View>
          <View style={[styles.yellowLine]}/>
          <Text>Sign in to your account</Text>
          <Text style={[styles.grayText,styles.emailtext]}>Email</Text>
          <TextInput placeholder="Enter email" placeholderTextColor="#979797"
          keyboardType="email-address"
          onChangeText = {(text) => {
            setIsUserName(text)
            validation()
          }}/>
          
          <View style={styles.blackLine}/>
          <Text style={[styles.grayText,styles.emailtext]}>Password</Text>
          <TextInput 
            placeholder="Enter Password" 
            secureTextEntry={true} 
            placeholderTextColor="#979797"
            onChangeText = {(text) => {
              setIsPassword(text)
              validation()
          }}/>
          
          <View style={styles.blackLine}/>
          
          <View style={styles.right}>
            <Text style={[styles.grayText,{fontSize:12}]}>Forgot your Password?</Text>
          </View>
          
          <View>
            <TouchableOpacity style={isLoginActive? styles.button:styles.disable}>
              <Text style={styles.logintext}> Log in</Text>
            </TouchableOpacity>
          </View>

            <View style={[styles.horizontal,{marginTop:10}]}>
              <Text style={[styles.grayText2]}>Don't have an account? </Text>
              <Text style={[styles.grayText2,{fontWeight:"bold",textDecorationLine:'underline'}]}>Sign up</Text>
            </View>
    </View>
  );
};



const styles = StyleSheet.create({
  hello:{
    fontWeight:"bold",
    fontSize: 30,
  },

  hellocontent:{
    zIndex:2,
    // backgroundColor:'red'
  },

  disable:{
    borderRadius:30,
    backgroundColor:"gray",
    padding:15,
    marginTop:40,
    justifyContent:"center",
    alignItems:"center"
  },

  horizontal:{
    flexDirection:"row",
    justifyContent:"center"
  },
  right:{
    flexDirection:"row",
    justifyContent:"flex-end"
  },

  grayText:{
    color:"#979797"
  },

  grayText2:{
    color:"#979797",
    fontSize: 12
  },

  emailtext:{
    marginTop:40
  },

  button:{
    borderRadius:30,
    backgroundColor:"#FFCC00",
    padding:15,
    marginTop:40,
    justifyContent:"center",
    alignItems:"center"
  },


  container:{
    height:300,
    marginLeft:50,
    marginEnd:50,
    marginTop:80
  },
  logintext:{
    fontSize:20,
    fontWeight:'600'
  },

  yellowLine:{
    width : 70,
    height : 7,
    marginLeft:12,
    backgroundColor:"#FFCC00",
    marginTop:-8,
    marginBottom:5,
  },
  blackLine:{
    height : 1,
    backgroundColor:"black"
  }
});

export default FlexDirectionBasics;