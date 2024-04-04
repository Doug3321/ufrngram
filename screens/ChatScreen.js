import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function ChatScreen({ route }) {
    const { id } = route.params;

    const [chat, setChat] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://mobile.ect.ufrn.br:3000/chatlist/' + id);
            const chat = await response.json();
            setChat(chat);
        }
        getData();
    }, []);

    function renderItem({ item }) {
        return <View style={item.autor ? styles.mensagemAutor : styles.mensagem}>
            <Text>{item.texto}</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto"></StatusBar>
            <View style={styles.chatContainer}>
                <FlatList
                    data={chat.mensagens}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.inputContainer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatContainer: {
        flex: 1,
        margin: 5,

    },
    inputContainer: {
        height: 50,
    },
    mensagem: {
        height: 30,
        backgroundColor: 'grey',
        borderRadius: 5,
        justifyContent: "center",
        padding: 5,
        alignSelf: "flex-start",
    },
    mensagemAutor: {
        height: 30,
        backgroundColor: 'purple',
        borderRadius: 5,
        justifyContent: "center",
        padding: 5,
        alignSelf: "flex-end",
    }

});