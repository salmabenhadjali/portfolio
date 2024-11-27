import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
    {
        "id": 6,
        "question": "Which annotation is used to define route requirements in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "@Requirements"},
            {"id": 2, "text": "@RouteRequirements"},
            {"id": 3, "text": "@Route"},
            {"id": 4, "text": "@RouteConstraints"}
        ],
        "rightAnswer": [3],
        "source": "https://symfony.com/doc/current/routing.html"
    },
    {
        "id": 7,
        "question": "How do you register a service as private in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Use `_public: false` in `services.yaml`"},
            {"id": 2, "text": "Set `public: false` in `services.yaml`"},
            {"id": 3, "text": "Mark it as `@PrivateService` in PHP"},
            {"id": 4, "text": "Private services are not supported"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/service_container.html"
    },
    {
        "id": 8,
        "question": "What is the primary purpose of security voters in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "To encrypt sensitive data in the application"},
            {"id": 2, "text": "To decide if a user has permissions for specific actions"},
            {"id": 3, "text": "To handle form CSRF protection"},
            {"id": 4, "text": "To create custom validators"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/security/voters.html"
    },
    {
        "id": 9,
        "question": "What does the `Firewall` in Symfony Security manage?",
        "possibleAnswers": [
            {"id": 1, "text": "Authorization rules only"},
            {"id": 2, "text": "Authentication and authorization for HTTP requests"},
            {"id": 3, "text": "Access control for database queries"},
            {"id": 4, "text": "Securing third-party APIs"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/security/firewall.html"
    },
    {
        "id": 10,
        "question": "Which method is used to validate forms in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "FormValidator::validate()"},
            {"id": 2, "text": "Form::isValid()"},
            {"id": 3, "text": "FormBuilder::validate()"},
            {"id": 4, "text": "FormHandler::checkValidation()"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/forms.html#validation"
    },
    {
        "id": 28,
        "question": "How can you disable CSRF protection for a specific form in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Set `'csrf_protection' => false` in the form options"},
            {"id": 2, "text": "Disable it globally in `security.yaml`"},
            {"id": 3, "text": "Use the `@DisableCsrf` annotation"},
            {"id": 4, "text": "CSRF protection cannot be disabled"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/security/csrf.html"
    },
    {
        "id": 29,
        "question": "What is the purpose of `Cache Pools` in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "To manage caching of database queries"},
            {"id": 2, "text": "To provide a unified way of handling different caching backends"},
            {"id": 3, "text": "To clear application caches during deployment"},
            {"id": 4, "text": "To store cache data in memory only"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/cache.html"
    },
    {
        "id": 36,
        "question": "What is the primary use of the `HttpClient` component in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "To handle incoming HTTP requests"},
            {"id": 2, "text": "To send HTTP requests to external APIs"},
            {"id": 3, "text": "To create custom response objects"},
            {"id": 4, "text": "To manage session data"}
        ],
        "rightAnswer": [2],
        "source": "https://symfony.com/doc/current/http_client.html"
    },
    {
        "id": 37,
        "question": "How can you enable debugging for a Symfony application?",
        "possibleAnswers": [
            {"id": 1, "text": "Set `APP_DEBUG=true` in `.env` file"},
            {"id": 2, "text": "Install the DebugBundle and set `debug: true` in `config.yaml`"},
            {"id": 3, "text": "Use `php bin/console enable:debug` command"},
            {"id": 4, "text": "Symfony does not support debugging"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/configuration.html#debug-mode"
    },
    {
        "id": 44,
        "question": "How does the Symfony profiler help in debugging?",
        "possibleAnswers": [
            {"id": 1, "text": "Provides detailed logs for HTTP requests and responses"},
            {"id": 2, "text": "Tracks database queries and performance metrics"},
            {"id": 3, "text": "Displays form validation errors and security issues"},
            {"id": 4, "text": "All of the above"}
        ],
        "rightAnswer": [4],
        "source": "https://symfony.com/doc/current/profiler.html"
    },
    {
        "id": 45,
        "question": "What does the `Messenger` component in Symfony handle?",
        "possibleAnswers": [
            {"id": 1, "text": "Sending and receiving messages asynchronously"},
            {"id": 2, "text": "Email notifications"},
            {"id": 3, "text": "Real-time API requests"},
            {"id": 4, "text": "Database transactions"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/messenger.html"
    },
    {
        "id": 52,
        "question": "How do you create a custom console command in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Extend the `Command` class and implement the `execute()` method"},
            {"id": 2, "text": "Create a new service tagged as `console.command`"},
            {"id": 3, "text": "Define the command name in `services.yaml`"},
            {"id": 4, "text": "Both 1 and 2"}
        ],
        "rightAnswer": [4],
        "source": "https://symfony.com/doc/current/console.html"
    },
    {
        "id": 53,
        "question": "What does the `FormType` class do in Symfony?",
        "possibleAnswers": [
            {"id": 1, "text": "Defines the structure and fields of a form"},
            {"id": 2, "text": "Handles form submissions directly"},
            {"id": 3, "text": "Renders form templates in Twig"},
            {"id": 4, "text": "Validates user input automatically"}
        ],
        "rightAnswer": [1],
        "source": "https://symfony.com/doc/current/forms.html"
    }
]