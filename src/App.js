import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Inverter ,{MegaSena} from './components/Multi'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Simples texto='Flexível!!!!123' />
				<ParImpar numero={27} />
        <Inverter texto='React Nativo!' />
        <MegaSena numeros={6} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})