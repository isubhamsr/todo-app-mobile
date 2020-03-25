import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { FAB, Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper'
import * as Permissions from 'expo-permissions';
import { Appbar } from 'react-native-paper'
// import AppBar from './AppBar'
import ListItems from '../Components/Listitems'
import Dialog from '../Components/Dialog'

export default class Home extends Component {

    state = {
        isModalVisible: false,
        isLoading: false,
    }

    toggleModal = (e) => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        })
    }

    isRefresh = () =>{
        console.log("refras");
        
        this.setState({ isLoading: !this.state.isLoading })
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

                    <Appbar.Header>
                        <Appbar.Content
                            title="To Do"
                        />
                        
                    </Appbar.Header>

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
