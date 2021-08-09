import React from 'react'
import { Component } from 'react';
import { View } from 'react-native'
import DetailView from './DetailView';
import Update from './UpdateProduct';
import { connect } from 'react-redux';
import * as actions from '../actions'


class ProductsDetails extends Component {
    renderDetails() {
        if (this.props.toUpdate) {
            return <Update />
        } else {
            return <DetailView />
        }
    }

    render() {
        return (
            <View>
               {this.renderDetails()} 
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { 
        toUpdate: state.toUpdate,
    }
}

export default connect(mapStateToProps, actions)(ProductsDetails);