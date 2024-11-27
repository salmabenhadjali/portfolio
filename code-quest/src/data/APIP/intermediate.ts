import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 11,
        "question": "What is the purpose of Data Transformers in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "To transform data from API requests into domain objects"},
            {"id": 2, "text": "To modify API routes dynamically"},
            {"id": 3, "text": "To optimize serialization performance"},
            {"id": 4, "text": "To secure resources based on user roles"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/data-transformers/"
    },
    {
        "id": 12,
        "question": "How does API Platform handle subresources ?",
        "possibleAnswers": [
            {"id": 1, "text": "Using `@Subresource` annotation"},
            {"id": 2, "text": "By defining them in the resource configuration"},
            {"id": 3, "text": "Through a dedicated controller"},
            {"id": 4, "text": "Subresources are not supported"}
        ],
        "rightAnswer": [2],
        "source": "https://api-platform.com/docs/core/subresources/"
    },
    {
        "id": 13,
        "question": "What is a recommended way to secure API endpoints in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Using custom voters for authorization"},
            {"id": 2, "text": "Implementing JWT authentication"},
            {"id": 3, "text": "Enforcing HTTPS connections"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://api-platform.com/docs/core/security/"
    },
    {
        "id": 14,
        "question": "What does the `@ApiFilter` annotation in API Platform do ?",
        "possibleAnswers": [
            {"id": 1, "text": "Applies filters to API routes based on the user's role"},
            {"id": 2, "text": "Defines query parameters for filtering resource collections"},
            {"id": 3, "text": "Validates user input on filtered resources"},
            {"id": 4, "text": "Overrides default pagination settings"}
        ],
        "rightAnswer": [2],
        "source": "https://api-platform.com/docs/core/filters/"
    },
    {
        "id": 15,
        "question": "How can you add a custom GraphQL query in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Use the `@GraphQLQuery` annotation in resource definitions"},
            {"id": 2, "text": "Extend the default GraphQL schema generator"},
            {"id": 3, "text": "Add a custom query resolver to the GraphQL configuration"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://api-platform.com/docs/core/graphql/"
    },
    {
        "id": 30,
        "question": "How does API Platform handle pagination by default ?",
        "possibleAnswers": [
            {"id": 1, "text": "Uses offset-based pagination with `page` and `itemsPerPage` parameters"},
            {"id": 2, "text": "Implements cursor-based pagination only"},
            {"id": 3, "text": "Requires manual implementation in controllers"},
            {"id": 4, "text": "Pagination is disabled by default"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/pagination/"
    },
    {
        "id": 31,
        "question": "What is the purpose of the `SerializerContextBuilder` in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "To add custom serialization logic for specific API operations"},
            {"id": 2, "text": "To configure resource security settings"},
            {"id": 3, "text": "To customize GraphQL schema generation"},
            {"id": 4, "text": "To override default error responses"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/serialization/"
    },
    {
        "id": 38,
        "question": "What is the purpose of custom `ItemDataProviders` in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "To provide data for individual resources from custom sources"},
            {"id": 2, "text": "To manage pagination for large collections"},
            {"id": 3, "text": "To secure resources based on user roles"},
            {"id": 4, "text": "To handle serialization for specific resources"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/data-providers/"
    },
    {
        "id": 39,
        "question": "How can you customize error responses in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "By creating a custom exception handler"},
            {"id": 2, "text": "Using the `ApiExceptionListener`"},
            {"id": 3, "text": "Modifying the default error template in Twig"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/errors/"
    },
    {
        "id": 46,
        "question": "What is the primary purpose of the GraphQL support in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "To provide a flexible querying interface for API clients"},
            {"id": 2, "text": "To enforce strict type validation on requests"},
            {"id": 3, "text": "To handle file uploads in APIs"},
            {"id": 4, "text": "To improve API performance automatically"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/graphql/"
    },
    {
        "id": 47,
        "question": "How do you implement custom pagination logic in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Override the default PaginationExtension"},
            {"id": 2, "text": "Create a custom `DataProvider` with pagination logic"},
            {"id": 3, "text": "Modify the `pagination` configuration in `services.yaml`"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/pagination/"
    },
    {
        "id": 54,
        "question": "What is the role of custom `Operation` configurations in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "To customize the methods and paths for specific endpoints"},
            {"id": 2, "text": "To enforce additional security rules on resources"},
            {"id": 3, "text": "To override default serialization logic"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/operations/"
    },
    {
        "id": 55,
        "question": "Which cache layer does API Platform integrate with by default ?",
        "possibleAnswers": [
            {"id": 1, "text": "HTTP Cache with Varnish"},
            {"id": 2, "text": "Database query cache"},
            {"id": 3, "text": "Symfony's File Cache"},
            {"id": 4, "text": "Redis Cache"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/performance/"
    }
]