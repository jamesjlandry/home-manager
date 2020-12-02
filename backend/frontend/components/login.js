import * as React from 'react';
import { Text, View, TextInput, TouchableHighlight, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Login() {

    
    
    
   
      const [email, setEmail] = React.useState('');
      const [pass, setPass] = React.useState('');
      const animationVariable = React.useRef(new Animated.Value(0)).current;
      const loginButtonAnimationVariable = React.useRef(new Animated.Value(0)).current;
    
      const runAnimation = (toVal) => {
        Animated.spring(animationVariable, {
            toValue : toVal,
            useNativeDriver: false,
        }).start(() => {
          if(toVal === 1) {
            runLoginButtonAnimation(1);
          }
        });
      } 
    
      const runLoginButtonAnimation = (toVal) => {
        Animated.timing(loginButtonAnimationVariable, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.bounce,
        }).start(() => {
          runAnimation(0);
          loginButtonAnimationVariable.setValue(0);
        });
      }
    
      return (
        <Animated.View
          style={{
            padding: 20,
            backgroundColor: animationVariable.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['#133E7C', '#0D2534'],
                                extrapolate: 'clamp',
                              }),
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text style={{
            alignSelf: 'center',
            fontSize: 30,
            marginBottom: 50,
            color: '#22A0B6',
            fontWeight: '600',
          }}>Login</Text>
          <View style={{
            flexDirection: 'row',
            marginBottom: 20,
          }}>
            <Icon name="email" size={30} color={'#9BE6DE'} />
            <TextInput
              textContentType={'emailAddress'}
              onChangeText={(text) => setEmail(text)}
              value={email}
              autoCompleteType={'email'}
              clearButtonMode={'while-editing'}
              keyboardType={'email-address'}
              returnKeyLabel={'next'}
              returnKeyType={'next'}
              placeholder={'Email Address'}
              style={{
                flex: 1,
                paddingLeft: 20,
                borderBottomColor: '#9BE6DE',
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View style={{
            flexDirection: 'row',
            marginBottom: 20,
          }}>
            <Icon name="key" size={30} color={'#9BE6DE'} />
            <TextInput
              textContentType={'password'}
              onChangeText={(text) => setPass(text)}
              value={pass}
              autoCompleteType={'password'}
              clearButtonMode={'while-editing'}
              returnKeyLabel={'done'}
              returnKeyType={'done'}
              placeholder={'Password'}
              secureTextEntry={true}
              style={{
                flex: 1,
                paddingLeft: 20,
                borderBottomColor: '#9BE6DE',
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View style={{
            alignSelf: 'center',
            marginTop: 30,
          }}>
            <TouchableHighlight
             activeOpacity={0.8}
             underlayColor="#ffffff"
             onPress={() => runAnimation(1)}
            >
              <Animated.View style={{
                width: animationVariable.interpolate({
                                inputRange: [0, 1],
                                outputRange: [120, 60],
                                extrapolate: 'clamp',
                              }),
                height: animationVariable.interpolate({
                                inputRange: [0, 1],
                                outputRange: [40, 60],
                                extrapolate: 'clamp',
                              }),
                borderRadius: animationVariable.interpolate({
                                inputRange: [0, 1],
                                outputRange: [8, 60],
                                extrapolate: 'clamp',
                              }),
                elevation: 8,
                shadowColor: '#0047BB',
                shadowRadius: 8,
                backgroundColor: animationVariable.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['#0D2534', '#652EC7'],
                                extrapolate: 'clamp',
                              }),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Animated.Text style={{
                  color: '#9BE6DE',
                  position: 'absolute',
                  opacity: animationVariable.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0],
                                extrapolate: 'clamp',
                            }),
                }}>Login</Animated.Text>
                <Animated.View style={{
                      position: 'absolute',
                      width: 60,
                      height: 60,
                      backgroundColor: '#0D2534',
                      borderRadius: 60,
                      opacity: animationVariable.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1],
                                    extrapolate: 'clamp',
                                }),
                      transform: [{
                        scale: loginButtonAnimationVariable.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.3, 1],
                                    extrapolate: 'clamp',
                                }),
                      }],
                    }} />
                <Animated.View style={{
                      position: 'absolute',
                      opacity: animationVariable.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1],
                                    extrapolate: 'clamp',
                                }),
                    }}>
                  <Icon name="lock" size={30} color={'#9BE6DE'} />
                </Animated.View>
                
              </Animated.View>
            </TouchableHighlight>
          </View>
        </Animated.View>
      );
    }
    