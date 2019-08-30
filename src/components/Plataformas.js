import React from 'react';
import {Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props =>{
    const notificar = msg =>{
        if(Platform.OS === 'android'){ //ios
            ToastAndroid.show(msg+' Android', ToastAndroid.SHORT)
        }
        else{
            Alert.alert('Informação', msg + 'IOS')
        }
    }
    return (
        <Button title='Plataforma?'
            onPress = {() => notificar('Parabéns!')}

    
    />
    )
}