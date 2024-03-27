/*
  CHALLENGE 3: Triangle Analyzer Function

  The "triangleAnalyzer" function determines the type of triangle based on the 
    angles provided.

  Requirements:
  - The function takes three arguments named angleA, angleB, and angleC, 
    representing the angles of a triangle in degrees.
  - If any angle is exactly 90 degrees, return "this is a right triangle".
  - If any angle is greater than 90 degrees, return "this is an obtuse triangle".
  - If all angles are less than 90 degrees, return "this is an acute triangle".
  - Additional conditions to check:
        * All angles must be of type number. If not, return "all angles must be 
        numbers".
        * All angles must be greater than zero. If not, return "all angles must 
        be greater than zero".
        * The sum of the three angles must add up to 180 degrees. If not, 
        return "angles must total 180".

  Test Cases:
  1. triangleAnalyzer(90, 60, 30) should return "this is a right triangle"
  2. triangleAnalyzer(91, 45, 44) should return "this is an obtuse triangle"
  3. triangleAnalyzer(60, 60, 60) should return "this is an acute triangle"
  4. triangleAnalyzer('90', '60', '30') should return "all angles must be numbers"
  5. triangleAnalyzer(90, 60, 29) should return "angles must total 180"
  6. triangleAnalyzer(0, 90, 90) should return "all angles must be greater 
    than zero"

  Additional Information:
  - Ensure to validate the input before processing the logic to determine 
    the triangle type.
  - Remember to handle edge cases as outlined in the requirements.
  - The function should carefully assess the conditions and return the 
    appropriate type of triangle or error message as specified.
*/

function triangleAnalyzer(angleA, angleB, angleC) {
    // Your code here
  }
  