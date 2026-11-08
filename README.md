# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Closure in JavaScript

Closure is a feature in JavaScript where an inner function remembers and accesses variables from its outer function, even after the outer function has finished executing.

**Example:**

```javascript
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let result = outer();

result(); // 1
result(); // 2
result(); // 3
```

**Explanation:**
- The `outer()` function creates a variable `count`.
- It returns the `inner()` function.
- Even after `outer()` finishes execution, `inner()` remembers the `count` variable.
- Each call increases the count.


# React State, Hooks & Re-rendering

## 1. What is State in React?

State is a built-in way to store and manage data inside a React component.

- State represents data that can change over time.
- When state changes, React updates the UI accordingly.
- State makes components dynamic and interactive.

**Example:**

A counter application where the count changes whenever a user clicks a button.

```jsx
const [count, setCount] = useState(0);
```

Here:

- `count` → Current state value.
- `setCount` → Function used to update the state.
- `0` → Initial state value.

---

## 2. What are Hooks in React?

Hooks are special functions provided by React that allow functional components to use React features such as state and lifecycle-related functionality.

Before Hooks, managing state and lifecycle features required class components.

Hooks made these features available in functional components.

**Common React Hooks:**

| Hook          | Purpose                                           |
| ------------- | ------------------------------------------------- |
| `useState`    | Manages component state                           |
| `useEffect`   | Handles side effects                              |
| `useContext`  | Shares data between components                    |
| `useRef`      | Stores mutable values and references DOM elements |
| `useMemo`     | Memoizes calculated values                        |
| `useCallback` | Memoizes functions                                |

**Important Rules of Hooks:**

1. Always call Hooks at the top level of a React component or custom Hook.
2. Do not call Hooks inside loops, conditions, or nested functions.
3. Only call Hooks from React function components or custom Hooks.

---

## 3. What is useState?

`useState` is a React Hook that allows functional components to create and manage state.

**Syntax:**

```jsx
const [state, setState] = useState(initialValue);
```

It returns an array containing two elements:

1. Current state value.
2. A function to update that state.

**Example: Counter Application**

```jsx
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Count: {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </>
    );
}

export default Counter;
```

**Explanation:**

- Initially, `count` is 0.
- When the button is clicked, `setCount(count + 1)` requests a state update.
- React schedules a re-render.
- The component executes again with the updated state.
- The updated count appears on the screen.

### Updating State Using Previous State

When the next state depends on the previous state, use the functional updater form.

```jsx
setCount((prevCount) => prevCount + 1);
```

This is useful when multiple state updates need to build on the previous value.

---

## 4. How Does Re-rendering Work in React?

Re-rendering means React executes a component function again to calculate what the updated UI should look like.

Whenever a component's state changes, React schedules a re-render.

### Step-by-Step Execution Flow

1. **Initial Render:** React executes the component for the first time.
2. **Initial State:** `useState(0)` initializes the state with 0.
3. **User Interaction:** The user clicks the button.
4. **State Update:** `setCount(count + 1)` requests an update.
5. **Re-render:** React executes the component function again.
6. **Updated State:** React provides the updated state value.
7. **UI Update:** React compares the new result with the previous one and commits the necessary DOM changes.

### Re-rendering Flow

```text
Component Function Executes
          |
          v
   Initial State (0)
          |
          v
      UI Displays 0
          |
          v
    User Clicks Button
          |
          v
    setCount(count + 1)
          |
          v
   React Schedules Update
          |
          v
      Re-rendering
          |
          v
 Component Executes Again
          |
          v
   Updated State (1)
          |
          v
     UI Displays 1
```

### Does the Entire Component Execute Again?

Yes!

Whenever a component re-renders, its function executes again from top to bottom.

Example:

```jsx
function Counter() {

    console.log("Component Rendered");

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Click
            </button>
        </>
    );
}
```

Every time the state changes, the component function executes again.

**Important:** React does not necessarily recreate the entire DOM. It calculates the differences and updates the necessary parts of the DOM.

---

## 5. What Triggers a Re-render?

| Action                             | Re-render?                               |
| ---------------------------------- | ---------------------------------------- |
| State changes                      | Yes, generally                           |
| Props change                       | Yes, generally                           |
| Parent component re-renders        | Child components generally re-render too |
| Normal local variable changes      | No                                       |
| State is updated to the same value | React can skip the re-render             |

### State vs Normal Variables

**Normal Variable:**

```jsx
let count = 0;

function increment() {
    count++;
}
```

Changing `count` does not tell React to update the UI.

**State Variable:**

```jsx
const [count, setCount] = useState(0);

function increment() {
    setCount(count + 1);
}
```

Updating state tells React that the component may need to render again.

---

## 6. Important Concept: State Updates Are Not Immediate

Calling a state setter does not immediately change the state variable in the currently executing function.

Example:

```jsx
const [count, setCount] = useState(0);

function handleClick() {
    setCount(count + 1);

    console.log(count);
}
```

The console prints `0` during the first click, even though an update to `1` has been requested.

Why?

Because the current render's `count` value remains unchanged. The updated value is available in the next render.

### Multiple State Updates

Consider:

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
```

If the current count is 0, all three calls use the same value from the current render.

The resulting count is 1, not 3.

To increment three times correctly:

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Now the resulting count is 3.

---

## 7. Key Takeaways

- **State:** Stores data that can change inside a component.
- **Hooks:** Special React functions that provide access to React features.
- **useState:** A Hook used to create and update component state.
- **Re-rendering:** React executes the component function again to calculate the updated UI.
- **State Setter:** Requests a state update and schedules rendering when necessary.
- **DOM Update:** React commits the necessary changes instead of blindly recreating the entire DOM.
- **Functional Updater:** Useful when the next state depends on the previous state.

## Conclusion

React uses state to make components dynamic. Hooks allow functional components to use React features, and `useState` helps manage changing data.

When state changes, React schedules a re-render, executes the component again, and updates the necessary parts of the UI.

**The core concept: State Change → Re-render → UI Update.**
