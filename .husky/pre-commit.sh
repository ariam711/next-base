    #!/bin/sh
    # .husky/pre-commit

    npx lint-staged

    npm run validate
