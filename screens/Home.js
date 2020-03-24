import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { FAB, Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper'
import AppBar from './AppBar'
import ListItems from '../Components/Listitems'
import Dialog from '../Components/Dialog'

export default class Home extends Component {

    state = {
        isModalVisible: false,
    }

    toggleModal = (e) => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        })
    }

    renderModal = () => {
        return (
            <Dialog
                visible={this.state.isModalVisible}
                onClose={() => this.toggleModal()}
            />
        )
    }

    render() {
        return (
            <React.Fragment>
                <AppBar title="Todo App" />
                <ListItems />
                <FAB
                    style={styles.fab}
                    small={false}
                    icon="plus"
                    onPress={this.toggleModal}
                />
                {this.renderModal()}
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    card: {
        margin: 16,
    }
})
