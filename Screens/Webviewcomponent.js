import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewComponent = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.fiverr.com/sorealdeveloper' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewComponent;
