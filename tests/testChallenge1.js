// testChallenge1.js

// Enhanced testing function for more descriptive output.
function test(description, testFunction, failMessage) {
    console.log("Testing case: " + description);
    if (testFunction()) {
      console.log('Result: Test passed');
    } else {
      console.log('Result: Test failed. Tip: ' + failMessage);
    }
    console.log("---"); // Adds a separator for readability
  }
  
  // Test 1: Concatenating two strings
  test('Concatenating "hello" and "world" to get "helloworld"', function() {
    return concatenator('hello', 'world') === 'helloworld';
  }, "Ensure you're joining two strings directly without spaces or additional characters.");
  
  // Test 2: Adding two numbers
  test('Adding 5 and 10 to get 15', function() {
    return concatenator(5, 10) === 15;
  }, "Check your addition. Remember, the '+' operator should sum numbers correctly.");
  
  // Test 3: Handling different types
  test('Using "5" (string) and 10 (number) to ensure type mismatch is handled', function() {
    return concatenator('5', 10) === 'a and b must be of the same type';
  }, "Verify both inputs are of the same type. If not, alert the user about the mismatch.");
  
  // Test 4: Non-string, non-number types
  test('Using true (boolean) and false (boolean) to check for non-string/number handling', function() {
    return concatenator(true, false) === 'a and b must be numbers or strings';
  }, "Ensure the function only processes numbers or strings, rejecting other types.");
  
  // Output is viewed in the browser's console.  