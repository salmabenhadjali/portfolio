import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 16,
        "question": "What is the purpose of Redux middleware?",
        "possibleAnswers": [
            {"id": 1, "text": "Handles asynchronous actions in Redux workflows"},
            {"id": 2, "text": "Optimizes rendering performance in Redux components"},
            {"id": 3, "text": "Provides default state for reducers"},
            {"id": 4, "text": "Enables sharing of global state across components"}
        ],
        "rightAnswer": [1],
        "source": "https://redux.js.org/advanced/middleware"
    },
    {
        "id": 17,
        "question": "How can you optimize React components for performance?",
        "possibleAnswers": [
            {"id": 1, "text": "Use `React.memo` to memoize components"},
            {"id": 2, "text": "Avoid unnecessary re-renders with `useCallback` and `useMemo`"},
            {"id": 3, "text": "Use libraries like `react-window` for long lists"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://reactjs.org/docs/optimizing-performance.html"
    },
    {
        "id": 18,
        "question": "What is the purpose of the `useReducer` hook in React?",
        "possibleAnswers": [
            {"id": 1, "text": "To manage complex state logic in functional components"},
            {"id": 2, "text": "To replace `useState` for simple state management"},
            {"id": 3, "text": "To optimize re-renders for large lists"},
            {"id": 4, "text": "To manage global state across multiple components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#usereducer"
    },
    {
        "id": 19,
        "question": "How does `React.Suspense` improve performance?",
        "possibleAnswers": [
            {"id": 1, "text": "By enabling lazy loading of components"},
            {"id": 2, "text": "By caching component state across renders"},
            {"id": 3, "text": "By batching multiple state updates"},
            {"id": 4, "text": "By optimizing server-side rendering"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/concurrent-mode-suspense.html"
    },
    {
        "id": 20,
        "question": "What is the purpose of the `ErrorBoundary` component in React?",
        "possibleAnswers": [
            {"id": 1, "text": "To catch errors in rendering, lifecycle methods, and constructors of child components"},
            {"id": 2, "text": "To handle errors in asynchronous data fetching"},
            {"id": 3, "text": "To replace `try-catch` blocks in functional components"},
            {"id": 4, "text": "To optimize component rendering performance"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/error-boundaries.html"
    },
    {
        "id": 27,
        "question": "What is the purpose of the `useLayoutEffect` hook in React?",
        "possibleAnswers": [
            {"id": 1, "text": "Runs synchronously after DOM updates to ensure layout consistency"},
            {"id": 2, "text": "Runs asynchronously to handle side effects after rendering"},
            {"id": 3, "text": "Handles global state management in functional components"},
            {"id": 4, "text": "Improves rendering performance for deeply nested components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#uselayouteffect"
    },
    {
        "id": 28,
        "question": "What is the purpose of the `React.PureComponent` class?",
        "possibleAnswers": [
            {"id": 1, "text": "Optimizes performance by preventing re-renders for unchanged props or state"},
            {"id": 2, "text": "Creates immutable components"},
            {"id": 3, "text": "Enables server-side rendering in React applications"},
            {"id": 4, "text": "Handles asynchronous data fetching in components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/react-api.html#reactpurecomponent"
    },
    {
        "id": 35,
        "question": "What is the purpose of `useImperativeHandle` in React?",
        "possibleAnswers": [
            {"id": 1, "text": "Customizes the instance value exposed to parent components using refs"},
            {"id": 2, "text": "Handles DOM updates in functional components"},
            {"id": 3, "text": "Improves performance for large state trees"},
            {"id": 4, "text": "Caches API requests in memory"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#useimperativehandle"
    },
    {
        "id": 36,
        "question": "What is the purpose of the `React.StrictMode` component?",
        "possibleAnswers": [
            {"id": 1, "text": "Identifies potential issues in an application during development"},
            {"id": 2, "text": "Improves performance for production builds"},
            {"id": 3, "text": "Prevents duplicate rendering of components"},
            {"id": 4, "text": "Adds additional lifecycle methods for class components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/strict-mode.html"
    },
    {
        "id": 43,
        "question": "How does `React.memo` optimize functional components?",
        "possibleAnswers": [
            {"id": 1, "text": "Prevents unnecessary re-renders by memoizing the rendered output"},
            {"id": 2, "text": "Caches API requests for faster responses"},
            {"id": 3, "text": "Improves performance by batching state updates"},
            {"id": 4, "text": "Handles asynchronous rendering automatically"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/react-api.html#reactmemo"
    },
    {
        "id": 44,
        "question": "What is the purpose of the `Context API` in React?",
        "possibleAnswers": [
            {"id": 1, "text": "Allows sharing state globally across the component tree"},
            {"id": 2, "text": "Handles routing between components"},
            {"id": 3, "text": "Optimizes rendering performance for nested components"},
            {"id": 4, "text": "Validates prop types for child components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/context.html"
    },
    {
        "id": 51,
        "question": "How does `React.lazy` enhance performance?",
        "possibleAnswers": [
            {"id": 1, "text": "Enables code-splitting by loading components only when needed"},
            {"id": 2, "text": "Caches component props for faster rendering"},
            {"id": 3, "text": "Prevents re-renders for unchanged components"},
            {"id": 4, "text": "Handles asynchronous data fetching in functional components"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/code-splitting.html#reactlazy"
    },
    {
        "id": 52,
        "question": "What is the purpose of `useCallback` in React?",
        "possibleAnswers": [
            {"id": 1, "text": "Memoizes functions to prevent unnecessary re-creation during re-renders"},
            {"id": 2, "text": "Caches component state for performance optimization"},
            {"id": 3, "text": "Handles API requests for child components"},
            {"id": 4, "text": "Improves performance for asynchronous data fetching"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#usecallback"
    },
    {
        "id": 59,
        "question": "What is the purpose of `react-window` in React?",
        "possibleAnswers": [
            {"id": 1, "text": "Optimizes rendering for large lists by virtualizing DOM elements"},
            {"id": 2, "text": "Provides an alternative to the Context API for global state"},
            {"id": 3, "text": "Handles animations for list components"},
            {"id": 4, "text": "Caches API responses for improved performance"}
        ],
        "rightAnswer": [1],
        "source": "https://react-window.vercel.app/"
    },
    {
        "id": 60,
        "question": "What is the difference between `useMemo` and `useCallback` in React?",
        "possibleAnswers": [
            {"id": 1, "text": "`useMemo` memoizes values, while `useCallback` memoizes functions"},
            {"id": 2, "text": "`useMemo` handles component state, while `useCallback` manages refs"},
            {"id": 3, "text": "`useMemo` improves performance, while `useCallback` does not"},
            {"id": 4, "text": "There is no difference between `useMemo` and `useCallback`"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#usememo"
    },
    {
        "id": 67,
        "question": "What is the purpose of `React.Portal`?",
        "possibleAnswers": [
            {"id": 1, "text": "Renders children into a DOM node outside the component hierarchy"},
            {"id": 2, "text": "Optimizes rendering for deeply nested components"},
            {"id": 3, "text": "Handles state sharing across components"},
            {"id": 4, "text": "Provides caching for rendered DOM elements"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/portals.html"
    },
    {
        "id": 68,
        "question": "What is the `Recoil` library in React used for?",
        "possibleAnswers": [
            {"id": 1, "text": "Provides state management with fine-grained control over components"},
            {"id": 2, "text": "Improves performance for animations in React applications"},
            {"id": 3, "text": "Optimizes rendering for server-side React components"},
            {"id": 4, "text": "Handles lifecycle methods in class components"}
        ],
        "rightAnswer": [1],
        "source": "https://recoiljs.org/"
    }
]