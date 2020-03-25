import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, AsyncStorage } from 'react-native'
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

console.log("list", typeof (data));


export default class ListItems extends Component {

    state = {
        isLoading: false,
        item: [{id: 1, text: "Work Out", desc: "Go to Gym", time: "6 PM"}]
    }

    getData = async () => {
        const data = JSON.parse(await AsyncStorage.getItem("mylist"))
        this.setState({ isLoading: false, item: data })
        console.log("from list item");
        console.log(data);
    }

    componentDidMount() {
        // this.getData()
        // this.renderListItems()
    }

    renderListItems = async () => {
        const dataItems = await this.getData()
        console.log("form render");
        console.log(dataItems);
    }

    render() {
        return (
            <FlatList
                data={this.state.item}
                onRefresh={() => this.getData()}
                refreshing={this.state.isLoading}
                renderItem={({ item }) =>
                    <Card style={styles.card}>
                        <Card.Title title={item.text} right={() => <IconButton icon="delete" color={Colors.red500} size={20} onPress={() => console.log('Pressed')} />} />
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