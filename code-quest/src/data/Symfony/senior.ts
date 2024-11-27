import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 6,
        "question": "How can you create a custom event in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Extend the Event class and register it with the EventDispatcher"},
            {"id": 2, "text": "Use the `@CustomEvent` annotation in the controller"},
            {"id": 3, "text": "Define it in the `services.yaml` file"},
            {"id": 4, "text": "Symfony does not support custom events"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/event_dispatcher.html"
    },
    {
        "id": 7,
        "question": "What is the purpose of the `ExpressionLanguage` component in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Allows using dynamic expressions for security and service configurations"},
            {"id": 2, "text": "Improves debugging performance in applications"},
            {"id": 3, "text": "Simplifies configuration of form types"},
            {"id": 4, "text": "Manages translations dynamically"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/components/expression_language.html"
    },
    {
        "id": 8,
        "question": "What is the main advantage of using Symfony Flex?",
        "possibleAnswers": [
            {"id": 1, "text": "Simplifies project setup and dependency management"},
            {"id": 2, "text": "Improves database migration workflows"},
            {"id": 3, "text": "Provides a GUI for configuring Symfony applications"},
            {"id": 4, "text": "Automatically generates code documentation"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/setup/flex.html"
    },
    {
        "id": 9,
        "question": "How does Symfony's Messenger component handle message retry logic?",
        "possibleAnswers": [
            {"id": 1, "text": "It uses retry strategies defined in `messenger.yaml`"},
            {"id": 2, "text": "It automatically retries messages up to 3 times"},
            {"id": 3, "text": "Retries must be implemented manually"},
            {"id": 4, "text": "Retries are only supported with RabbitMQ"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/messenger.html#failure-handling-and-retries"
    },
    {
        "id": 10,
        "question": "How do you define a custom voter in Symfony Security?",
        "possibleAnswers": [
            {"id": 1, "text": "Create a class that implements `VoterInterface`"},
            {"id": 2, "text": "Extend the `AbstractVoter` class and implement `voteOnAttribute` method"},
            {"id": 3, "text": "Both 1 and 2 are correct"},
            {"id": 4, "text": "Define the voter in the `security.yaml` file"}
        ],
        "rightAnswer": [3],
        "source": "https://symfony.com/doc/current/security/voters.html"
    },
    {
        "id": 23,
        "question": "How can you use the Symfony Profiler for debugging performance?",
        "possibleAnswers": [
            {"id": 1, "text": "Analyze database queries and execution times"},
            {"id": 2, "text": "Monitor HTTP request and response details"},
            {"id": 3, "text": "Track events and service usage"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://symfony.com/doc/current/profiler.html"
    },
    {
        "id": 24,
        "question": "What is the purpose of custom kernel events in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "To extend the lifecycle of an HTTP request/response"},
            {"id": 2, "text": "To log application events for debugging"},
            {"id": 3, "text": "To handle form submission logic dynamically"},
            {"id": 4, "text": "To secure endpoints with advanced filters"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/event_dispatcher.html"
    },
    {
        "id": 31,
        "question": "What is the purpose of the `HttpKernel` component in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Manages the request-response lifecycle of an application"},
            {"id": 2, "text": "Handles database transactions in Doctrine ORM"},
            {"id": 3, "text": "Optimizes application performance by caching responses"},
            {"id": 4, "text": "Processes command-line input in Symfony applications"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/components/http_kernel.html"
    },
    {
        "id": 32,
        "question": "What is the advantage of using autowiring in Symfony's service container?",
        "possibleAnswers": [
            {"id": 1, "text": "Simplifies service configuration by automatically injecting dependencies"},
            {"id": 2, "text": "Prevents runtime exceptions for missing dependencies"},
            {"id": 3, "text": "Optimizes application performance by caching services"},
            {"id": 4, "text": "Allows services to be defined without a `services.yaml` file"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/service_container/autowiring.html"
    },
    {
        "id": 39,
        "question": "What does the `Serializer` component in Symfony do?",
        "possibleAnswers": [
            {"id": 1, "text": "Converts objects to specific formats like JSON or XML and vice versa"},
            {"id": 2, "text": "Validates user input against a schema"},
            {"id": 3, "text": "Handles database serialization automatically"},
            {"id": 4, "text": "Encodes objects for caching"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/components/serializer.html"
    },
    {
        "id": 40,
        "question": "How do you use the `EventDispatcher` component in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Register listeners or subscribers to respond to specific events"},
            {"id": 2, "text": "Create custom services for asynchronous event handling"},
            {"id": 3, "text": "Manage HTTP request routing dynamically"},
            {"id": 4, "text": "Both 1 and 2"}
        ],
        "rightAnswer": [4],
        "source": "https://symfony.com/doc/current/components/event_dispatcher.html"
    },
    {
        "id": 47,
        "question": "What is the purpose of the `Security Voter` in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Determines whether a user has access to specific resources or actions"},
            {"id": 2, "text": "Validates user credentials during login"},
            {"id": 3, "text": "Handles CSRF protection in forms"},
            {"id": 4, "text": "Manages user sessions in Symfony applications"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/security/voters.html"
    },
    {
        "id": 48,
        "question": "How do you create a custom Twig filter in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Create a service tagged with `twig.extension` and define the filter logic"},
            {"id": 2, "text": "Add the filter logic directly in the Twig configuration file"},
            {"id": 3, "text": "Use annotations within the controller to define the filter"},
            {"id": 4, "text": "Override the default Twig template rendering logic"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/templating/twig_extension.html"
    },
    {
        "id": 55,
        "question": "What is the purpose of the `Cache` component in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Provides an extensible caching system with support for various storage backends"},
            {"id": 2, "text": "Optimizes query execution for Doctrine ORM"},
            {"id": 3, "text": "Manages HTTP cache headers for responses"},
            {"id": 4, "text": "Handles session data storage"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/components/cache.html"
    },
    {
        "id": 56,
        "question": "How does Symfony's `Messenger` component process messages asynchronously?",
        "possibleAnswers": [
            {"id": 1, "text": "By sending messages to a transport like RabbitMQ or Doctrine DBAL"},
            {"id": 2, "text": "By using custom background jobs for message handling"},
            {"id": 3, "text": "By queuing messages in the kernel request cycle"},
            {"id": 4, "text": "By creating temporary files for message storage"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/messenger.html"
    },
    {
        "id": 63,
        "question": "What does the `ParamConverter` in Symfony do?",
        "possibleAnswers": [
            {"id": 1, "text": "Automatically converts request parameters into objects"},
            {"id": 2, "text": "Handles parameter validation for forms"},
            {"id": 3, "text": "Optimizes routing parameters for performance"},
            {"id": 4, "text": "Manages environment variables for controllers"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/bundles/SensioFrameworkExtraBundle/current/annotations/converters.html"
    },
    {
        "id": 64,
        "question": "What is the purpose of the `debug:router` command in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Lists all registered routes in the application"},
            {"id": 2, "text": "Validates the syntax of routing configurations"},
            {"id": 3, "text": "Clears the routing cache"},
            {"id": 4, "text": "Registers new routes dynamically at runtime"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/console/commands.html#debug-router"
    }
]

