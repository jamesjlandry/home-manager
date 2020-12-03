import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,} from 'react-native';



export default function Login() {

    
    
    
   
      const [email, setEmail] = React.useState('');
      const [pass, setPass] = React.useState('');
    
    
     
    
     
    
      return (
      <View style={styles.countainer}>
            <TextInput>

            </TextInput>
            <TextInput>

            </TextInput>
      </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#3498db'
        },
        title:  {
            width: 150,
            marginTop: 10,
            color: '#FFF',
        }
    })
    