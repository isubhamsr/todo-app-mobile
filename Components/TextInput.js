import React, { Component } from 'react'
import { TextInput } from 'react-native-paper'
import { ScrollView, StyleSheet } from 'react-native'

export default class Textinput extends Component {

    state = {
        text: null,
        desc: null,
        time: null,
    }

    render() {
        return (
            <React.Fragment>
                <ScrollView contentContainerStyle={{ margin: 16 }}>
                    <TextInput
                        label='Title'
                        value={this.state.text}
                        style={[styles.inputText], {marginBottom: 16, backgroundColor: 'white'}}
                        onChangeText={text => this.setState({ text: text })}
                    />
                    <TextInput
                        label='Description'
                        value={this.state.desc}
                        style={[styles.inputText],{height: 100, backgroundColor: 'white', marginBottom: 16}}
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
        )
    }
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: 'white',
        
    }
})