import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'João', nota: 9.9 },
    { id: 2, nome: 'Maria', nota: 8.2 },
    { id: 3, nome: 'Joana', nota: 10 },
    { id: 4, nome: 'José', nota: 7.9 },
    { id: 5, nome: 'Ana', nota: 8.9 },
    { id: 6, nome: 'Renato', nota: 6.7 },
    { id: 7, nome: 'Pedro', nota: 8.7 },
    { id: 8, nome: 'Paula', nota: 8.8 },
    { id: 9, nome: 'André', nota: 7.2 },

    { id: 10, nome: 'João', nota: 9.9 },
    { id: 11, nome: 'Maria', nota: 8.2 },
    { id: 12, nome: 'Joana', nota: 10 },
    { id: 13, nome: 'José', nota: 7.9 },
    { id: 14, nome: 'Ana', nota: 8.9 },
    { id: 15, nome: 'Renato', nota: 6.7 },
    { id: 16, nome: 'Pedro', nota: 8.7 },
    { id: 17, nome: 'Paula', nota: 8.8 },
    { id: 18, nome: 'André', nota: 7.2 },

];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    // justifyContent: 'space-around'
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //justifyContent: 'space-around',
    //alignItems: 'flex-end',
};

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>;

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }
    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}