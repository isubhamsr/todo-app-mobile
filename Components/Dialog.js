import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import Modal from 'react-native-modal';
import { Appbar } from 'react-native-paper'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native-paper'
import { ScrollView, StyleSheet } from 'react-native'


export default class Dialog extends Component {

    id = 0
    arr = []
    state = {
        text: null,
        desc: null,
        time: null,
        isLoading: false
    }

    hideModal = () => {
        this.props.onClose()
    }

    handelSave = async () => {
        console.log("handle save pressed");
        const data = {}
        data.id = this.id
        data.text = this.state.text
        data.desc = this.state.desc
        data.time = this.state.time

        this.arr.push(data)
        this.id++;

        await AsyncStorage.setItem("mylist", JSON.stringify(this.arr))


        const dataItems = await AsyncStorage.getItem("mylist")
        console.log("from dialog");
        console.log(JSON.parse( dataItems));
        console.log(typeof(JSON.parse(dataItems)));

        this.setState({ isLoading: true, text: null, desc: null, time: null })
        this.hideModal()
    }

    render() {
        return (
            <Modal
                isVisible={this.props.visible}
                style={{ margin: 0 }}
                backdropOpacity={1}
                backdropColor="white"
                onBackButtonPress={this.hideModal}
            >
                <View style={{ flex: 1 }}>
                    <React.Fragment>
                        <Appbar.Header>
                            <Appbar.Action icon="close" onPress={this.hideModal} />
                            <Appbar.Content
                                title="Add Tasks"
                            />
                            <Appbar.Action icon="content-save" onPress={this.handelSave} />
                        </Appbar.Header>
                    </React.Fragment>
                    <React.Fragment>
                        <ScrollView contentContainerStyle={{ margin: 16 }}>
                            <TextInput
                                label='Title'
                                value={this.state.text}
                                style={[styles.inputText], { marginBottom: 16, backgroundColor: 'white' }}
                                onChangeText={text => this.setState({ text: text })}
                            />
                            <TextInput
                                label='Description'
                                value={this.state.desc}
                                style={[styles.inputText], { height: 100, backgroundColor: 'white', marginBottom: 16 }}
                                multiline={true}
                                onChangeText={desc => this.setState({ desc: desc })}
                            />
                            <TextInput
                                label='Time'
                                value={this.state.time}
                                style={styles.inputText}
                                onChangeText={time => this.setState({ time: time })}
                            />
                        </ScrollView>
                    </React.Fragment>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: 'white',
        
    }
})