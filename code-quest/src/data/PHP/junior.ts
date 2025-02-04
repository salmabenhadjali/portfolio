import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 1,
        "question": "What is the main purpose of the `match` expression in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "To replace `switch` statements with a concise syntax"},
            {"id": 2, "text": "To handle database transactions"},
            {"id": 3, "text": "To provide runtime error handling"},
            {"id": 4, "text": "To create array maps"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 2,
        "question": "Which feature was introduced in PHP 8 for type declarations?",
        "possibleAnswers": [
            {"id": 1, "text": "Union Types"},
            {"id": 2, "text": "JIT Compilation"},
            {"id": 3, "text": "Named Parameters"},
            {"id": 4, "text": "Arrow Functions"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/language.types.declarations.php"
    },
    {
        "id": 6,
        "question": "What is the purpose of attributes in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "To define class inheritance"},
            {"id": 2, "text": "To add metadata to classes, functions, and properties"},
            {"id": 3, "text": "To handle database transactions"},
            {"id": 4, "text": "To create array maps"}
        ],
        "rightAnswer": [2],
        "source": "https://www.php.net/manual/en/language.attributes.php"
    },
    {
        "id": 7,
        "question": "What does the JIT compiler introduced in PHP 8 do?",
        "possibleAnswers": [
            {"id": 1, "text": "Compiles PHP scripts into machine code at runtime"},
            {"id": 2, "text": "Caches script execution results"},
            {"id": 3, "text": "Reduces memory usage of scripts"},
            {"id": 4, "text": "Validates types at runtime"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 14,
        "question": "What is the purpose of `named arguments` in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "To specify arguments by name instead of position"},
            {"id": 2, "text": "To improve variable scoping in closures"},
            {"id": 3, "text": "To enforce strict typing on arguments"},
            {"id": 4, "text": "To support multiple constructors in a class"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 15,
        "question": "What does `static return type` in PHP 8 allow?",
        "possibleAnswers": [
            {"id": 1, "text": "Returning the same instance of the called class"},
            {"id": 2, "text": "Forcing a method to always return a static value"},
            {"id": 3, "text": "Declaring a method as unchangeable"},
            {"id": 4, "text": "Specifying a type that can never be null"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/migration80.new-features.php"
    },
    {
        "id": 22,
        "question": "What is the purpose of the `WeakMap` class introduced in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "To hold references to objects without preventing their garbage collection"},
            {"id": 2, "text": "To create maps with weak keys"},
            {"id": 3, "text": "To enable strict typing for arrays"},
            {"id": 4, "text": "To cache database queries"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/class.weakmap.php"
    },
    {
        "id": 23,
        "question": "Which operator in PHP 8 is used for null-safe calls?",
        "possibleAnswers": [
            {"id": 1, "text": "??"},
            {"id": 2, "text": "?:?"},
            {"id": 3, "text": "?->"},
            {"id": 4, "text": "->?"}
        ],
        "rightAnswer": [3],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 30,
        "question": "What is the `str_contains` function introduced in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "Checks if a string starts with a specific substring"},
            {"id": 2, "text": "Checks if a string contains a specific substring"},
            {"id": 3, "text": "Replaces a substring within a string"},
            {"id": 4, "text": "Splits a string by a specific character"}
        ],
        "rightAnswer": [2],
        "source": "https://www.php.net/manual/en/function.str-contains.php"
    },
    {
        "id": 31,
        "question": "Which of the following is a new class introduced in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "Stringable"},
            {"id": 2, "text": "Traversable"},
            {"id": 3, "text": "Iterator"},
            {"id": 4, "text": "Arrayable"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/class.stringable.php"
    },
    {
        "id": 38,
        "question": "What does the `fdiv` function introduced in PHP 8 do?",
        "possibleAnswers": [
            {"id": 1, "text": "Performs division and returns Infinity or NaN when applicable"},
            {"id": 2, "text": "Returns a rounded result of division"},
            {"id": 3, "text": "Throws an exception for division by zero"},
            {"id": 4, "text": "Performs floor division"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/function.fdiv.php"
    },
    {
        "id": 39,
        "question": "What is the `throw` expression in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "A shorthand for returning exceptions"},
            {"id": 2, "text": "Allows throwing exceptions in expressions"},
            {"id": 3, "text": "Enables throwing errors instead of exceptions"},
            {"id": 4, "text": "Is used for logging exceptions"}
        ],
        "rightAnswer": [2],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 46,
        "question": "What is the purpose of the `get_debug_type` function in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "Returns the type of a variable as a string"},
            {"id": 2, "text": "Logs debug information to a file"},
            {"id": 3, "text": "Checks if debugging is enabled"},
            {"id": 4, "text": "Adds type declarations to variables"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/function.get-debug-type.php"
    },
    {
        "id": 47,
        "question": "What does the `resource` data type refer to in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "A type representing external resources such as files or database connections"},
            {"id": 2, "text": "A type used for handling large datasets"},
            {"id": 3, "text": "A special type for managing memory efficiently"},
            {"id": 4, "text": "A replacement for the object type"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/language.types.resource.php"
    }
]