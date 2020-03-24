import React, { Component } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal';
import { removeOrientationChangeListener } from 'expo/build/ScreenOrientation/ScreenOrientation';
import AppBar from '../screens/AppBar';
import ListItems from './Listitems';
import TextInput from './TextInput';

export default class Dialog extends Component {

    hideModal = () => {
        this.props.onClose()
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
                    <AppBar title="Add Tasks" onClose={() => this.hideModal()} type="modal" />
                    <TextInput />
                </View>
            </Modal>
        )
    }
}
