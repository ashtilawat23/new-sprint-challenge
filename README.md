### Web Sprint 1 Challenge README

Welcome to your first coding challenge! This document will guide you through four challenges designed to test your understanding of JavaScript basics. Don't worry if you're new to coding; we'll explain everything you need to know to get started. Let's dive in!

---

### Getting Started

Before you begin, make sure you have a text editor (like VSCode or Sublime Text) and a web browser (Chrome or Firefox works great) ready. You'll write your code in the text editor and use the browser to check your work.

---

### Challenge 1: Concatenator

**Your Task:** Write a function named `concatenator` that takes two inputs. If both inputs are numbers, add them together. If they're strings, stick them together side by side. If the inputs are different types (like one is a string and the other is a number), or they're not strings or numbers, let the user know they need to be the same and be either strings or numbers.

**Example:** If the inputs are "hello" and "world", your function should return "helloworld". If the inputs are 2 and 3, it should return 5.

**Tips:**
- Use the `typeof` operator to check if the inputs are numbers or strings.
- Remember, you can add numbers with `+` and stick strings together with `+` too!

---

### Challenge 2: Falsiness Detector

**Your Task:** Create a function named `falsinessDetector` that looks at five inputs. It should tell if all inputs are "true-ish", all are "false-ish", or some are "true-ish" and some "false-ish". 

**Background:** In coding, certain things are considered "true-ish" (like 1, 'hello', and many other things) because they don't represent emptiness or nothingness. Others are "false-ish" (like 0, or an empty text '') because they kind of represent an absence of a value.

**Example:** If all inputs are numbers (except 0), or texts (except an empty one), they're all "true-ish". If all inputs are 0, or empty texts, they're "false-ish".

**Tips:**
- Use `if` statements to check each condition.
- Remember, an input is "false-ish" if it's `0`, `false`, `null`, `undefined`, `NaN`, or an empty string `''`.

---

### Challenge 3: Triangle Analyzer

**Your Task:** Write a function called `triangleAnalyzer` that receives three angles and tells what kind of triangle they make: right, obtuse, or acute.

**Background:** Triangles are a basic shape in geometry, and the angles inside them tell us a lot about what kind they are. If one angle is exactly 90 degrees, it's a "right triangle". If one angle is more than 90 degrees, it's an "obtuse triangle". If all angles are less than 90 degrees, it's an "acute triangle".

**Example:** If the inputs are 90, 45, and 45, it's a right triangle.

**Tips:**
- First, check that all inputs are numbers greater than 0 and they add up to 180.
- Then, use `if` statements to figure out the type of triangle based on the angles.

---

### Challenge 4: Advanced Battery Care

**Your Task:** Create a function named `advancedBatteryCare` that gives advice based on a battery's charge level.

**Background:** Keeping your battery in good shape means not letting it get too low or too high. Your function will help with that.

**Example:** If the battery level is 50%, your function might say "your battery is at 50%". If it's 100%, it might warn "congrats, you cooked your battery".

**Tips:**
- Use `if` statements to check the battery level and decide what advice to give.
- Remember to check for special messages if the battery is exactly 0% or 100%.

---

### Testing Your Solutions

After you write each function, you can check if it works by using the tests provided in your coding challenge environment. If a test fails, read the feedback, adjust your code, and try again. Don't get discouraged; debugging is a big part of coding!

Happy coding, and remember: practice makes perfect!