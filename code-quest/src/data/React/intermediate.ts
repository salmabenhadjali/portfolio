import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 16,
        "question": "What is the purpose of `useReducer` in React?",
        "possibleAnswers": [
            {"id": 1, "text": "To optimize component re-renders"},
            {"id": 2, "text": "To handle complex state logic in functional components"},
            {"id": 3, "text": "To replace Redux for state management"},
            {"id": 4, "text": "To create side effects in components"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/hooks-reference.html#usereducer"
    },
    {
        "id": 17,
        "question": "What is the Context API primarily used for in React?",
        "possibleAnswers": [
            {"id": 1, "text": "Managing component-specific state"},
            {"id": 2, "text": "Sharing global state across the component tree"},
            {"id": 3, "text": "Optimizing rendering performance"},
            {"id": 4, "text": "Creating reusable components"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/context.html"
    },
    {
        "id": 18,
        "question": "What does `useEffect` in React handle?",
        "possibleAnswers": [
            {"id": 1, "text": "State management across components"},
            {"id": 2, "text": "Side effects in functional components, such as data fetching"},
            {"id": 3, "text": "Component re-renders"},
            {"id": 4, "text": "Updating global variables"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/hooks-effect.html"
    },
    {
        "id": 19,
        "question": "What does the `React.memo` function do?",
        "possibleAnswers": [
            {"id": 1, "text": "Memoizes a functional component to prevent unnecessary re-renders"},
            {"id": 2, "text": "Creates global state variables"},
            {"id": 3, "text": "Optimizes server-side rendering in React apps"},
            {"id": 4, "text": "Handles lifecycle methods in functional components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/react-api.html#reactmemo"
    },
    {
        "id": 20,
        "question": "Which method is used to lazy-load components in React?",
        "possibleAnswers": [
            {"id": 1, "text": "React.lazy"},
            {"id": 2, "text": "React.defer"},
            {"id": 3, "text": "React.memo"},
            {"id": 4, "text": "React.async"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/code-splitting.html#reactlazy"
    },
    {
        "id": 21,
        "question": "What does `React.StrictMode` do?",
        "possibleAnswers": [
            {"id": 1, "text": "Prevents rendering of duplicate components"},
            {"id": 2, "text": "Identifies potential problems in an application during development"},
            {"id": 3, "text": "Optimizes rendering performance for production builds"},
            {"id": 4, "text": "Adds strict typing to React components"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/strict-mode.html"
    },
    {
        "id": 22,
        "question": "What is the purpose of `React.forwardRef`?",
        "possibleAnswers": [
            {"id": 1, "text": "Creates a new reference for DOM nodes"},
            {"id": 2, "text": "Passes a reference to a child component"},
            {"id": 3, "text": "Handles asynchronous rendering of components"},
            {"id": 4, "text": "Manages state for deeply nested components"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/forwarding-refs.html"
    },
    {
        "id": 23,
        "question": "What is the purpose of `useCallback` in React?",
        "possibleAnswers": [
            {"id": 1, "text": "To memoize functions to avoid unnecessary re-creation on re-renders"},
            {"id": 2, "text": "To cache React components for better performance"},
            {"id": 3, "text": "To handle asynchronous state updates"},
            {"id": 4, "text": "To improve rendering performance of large lists"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#usecallback"
    },
    {
        "id": 24,
        "question": "What does the `key` prop in React help with?",
        "possibleAnswers": [
            {"id": 1, "text": "Identifying unique elements in a list to improve rendering efficiency"},
            {"id": 2, "text": "Enabling communication between sibling components"},
            {"id": 3, "text": "Optimizing component state updates"},
            {"id": 4, "text": "Preventing re-renders of parent components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/lists-and-keys.html"
    },
    {
        "id": 25,
        "question": "What does `useLayoutEffect` do in React?",
        "possibleAnswers": [
            {"id": 1, "text": "Executes side effects synchronously after DOM mutations"},
            {"id": 2, "text": "Executes side effects asynchronously after rendering"},
            {"id": 3, "text": "Handles browser window resizing"},
            {"id": 4, "text": "Improves rendering efficiency in child components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#uselayouteffect"
    },
    {
        "id": 32,
        "question": "What does the `Suspense` component in React handle?",
        "possibleAnswers": [
            {"id": 1, "text": "Manages asynchronous rendering for lazy-loaded components"},
            {"id": 2, "text": "Adds suspenseful animations to component transitions"},
            {"id": 3, "text": "Optimizes state updates in React hooks"},
            {"id": 4, "text": "Handles lifecycle methods in functional components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/concurrent-mode-suspense.html"
    },
    {
        "id": 33,
        "question": "How is server-side rendering (SSR) implemented in React?",
        "possibleAnswers": [
            {"id": 1, "text": "Using `ReactDOM.render()` on the server"},
            {"id": 2, "text": "Using `ReactDOMServer.renderToString()` or `renderToNodeStream()`"},
            {"id": 3, "text": "Calling `useSSR()` within functional components"},
            {"id": 4, "text": "React does not support server-side rendering"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/react-dom-server.html"
    },
    {
        "id": 40,
        "question": "What is the role of `PropTypes` in React?",
        "possibleAnswers": [
            {"id": 1, "text": "To validate the props passed to a component"},
            {"id": 2, "text": "To provide default values for component props"},
            {"id": 3, "text": "To improve performance of React hooks"},
            {"id": 4, "text": "To manage component state"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/typechecking-with-proptypes.html"
    },
    {
        "id": 41,
        "question": "What is the purpose of the `ErrorBoundary` component in React?",
        "possibleAnswers": [
            {"id": 1, "text": "To handle errors in rendering, lifecycle methods, and constructors of child components"},
            {"id": 2, "text": "To validate user inputs in forms"},
            {"id": 3, "text": "To optimize server-side rendering"},
            {"id": 4, "text": "To manage asynchronous errors in hooks"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/error-boundaries.html"
    },
    {
        "id": 48,
        "question": "What is `React.lazy` used for?",
        "possibleAnswers": [
            {"id": 1, "text": "Lazy-loading components to improve application performance"},
            {"id": 2, "text": "Caching React components to prevent re-renders"},
            {"id": 3, "text": "Optimizing server-side rendering in React"},
            {"id": 4, "text": "Loading state variables lazily in hooks"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/code-splitting.html#reactlazy"
    },
    {
        "id": 49,
        "question": "What does the `useImperativeHandle` hook do in React?",
        "possibleAnswers": [
            {"id": 1, "text": "Customizes the instance value that is exposed when using refs"},
            {"id": 2, "text": "Updates component state based on a callback"},
            {"id": 3, "text": "Handles side effects in functional components"},
            {"id": 4, "text": "Improves rendering performance for child components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#useimperativehandle"
    },
    {
        "id": 56,
        "question": "What does the `useMemo` hook do in React?",
        "possibleAnswers": [
            {"id": 1, "text": "Caches the result of a calculation to avoid re-computation on re-renders"},
            {"id": 2, "text": "Handles memoization for entire React components"},
            {"id": 3, "text": "Creates a new reference for lazy-loaded components"},
            {"id": 4, "text": "Improves performance for lifecycle methods"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#usememo"
    },
    {
        "id": 57,
        "question": "How can React optimize rendering performance for large lists?",
        "possibleAnswers": [
            {"id": 1, "text": "Using the `React.memo` wrapper"},
            {"id": 2, "text": "Using `React.lazy` for all components"},
            {"id": 3, "text": "Implementing `windowing` with libraries like `react-window`"},
            {"id": 4, "text": "By disabling prop updates for all components"}
        ],
        "rightAnswer": [3],
        "source": "https://reactjs.org/docs/optimizing-performance.html#virtualize-long-lists"
    }
]