#!/bin/sh
# .husky/commit-msg

# Color constants for better output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Read only the first line (subject) of the commit message
commit_msg_file=$1
subject=$(head -n1 "$commit_msg_file")

# Regex for conventional commits:
# - type(scope?): description
# - Allows for breaking change indicator '!'
# - Enforces lowercase first letter of description
# - Enforces a space after the colon
conventional_pattern="^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\([a-z0-9-]+\))?!?: [a-z].+$"

# Check 1: Validate the subject line against the combined pattern
if ! echo "$subject" | grep -qE "$conventional_pattern"; then
  echo "${RED}Error: Invalid commit message format.${NC}" >&2
  echo "The commit message subject line does not follow the conventional commit standard." >&2
  echo "----------------------------------------------------------------" >&2
  echo "Correct format:  <type>(<scope>): <description>" >&2
  echo "Example:         feat(auth): add user login endpoint" >&2
  echo "----------------------------------------------------------------" >&2
  echo "Rules:" >&2
  echo "  - Must start with a valid type: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test" >&2
  echo "  - Scope is optional and should be in parentheses: (api)" >&2
  echo "  - Description must start with a lowercase letter." >&2
  echo "  - There must be a colon and a space after the type/scope." >&2
  echo "Your subject line: \"$subject\"" >&2
  exit 1
fi

# Check 2: Ensure the subject line is not too long
max_length=100
if [ ${#subject} -gt $max_length ]; then
  echo "${RED}Error: Commit message subject is too long.${NC}" >&2
  echo "The subject line should be no more than ${max_length} characters." >&2
  echo "Current length: ${#subject} characters." >&2
  echo "Your subject line: \"$subject\"" >&2
  exit 1
fi

echo "${GREEN}Commit message is valid!${NC}"
