import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 1,
        "question": "How does PHP 8's JIT (Just-In-Time) compilation improve performance?",
        "possibleAnswers": [
            {"id": 1, "text": "Compiles code during runtime to machine code"},
            {"id": 2, "text": "Caches PHP scripts automatically"},
            {"id": 3, "text": "Reduces memory usage"},
            {"id": 4, "text": "Eliminates the need for type declarations"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 2,
        "question": "What does the `match` expression return in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "A boolean value"},
            {"id": 2, "text": "The value of the first matching condition"},
            {"id": 3, "text": "An array of all matches"},
            {"id": 4, "text": "A compiled string"}
        ],
        "rightAnswer": [2],
        "source": "https://www.php.net/manual/en/control-structures.match.php"
    },
    {
        "id": 3,
        "question": "What does the `str_ends_with` function in PHP 8 check?",
        "possibleAnswers": [
            {"id": 1, "text": "If a string ends with a specific substring"},
            {"id": 2, "text": "If a string contains a specific substring"},
            {"id": 3, "text": "If a string starts with a specific substring"},
            {"id": 4, "text": "If a string has a certain length"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/function.str-ends-with.php"
    },
    {
        "id": 4,
        "question": "What is the purpose of the `WeakMap` class in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "To hold references to objects without preventing their garbage collection"},
            {"id": 2, "text": "To map values to array keys efficiently"},
            {"id": 3, "text": "To perform weak type comparisons"},
            {"id": 4, "text": "To support memory caching in scripts"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/class.weakmap.php"
    },
    {
        "id": 5,
        "question": "What improvement does `named arguments` in PHP 8 provide?",
        "possibleAnswers": [
            {"id": 1, "text": "Specify arguments by name instead of position"},
            {"id": 2, "text": "Create immutable variables"},
            {"id": 3, "text": "Optimize memory usage in loops"},
            {"id": 4, "text": "Prevent type coercion"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 26,
        "question": "What does the `fdiv` function introduced in PHP 8 do?",
        "possibleAnswers": [
            {"id": 1, "text": "Performs division and returns Infinity or NaN when applicable"},
            {"id": 2, "text": "Returns the floor of the division result"},
            {"id": 3, "text": "Throws an exception for division by zero"},
            {"id": 4, "text": "Handles floating-point division precisely"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/function.fdiv.php"
    },
    {
        "id": 27,
        "question": "What is the purpose of the `Stringable` interface in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "Ensures that a class can be converted to a string"},
            {"id": 2, "text": "Improves string manipulation performance"},
            {"id": 3, "text": "Prevents type coercion of strings"},
            {"id": 4, "text": "Enforces immutability in strings"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/class.stringable.php"
    },
    {
        "id": 34,
        "question": "What is the purpose of the `nullsafe operator` (`?->`) in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "Checks if an object is null before accessing its property or method"},
            {"id": 2, "text": "Replaces null values with a default string"},
            {"id": 3, "text": "Converts null to an empty array"},
            {"id": 4, "text": "Handles null exceptions during runtime"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 35,
        "question": "Which PHP 8 feature improves error handling in expressions?",
        "possibleAnswers": [
            {"id": 1, "text": "Match expressions"},
            {"id": 2, "text": "Named arguments"},
            {"id": 3, "text": "Union types"},
            {"id": 4, "text": "Throw expressions"}
        ],
        "rightAnswer": [4],
        "source": "https://www.php.net/releases/8.0/en.php"
    },
    {
        "id": 42,
        "question": "What is the purpose of `get_debug_type` in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "Returns the type of a variable in a human-readable format"},
            {"id": 2, "text": "Logs debug information to a file"},
            {"id": 3, "text": "Checks if debugging is enabled in the current script"},
            {"id": 4, "text": "Enables type enforcement for variables"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/function.get-debug-type.php"
    },
    {
        "id": 43,
        "question": "What is the difference between `include` and `require` in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "`require` stops execution on failure, while `include` does not"},
            {"id": 2, "text": "`include` is used for importing libraries, while `require` is not"},
            {"id": 3, "text": "`require` supports namespaces, while `include` does not"},
            {"id": 4, "text": "There is no difference between them"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/function.include.php"
    },
    {
        "id": 50,
        "question": "What are `union types` in PHP 8?",
        "possibleAnswers": [
            {"id": 1, "text": "A feature to declare multiple allowed types for a variable or parameter"},
            {"id": 2, "text": "A way to combine multiple arrays into one"},
            {"id": 3, "text": "A function to merge namespaces"},
            {"id": 4, "text": "A shorthand for type coercion"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/language.types.declarations.php#language.types.declarations.union"
    },
    {
        "id": 51,
        "question": "What is the difference between `private` and `protected` visibility in PHP?",
        "possibleAnswers": [
            {"id": 1, "text": "`protected` allows access from child classes, while `private` does not"},
            {"id": 2, "text": "`private` is faster to access than `protected`"},
            {"id": 3, "text": "`protected` restricts access to the same class only"},
            {"id": 4, "text": "There is no difference"}
        ],
        "rightAnswer": [1],
        "source": "https://www.php.net/manual/en/language.oop5.visibility.php"
    }
]