import { StripeProvider } from '@stripe/stripe-react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51OGrEOEp0nRmZ5Z0Yk27t7agEXQ5Wir3psM3bayyfsWqRPoI2vX9lfZrXsqMgeMz4w3calMbG3pl8qZNkBPEfQUS00JU4qEJPx">
        <Payment />
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});