import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 52,
        "question": "What does the `key` prop in React do?",
        "possibleAnswers": [
            {"id": 1, "text": "Identifies unique elements in a list for efficient re-rendering"},
            {"id": 2, "text": "Enables secure authentication between components"},
            {"id": 3, "text": "Defines default values for child components"},
            {"id": 4, "text": "Handles state management for lists"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/lists-and-keys.html"
    },
    {
        "id": 53,
        "question": "What does `useLayoutEffect` in React do?",
        "possibleAnswers": [
            {"id": 1, "text": "Fires synchronously after all DOM mutations"},
            {"id": 2, "text": "Runs asynchronously to handle side effects"},
            {"id": 3, "text": "Updates component styles dynamically"},
            {"id": 4, "text": "Handles browser events efficiently"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#uselayouteffect"
    },
    {
        "id": 44,
        "question": "What is the `React.StrictMode` component used for?",
        "possibleAnswers": [
            {"id": 1, "text": "To prevent React components from rendering outside a div"},
            {"id": 2, "text": "To detect potential problems in an application during development"},
            {"id": 3, "text": "To enhance server-side rendering performance"},
            {"id": 4, "text": "To optimize state updates in React components"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/strict-mode.html"
    },
    {
        "id": 45,
        "question": "What does `React.forwardRef` do?",
        "possibleAnswers": [
            {"id": 1, "text": "Creates a ref that persists across renders"},
            {"id": 2, "text": "Passes refs to child components"},
            {"id": 3, "text": "Handles DOM mutations in functional components"},
            {"id": 4, "text": "Optimizes memoized components"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/forwarding-refs.html"
    },
    {
        "id": 36,
        "question": "What is `useCallback` used for in React?",
        "possibleAnswers": [
            {"id": 1, "text": "To memoize a function and prevent unnecessary re-creations"},
            {"id": 2, "text": "To handle side effects in a functional component"},
            {"id": 3, "text": "To manage state in a component"},
            {"id": 4, "text": "To optimize rendering performance for lists"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-reference.html#usecallback"
    },
    {
        "id": 37,
        "question": "What is a `Fragment` in React?",
        "possibleAnswers": [
            {"id": 1, "text": "A way to handle rendering errors in components"},
            {"id": 2, "text": "A lightweight component for returning multiple elements without a parent wrapper"},
            {"id": 3, "text": "A component to conditionally load libraries"},
            {"id": 4, "text": "A new lifecycle method for functional components"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/fragments.html"
    },
    {
        "id": 12,
        "question": "Which hook is used to manage local state in React components?",
        "possibleAnswers": [
            {"id": 1, "text": "useState"},
            {"id": 2, "text": "useEffect"},
            {"id": 3, "text": "useReducer"},
            {"id": 4, "text": "useMemo"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/hooks-state.html"
    },
    {
        "id": 13,
        "question": "What is the purpose of the Context API in React?",
        "possibleAnswers": [
            {"id": 1, "text": "To manage global state across components"},
            {"id": 2, "text": "To replace Redux for state management"},
            {"id": 3, "text": "To handle side effects in components"},
            {"id": 4, "text": "To optimize rendering performance"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/context.html"
    },
    {
        "id": 20,
        "question": "What does `useEffect` in React allow you to do?",
        "possibleAnswers": [
            {"id": 1, "text": "Manipulate the DOM directly"},
            {"id": 2, "text": "Handle side effects in functional components"},
            {"id": 3, "text": "Share state across components"},
            {"id": 4, "text": "Optimize rendering performance"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/hooks-effect.html"
    },
    {
        "id": 21,
        "question": "How is state updated in a React functional component using `useReducer`?",
        "possibleAnswers": [
            {"id": 1, "text": "Directly modifying the state object"},
            {"id": 2, "text": "Using the reducer function and dispatch method"},
            {"id": 3, "text": "Calling a global state manager"},
            {"id": 4, "text": "Using the setState function"}
        ],
        "rightAnswer": [2],
        "source": "https://reactjs.org/docs/hooks-reference.html#usereducer"
    },
    {
        "id": 28,
        "question": "What is the purpose of the `React.memo` function?",
        "possibleAnswers": [
            {"id": 1, "text": "To optimize functional components by memoizing their output"},
            {"id": 2, "text": "To manage global state in React applications"},
            {"id": 3, "text": "To create higher-order components"},
            {"id": 4, "text": "To memoize the state updates in a reducer"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/react-api.html#reactmemo"
    },
    {
        "id": 29,
        "question": "Which method is used to lazy-load components in React?",
        "possibleAnswers": [
            {"id": 1, "text": "React.lazy"},
            {"id": 2, "text": "React.defer"},
            {"id": 3, "text": "React.memo"},
            {"id": 4, "text": "React.async"}
        ],
        "rightAnswer": [1],
        "source": "https://reactjs.org/docs/code-splitting.html#reactlazy"
    }
]