import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 11,
        "question": "How can you customize serialization logic in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Implement a custom normalizer class"},
            {"id": 2, "text": "Use the `SerializerContextBuilder` to modify context dynamically"},
            {"id": 3, "text": "Override the default serialization group in resource configuration"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://api-platform.com/docs/core/serialization/"
    },
    {
        "id": 12,
        "question": "What is the role of the `StateProvider` interface in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Fetches the data for specific API requests"},
            {"id": 2, "text": "Handles pagination for resources"},
            {"id": 3, "text": "Secures data based on user roles"},
            {"id": 4, "text": "Overrides default exception handling"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/state-providers/"
    },
    {
        "id": 13,
        "question": "How does API Platform integrate with GraphQL ?",
        "possibleAnswers": [
            {"id": 1, "text": "By automatically generating GraphQL schemas from resource metadata"},
            {"id": 2, "text": "By requiring developers to manually define GraphQL schemas"},
            {"id": 3, "text": "By using an external library for GraphQL integration"},
            {"id": 4, "text": "GraphQL is not supported in API Platform"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/graphql/"
    },
    {
        "id": 14,
        "question": "What is the purpose of `DataTransformers` in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "To transform input data into a domain object"},
            {"id": 2, "text": "To apply validation rules dynamically"},
            {"id": 3, "text": "To override serialization logic"},
            {"id": 4, "text": "To enforce security policies for resources"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/data-transformers/"
    },
    {
        "id": 15,
        "question": "How can you add custom filters to API Platform resources ?",
        "possibleAnswers": [
            {"id": 1, "text": "Use the `@ApiFilter` annotation with a custom filter class"},
            {"id": 2, "text": "Define the filter logic in the `FilterExtension` class"},
            {"id": 3, "text": "Add filter logic to the resource configuration file"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/filters/"
    },
    {
        "id": 25,
        "question": "How can you create a custom `StateProcessor` in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Implement the `StateProcessorInterface` and register it as a service"},
            {"id": 2, "text": "Override the default processor in `services.yaml`"},
            {"id": 3, "text": "Extend the `DefaultProcessor` class in API Platform"},
            {"id": 4, "text": "Use the `@Processor` annotation in the entity"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/state-processors/"
    },
    {
        "id": 26,
        "question": "What is the default pagination strategy in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Offset-based pagination"},
            {"id": 2, "text": "Cursor-based pagination"},
            {"id": 3, "text": "Limit and skip pagination"},
            {"id": 4, "text": "Manual pagination implemented by developers"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/pagination/"
    },
    {
        "id": 33,
        "question": "What is the purpose of the `Mercure` protocol in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Implements real-time updates for resources"},
            {"id": 2, "text": "Handles file uploads via HTTP requests"},
            {"id": 3, "text": "Optimizes API performance using caching"},
            {"id": 4, "text": "Manages GraphQL subscriptions automatically"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/mercure/"
    },
    {
        "id": 34,
        "question": "How can you implement custom pagination logic in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Override the default PaginationExtension class"},
            {"id": 2, "text": "Implement a custom DataProvider for pagination"},
            {"id": 3, "text": "Configure custom pagination options in the resource configuration"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://api-platform.com/docs/core/pagination/"
    },
    {
        "id": 41,
        "question": "How can you override default error messages in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Customize the `ExceptionListener` service"},
            {"id": 2, "text": "Modify error responses using a custom event subscriber"},
            {"id": 3, "text": "Create custom exception handlers for specific errors"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://api-platform.com/docs/core/errors/"
    },
    {
        "id": 42,
        "question": "What does the `Operation` annotation in API Platform specify ?",
        "possibleAnswers": [
            {"id": 1, "text": "Customizes endpoints for specific resources"},
            {"id": 2, "text": "Defines resource security policies"},
            {"id": 3, "text": "Overrides default serialization groups"},
            {"id": 4, "text": "Adds metadata for database queries"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/operations/"
    },
    {
        "id": 49,
        "question": "How does API Platform handle GraphQL subscriptions ?",
        "possibleAnswers": [
            {"id": 1, "text": "Relies on the Mercure protocol for real-time updates"},
            {"id": 2, "text": "Implements polling by default for GraphQL APIs"},
            {"id": 3, "text": "Uses WebSockets exclusively for subscriptions"},
            {"id": 4, "text": "GraphQL subscriptions are not supported"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/graphql/"
    },
    {
        "id": 50,
        "question": "What is the purpose of `IRI (Internationalized Resource Identifier)` in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Represents resource links in a standardized format"},
            {"id": 2, "text": "Validates international API requests"},
            {"id": 3, "text": "Optimizes resource serialization for multilingual APIs"},
            {"id": 4, "text": "Handles encoding for large resource identifiers"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/serialization/#iris-and-references"
    },
    {
        "id": 57,
        "question": "What is the purpose of the `DataPersister` in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Handles the persistence of data into storage (e.g., database)"},
            {"id": 2, "text": "Fetches data for custom resource endpoints"},
            {"id": 3, "text": "Validates incoming requests for API endpoints"},
            {"id": 4, "text": "Applies pagination rules to resource collections"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/data-persisters/"
    },
    {
        "id": 58,
        "question": "How does API Platform handle custom serialization groups ?",
        "possibleAnswers": [
            {"id": 1, "text": "Define groups in entity attributes and reference them in operations"},
            {"id": 2, "text": "Create custom normalizers for group-specific serialization logic"},
            {"id": 3, "text": "Use the `SerializerContextBuilder` for dynamic groups"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://api-platform.com/docs/core/serialization/#using-serialization-groups"
    },
    {
        "id": 65,
        "question": "How does API Platform handle request validation ?",
        "possibleAnswers": [
            {"id": 1, "text": "Uses Symfony's Validator component to validate incoming data"},
            {"id": 2, "text": "Relies on Doctrine ORM annotations for validation"},
            {"id": 3, "text": "Implements custom validation logic in controllers"},
            {"id": 4, "text": "Validation is not supported in API Platform"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/validation/"
    },
    {
        "id": 66,
        "question": "What is the purpose of the `@ApiProperty` annotation in API Platform ?",
        "possibleAnswers": [
            {"id": 1, "text": "Customizes metadata for a property in the resource"},
            {"id": 2, "text": "Defines security rules for resource properties"},
            {"id": 3, "text": "Overrides the default serialization group for a property"},
            {"id": 4, "text": "Specifies caching strategies for resource properties"}
        ],
        "rightAnswer": [1],
        "source": "https://api-platform.com/docs/core/properties/"
    }
]

