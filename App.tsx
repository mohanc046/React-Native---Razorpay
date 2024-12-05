import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

// Main application component
const App = () => {
  // Function to handle the payment process
  const handlePayment = () => {
    // Payment configuration options for Razorpay
    const options = {
      description: 'Credits towards consultation', // Description of the payment purpose
      image: 'https://i.imgur.com/3g7nmJC.jpg', // Logo or image to display in the payment window
      currency: 'INR', // Currency code for the payment
      key: 'rzp_test_zNegaHwyCIHsBL', // Razorpay API key (test key for sandbox environment)
      amount: '5000', // Amount to be charged in the smallest unit of the currency (e.g., 5000 paisa = 50 INR)
      name: 'Acme Corp', // Name of the company or business
      prefill: {
        email: 'mohanme@outlook.com', // Prefilled email address for the payment form
        contact: '6382088165', // Prefilled contact number for the payment form
        name: 'Mohan C', // Prefilled name for the payment form
      },
      theme: { color: '#53a20e' }, // Theme color for the payment UI
    };

    // Initiating the Razorpay payment process
    RazorpayCheckout.open(options)
      .then((data) => {
        // If the payment is successful, handle it here
        // Display a success alert with the payment ID
        Alert.alert('Success', `Payment ID: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // If the payment fails, handle it here
        console.log(error); // Log the error details to the console

        // Display an error alert with the error description
        Alert.alert('Error', `Error: ${error.description}`);
      });
  };

  return (
    <View style={styles.container}>
      {/* Button to trigger the payment process */}
      <Button title="Pay Now" onPress={() => handlePayment()} />
    </View>
  );
};

// Styles for the application
const styles = StyleSheet.create({
  container: {
    flex: 1, // Use all available space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
});

export default App;
