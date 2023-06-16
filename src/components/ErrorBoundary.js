import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Logger from '../utils/LoggerUtil';

//This component is class based component because error catching lifecycle methods are available for Class based components only
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // We can also log the error to an error reporting service
    Logger.log('Some JS error occurred', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when any error occurred
      return (
        <SafeAreaView style={styles.container}>
          <Text>Something went wrong during rendering</Text>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
