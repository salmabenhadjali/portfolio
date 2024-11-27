import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 5,
        "question": "Which annotation is used in API Platform to define a resource ?",
        "possibleAnswers": [
            {"id": 1, "text": "@ApiResource"},
            {"id": 2, "text": "@ORM"},
            {"id": 3, "text": "@Entity"},
            {"id": 4, "text": "@Route"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/getting-started/"
    },
    {
        "id": 10,
        "question": "Which protocol is supported by API Platform for real-time communication ?",
        "possibleAnswers": [
            {"id": 1, "text": "WebSockets"},
            {"id": 2, "text": "HTTP/2"},
            {"id": 3, "text": "REST"},
            {"id": 4, "text": "GraphQL"}
        ],
        "rightAnswer": [4],
        "source": "https://api-platform.com/docs/core/graphql/"
    },
    // {
    //     "id": 11,
    //     "question": "What is a recommended approach to securing API endpoints in API Platform ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "Use JWT authentication"},
    //         {"id": 2, "text": "Configure CORS headers"},
    //         {"id": 3, "text": "Validate input data"},
    //         {"id": 4, "text": "All of the above"}
    //     ],
    //     "rightAnswer": [4],
    //     "source": "https://api-platform.com/docs/core/security/"
    // },
    // {
    //     "id": 18,
    //     "question": "Which option is used to expose a custom GraphQL query in API Platform ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "@ApiPlatform\\Query"},
    //         {"id": 2, "text": "@GraphQLQuery"},
    //         {"id": 3, "text": "@CustomQuery"},
    //         {"id": 4, "text": "@Query"}
    //     ],
    //     "rightAnswer": [2],
    //     "source": "https://api-platform.com/docs/core/graphql/"
    // },
    // {
    //     "id": 19,
    //     "question": "How does API Platform handle serialization ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "Using custom normalizers"},
    //         {"id": 2, "text": "With JSON and XML serialization layers"},
    //         {"id": 3, "text": "Through Symfony Serializer"},
    //         {"id": 4, "text": "All of the above"}
    //     ],
    //     "rightAnswer": [4],
    //     "source": "https://api-platform.com/docs/core/serialization/"
    // },
    // {
    //     "id": 26,
    //     "question": "What is a recommended way to handle pagination in API Platform ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "Enable pagination in the configuration file"},
    //         {"id": 2, "text": "Manually implement pagination in controllers"},
    //         {"id": 3, "text": "Use a third-party pagination library"},
    //         {"id": 4, "text": "Pagination is not supported in API Platform"}
    //     ],
    //     "rightAnswer": [1],
    //     "source": "https://api-platform.com/docs/core/pagination/"
    // },
    // {
    //     "id": 27,
    //     "question": "What is the default serialization format in API Platform ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "XML"},
    //         {"id": 2, "text": "JSON"},
    //         {"id": 3, "text": "YAML"},
    //         {"id": 4, "text": "CSV"}
    //     ],
    //     "rightAnswer": [2],
    //     "source": "https://api-platform.com/docs/core/serialization/"
    // },
    // {
    //     "id": 34,
    //     "question": "What is the purpose of Data Providers in API Platform ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "Fetch data from an external source for API consumption"},
    //         {"id": 2, "text": "Transform API request objects into database queries"},
    //         {"id": 3, "text": "Override default serialization methods"},
    //         {"id": 4, "text": "Generate GraphQL schemas automatically"}
    //     ],
    //     "rightAnswer": [1],
    //     "source": "https://api-platform.com/docs/core/data-providers/"
    // },
    // {
    //     "id": 35,
    //     "question": "How does API Platform optimize performance ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "Using caching mechanisms such as HTTP Cache and Varnish"},
    //         {"id": 2, "text": "By lazy-loading all resources"},
    //         {"id": 3, "text": "By enforcing type validation"},
    //         {"id": 4, "text": "None of the above"}
    //     ],
    //     "rightAnswer": [1],
    //     "source": "https://api-platform.com/docs/core/performance/"
    // },
    // {
    //     "id": 42,
    //     "question": "What is the purpose of filters in API Platform ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "To modify responses before sending them"},
    //         {"id": 2, "text": "To add query parameters for filtering data"},
    //         {"id": 3, "text": "To secure resources based on user roles"},
    //         {"id": 4, "text": "To enable GraphQL subscriptions"}
    //     ],
    //     "rightAnswer": [2],
    //     "source": "https://api-platform.com/docs/core/filters/"
    // },
    // {
    //     "id": 43,
    //     "question": "What is the recommended way to override serialization in API Platform ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "Custom normalizers and denormalizers"},
    //         {"id": 2, "text": "Manually editing the response in controllers"},
    //         {"id": 3, "text": "Using middleware layers"},
    //         {"id": 4, "text": "Disabling the default serializer"}
    //     ],
    //     "rightAnswer": [1],
    //     "source": "https://api-platform.com/docs/core/serialization/#custom-normalizers"
    // },
    // {
    //     "id": 50,
    //     "question": "Which annotation is used to customize the operations available for a resource in API Platform ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "@ApiOperation"},
    //         {"id": 2, "text": "@Operation"},
    //         {"id": 3, "text": "@ApiMethod"},
    //         {"id": 4, "text": "@CustomOperation"}
    //     ],
    //     "rightAnswer": [2],
    //     "source": "https://api-platform.com/docs/core/operations/"
    // },
    // {
    //     "id": 51,
    //     "question": "What is the default pagination method used in API Platform ?",
    //     "possibleAnswers": [
    //         {"id": 1, "text": "Offset-based pagination"},
    //         {"id": 2, "text": "Cursor-based pagination"},
    //         {"id": 3, "text": "Limit and skip pagination"},
    //         {"id": 4, "text": "All of the above"}
    //     ],
    //     "rightAnswer": [1],
    //     "source": "https://api-platform.com/docs/core/pagination/"
    // }
]