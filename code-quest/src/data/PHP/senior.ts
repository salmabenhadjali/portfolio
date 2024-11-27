import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 1,
        "question": "What is the purpose of the SPL in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "Provides a set of predefined interfaces and classes for common tasks"},
            {"id": 2, "text": "Defines the structure of the PHP core libraries"},
            {"id": 3, "text": "Optimizes execution of PHP scripts"},
            {"id": 4, "text": "Allows dynamic code execution at runtime"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/book.spl.php"
    },
    {
        "id": 2,
        "question": "How does the `__invoke` magic method work in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "Allows objects to be called as functions"},
            {"id": 2, "text": "Defines the behavior of `isset` on an object"},
            {"id": 3, "text": "Enables serialization of objects"},
            {"id": 4, "text": "Handles custom type casting"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/language.oop5.magic.php#object.invoke"
    },
    {
        "id": 3,
        "question": "What is the purpose of the `__serialize` and `__unserialize` magic methods?",
        "possibleAnswers": [
            {"id": 1, "text": "Handle custom serialization and deserialization of objects"},
            {"id": 2, "text": "Optimize the serialization process for performance"},
            {"id": 3, "text": "Replace the existing `serialize` function in PHP"},
            {"id": 4, "text": "Manage encryption during serialization"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/language.oop5.magic.php#object.serialize"
    },
    {
        "id": 4,
        "question": "What does the `SplObserver` interface in PHP do?",
        "possibleAnswers": [
            {"id": 1, "text": "Implements the Observer pattern to monitor changes in subjects"},
            {"id": 2, "text": "Handles events in an asynchronous context"},
            {"id": 3, "text": "Manages logging and debugging in real-time"},
            {"id": 4, "text": "Monitors database changes"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/class.splobserver.php"
    },
    {
        "id": 5,
        "question": "What is the difference between `final` and `abstract` classes in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "`final` classes cannot be extended, while `abstract` classes cannot be instantiated"},
            {"id": 2, "text": "`final` classes must have final methods, while `abstract` classes do not"},
            {"id": 3, "text": "`final` classes cannot have abstract methods"},
            {"id": 4, "text": "There is no difference between `final` and `abstract` classes"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/language.oop5.final.php"
    },
    {
        "id": 21,
        "question": "What is the purpose of the `WeakReference` class in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "Allows referencing objects without preventing their destruction by garbage collection"},
            {"id": 2, "text": "Provides a thread-safe way to manage object references"},
            {"id": 3, "text": "Enables lazy loading of properties"},
            {"id": 4, "text": "Stores immutable references to variables"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/class.weakreference.php"
    },
    {
        "id": 22,
        "question": "How does PHP 8's JIT compilation enhance performance?",
        "possibleAnswers": [
            {"id": 1, "text": "Compiles PHP code to machine code at runtime"},
            {"id": 2, "text": "Caches script execution results"},
            {"id": 3, "text": "Reduces memory usage of variables"},
            {"id": 4, "text": "Replaces the PHP interpreter with native code"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 29,
        "question": "What is the purpose of attributes introduced in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "Provide metadata for classes, methods, and properties"},
            {"id": 2, "text": "Enable runtime type validation"},
            {"id": 3, "text": "Replace PHPDoc annotations"},
            {"id": 4, "text": "Optimize script execution performance"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/language.attributes.overview.php"
    },
    {
        "id": 30,
        "question": "What does the `fdiv` function in PHP 8 do?",
        "possibleAnswers": [
            {"id": 1, "text": "Performs floating-point division and returns `INF`, `-INF`, or `NaN` for special cases"},
            {"id": 2, "text": "Performs integer division only"},
            {"id": 3, "text": "Throws an exception for division by zero"},
            {"id": 4, "text": "Rounds the result of floating-point division"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/function.fdiv.php"
    },
    {
        "id": 37,
        "question": "What is the purpose of the `ReflectionClass` in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "Provides introspection capabilities for classes, methods, and properties"},
            {"id": 2, "text": "Improves performance by caching class metadata"},
            {"id": 3, "text": "Handles serialization and deserialization of objects"},
            {"id": 4, "text": "Manages dynamic method calls at runtime"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/class.reflectionclass.php"
    },
    {
        "id": 38,
        "question": "What does the `named arguments` feature in PHP 8 allow?",
        "possibleAnswers": [
            {"id": 1, "text": "Passing arguments to functions by specifying their names instead of their order"},
            {"id": 2, "text": "Defining named constants for arguments"},
            {"id": 3, "text": "Creating immutable arguments in methods"},
            {"id": 4, "text": "Automatically validating argument types"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 45,
        "question": "What is the purpose of the `SplPriorityQueue` class in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "Manages a priority queue, allowing elements to be ordered by priority"},
            {"id": 2, "text": "Handles thread-safe operations on arrays"},
            {"id": 3, "text": "Caches prioritized API requests"},
            {"id": 4, "text": "Optimizes sorting of multidimensional arrays"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/class.splpriorityqueue.php"
    },
    {
        "id": 46,
        "question": "What is the advantage of `constructor property promotion` in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "Reduces boilerplate code by defining and initializing properties in the constructor"},
            {"id": 2, "text": "Ensures strict typing for constructor parameters"},
            {"id": 3, "text": "Improves performance by pre-compiling constructors"},
            {"id": 4, "text": "Adds default values to all class properties automatically"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 53,
        "question": "What is the purpose of the `SplDoublyLinkedList` class in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "Implements a doubly linked list to traverse elements in both directions"},
            {"id": 2, "text": "Handles asynchronous operations for data structures"},
            {"id": 3, "text": "Optimizes queue management in PHP scripts"},
            {"id": 4, "text": "Provides caching mechanisms for large datasets"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/class.spldoublylinkedlist.php"
    },
    {
        "id": 54,
        "question": "What are union types in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "Allow specifying multiple types for a variable or parameter"},
            {"id": 2, "text": "Merge multiple arrays into a single structure"},
            {"id": 3, "text": "Combine namespaces into a unified namespace"},
            {"id": 4, "text": "Enable dynamic type casting during runtime"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.union"
    },
    {
        "id": 61,
        "question": "What is the role of the `Generator` class in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "Implements iterators for generating values on demand using `yield`"},
            {"id": 2, "text": "Generates unique IDs for database records"},
            {"id": 3, "text": "Manages asynchronous requests in PHP"},
            {"id": 4, "text": "Handles thread-safe operations in multi-threaded environments"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/class.generator.php"
    },
    {
        "id": 62,
        "question": "What is the purpose of the `error_get_last` function in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "Returns the last error that occurred during script execution"},
            {"id": 2, "text": "Handles exceptions in a global context"},
            {"id": 3, "text": "Clears the last error from memory"},
            {"id": 4, "text": "Logs the last error to a file"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/function.error-get-last.php"
    }
]