import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Appbar } from 'react-native-paper'
import PropTypes from 'prop-types'

export default class AppBar extends Component {

    goBack = () => { this.props.onClose() };

    handleSearch = () => console.log('Searching');

    handleMore = () => console.log('Shown more');

    render() {
        return (
            <React.Fragment>
                <Appbar.Header>
                    {this.props.type === "modal"
                        ?
                        <Appbar.Action icon="close" onPress={this.goBack} />
                        : null}
                    <Appbar.Content
                        title={this.props.title}
                    />
                    {this.props.type === "modal"
                        ?
                        <Appbar.Action icon="content-save" onPress={this.goBack} />
                        : null}
                </Appbar.Header>
            </React.Fragment>
        )
    }
}

AppBar.defaultPros = {
    type: "home"
}

