import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 3,
        "question": "Which Symfony component is responsible for handling HTTP requests?",
        "possibleAnswers": [
            {"id": 1, "text": "Routing"},
            {"id": 2, "text": "HttpFoundation"},
            {"id": 3, "text": "Console"},
            {"id": 4, "text": "Security"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/components/http_foundation.html"
    },
    {
        "id": 4,
        "question": "What is the primary purpose of Symfony Forms?",
        "possibleAnswers": [
            {"id": 1, "text": "Validating HTTP requests"},
            {"id": 2, "text": "Creating and handling form submissions"},
            {"id": 3, "text": "Managing database schemas"},
            {"id": 4, "text": "Setting up API endpoints"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/forms.html"
    },
    {
        "id": 8,
        "question": "What is the purpose of the EventDispatcher component in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Handles form submissions"},
            {"id": 2, "text": "Dispatches events and manages listeners"},
            {"id": 3, "text": "Configures HTTP request routing"},
            {"id": 4, "text": "Creates console commands"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/components/event_dispatcher.html"
    },
    {
        "id": 9,
        "question": "Which service is used for routing in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "RouterInterface"},
            {"id": 2, "text": "HttpKernel"},
            {"id": 3, "text": "RequestMatcher"},
            {"id": 4, "text": "ResponseFactory"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/routing.html"
    },
    {
        "id": 16,
        "question": "How do you create a custom service in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Define it in the services.yaml file"},
            {"id": 2, "text": "Use the `@Service` annotation"},
            {"id": 3, "text": "Extend the AbstractService class"},
            {"id": 4, "text": "Register it in the `config.php` file"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/service_container.html"
    },
    {
        "id": 17,
        "question": "What does the Dependency Injection component in Symfony manage?",
        "possibleAnswers": [
            {"id": 1, "text": "Request routing"},
            {"id": 2, "text": "Service instantiation and lifecycle"},
            {"id": 3, "text": "Database migrations"},
            {"id": 4, "text": "Twig template rendering"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/service_container/di_in_action.html"
    },
    {
        "id": 24,
        "question": "What does the `Validator` component in Symfony do?",
        "possibleAnswers": [
            {"id": 1, "text": "Handles input validation rules"},
            {"id": 2, "text": "Applies constraints to data objects"},
            {"id": 3, "text": "Provides custom validation services"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://symfony.com/doc/current/validation.html"
    },
    {
        "id": 25,
        "question": "Which command is used to generate a new bundle in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "make:bundle"},
            {"id": 2, "text": "generate:bundle"},
            {"id": 3, "text": "create:bundle"},
            {"id": 4, "text": "make:service"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/bundles.html"
    },
    {
        "id": 3,
        "question": "Which Symfony component is responsible for handling HTTP requests?",
        "possibleAnswers": [
            {"id": 1, "text": "Routing"},
            {"id": 2, "text": "HttpFoundation"},
            {"id": 3, "text": "Console"},
            {"id": 4, "text": "Security"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/components/http_foundation.html"
    },
    {
        "id": 4,
        "question": "What is the primary purpose of Symfony Forms?",
        "possibleAnswers": [
            {"id": 1, "text": "Validating HTTP requests"},
            {"id": 2, "text": "Creating and handling form submissions"},
            {"id": 3, "text": "Managing database schemas"},
            {"id": 4, "text": "Setting up API endpoints"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/forms.html"
    },
    {
        "id": 8,
        "question": "What is the purpose of the EventDispatcher component in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Handles form submissions"},
            {"id": 2, "text": "Dispatches events and manages listeners"},
            {"id": 3, "text": "Configures HTTP request routing"},
            {"id": 4, "text": "Creates console commands"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/components/event_dispatcher.html"
    },
    {
        "id": 9,
        "question": "Which service is used for routing in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "RouterInterface"},
            {"id": 2, "text": "HttpKernel"},
            {"id": 3, "text": "RequestMatcher"},
            {"id": 4, "text": "ResponseFactory"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/routing.html"
    },
    {
        "id": 16,
        "question": "How do you create a custom service in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Define it in the services.yaml file"},
            {"id": 2, "text": "Use the `@Service` annotation"},
            {"id": 3, "text": "Extend the AbstractService class"},
            {"id": 4, "text": "Register it in the `config.php` file"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/service_container.html"
    },
    {
        "id": 17,
        "question": "What does the Dependency Injection component in Symfony manage?",
        "possibleAnswers": [
            {"id": 1, "text": "Request routing"},
            {"id": 2, "text": "Service instantiation and lifecycle"},
            {"id": 3, "text": "Database migrations"},
            {"id": 4, "text": "Twig template rendering"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/service_container/di_in_action.html"
    },
    {
        "id": 24,
        "question": "What does the `Validator` component in Symfony do?",
        "possibleAnswers": [
            {"id": 1, "text": "Handles input validation rules"},
            {"id": 2, "text": "Applies constraints to data objects"},
            {"id": 3, "text": "Provides custom validation services"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://symfony.com/doc/current/validation.html"
    },
    {
        "id": 25,
        "question": "Which command is used to generate a new bundle in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "make:bundle"},
            {"id": 2, "text": "generate:bundle"},
            {"id": 3, "text": "create:bundle"},
            {"id": 4, "text": "make:service"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/bundles.html"
    },
    {
        "id": 32,
        "question": "Which method is used to configure routes in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "RouteBuilder::configure()"},
            {"id": 2, "text": "Router::addRoute()"},
            {"id": 3, "text": "Annotations or YAML/attributes in routes configuration"},
            {"id": 4, "text": "addPath() in services"}
        ],
        "rightAnswer": [3],
        "source": "https://symfony.com/doc/current/routing.html"
    },
    {
        "id": 33,
        "question": "What Symfony feature is designed to secure requests?",
        "possibleAnswers": [
            {"id": 1, "text": "JWT validation"},
            {"id": 2, "text": "Event listener hashing"},
            {"id": 3, "text": "Security voters"},
            {"id": 4, "text": "Firewall rules and authentication"}
        ],
        "rightAnswer": [4],
        "source": "https://symfony.com/doc/current/security.html"
    },
    {
        "id": 40,
        "question": "What is the purpose of a Voter in Symfony Security?",
        "possibleAnswers": [
            {"id": 1, "text": "To manage CSRF protection for forms"},
            {"id": 2, "text": "To decide whether a user has permission for a specific action"},
            {"id": 3, "text": "To hash user passwords"},
            {"id": 4, "text": "To define API resources"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/security/voters.html"
    },
    {
        "id": 41,
        "question": "Which service handles authentication in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "AuthenticatorInterface"},
            {"id": 2, "text": "PasswordEncoder"},
            {"id": 3, "text": "FirewallManager"},
            {"id": 4, "text": "SecurityChecker"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/security/authenticator_manager.html"
    },
    {
        "id": 48,
        "question": "What is the purpose of the Console component in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "To create and manage console commands"},
            {"id": 2, "text": "To handle HTTP requests in CLI environments"},
            {"id": 3, "text": "To run database migrations"},
            {"id": 4, "text": "To debug application errors"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/components/console.html"
    },
    {
        "id": 49,
        "question": "Which service handles CSRF protection in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "CsrfTokenManager"},
            {"id": 2, "text": "SecurityValidator"},
            {"id": 3, "text": "FirewallHandler"},
            {"id": 4, "text": "TokenChecker"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/security/csrf.html"
    }
]