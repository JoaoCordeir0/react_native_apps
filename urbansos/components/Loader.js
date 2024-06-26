import React, { Component } from 'react';
import { StyleSheet, View, Modal, Image, ActivityIndicator } from 'react-native';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: this.props.isLoading
    }
  }

  render() {
    return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={this.state.isLoading}
        style={{ zIndex: 1100 }}
        onRequestClose={() => { }}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator animating={this.state.isLoading} size={50} color="white" />                       
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.8)',
    zIndex: 1000
  },
  activityIndicatorWrapper: {    
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default Loader
