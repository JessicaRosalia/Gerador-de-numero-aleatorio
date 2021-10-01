/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0);

    function handleNumero(){
        const novo_numero = Math.floor(Math.random() * 100);
        setNumero(novo_numero);
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}> {numero} </Text>
            <TouchableOpacity onPress={handleNumero} style={style.botao}>
                <Text style={style.texto}>Gerar número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 24,
        color: '#03A0A0',
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#D3A900',
        width: '80%',
        height: 45,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
   //     display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default App;
