import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Button, Card, Title, Divider, IconButton, Colors, List } from 'react-native-paper'
import { Feather } from '@expo/vector-icons'

const data = [
    { id: 1, title: "Work Out", desc: "Go to Gym", time: "6 PM" },
    { id: 2, title: "Study", desc: "Study", time: "6 PM" },
    { id: 3, title: "Clean", desc: "Cleaning HOme", time: "6 PM" },
    { id: 4, title: "Home Work", desc: "Do Home Work", time: "6 PM" },
    { id: 5, title: "Meeting", desc: "I have a meeting in Office", time: "6 PM" },
    { id: 6, title: "Project", desc: "I need to do my project", time: "6 PM" },
]

export default class ListItems extends Component {

    render() {
        return (
            <FlatList
                data={data}
                renderItem={({ item }) =>
                    <Card style={styles.card}>
                        <Card.Title title={item.title} right={() => <IconButton icon="delete" color={Colors.red500} size={20} onPress={() => console.log('Pressed')} />} />
                        <Divider style={{ marginBottom: 10 }} />
                        <Card.Content>
                            <List.Item
                                title={item.desc}
                                description={item.time}
                                // left={() => <List.Icon color={Colors.blue500} icon="book-plus"  />}
                            />
                        </Card.Content>
                        <Divider style={{ marginTop: 16, }} />
                    </Card>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
    }
})