# Commit Message Rules

## Structure
```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

## Types
| Type | When to use |
|---|---|
| `feat` | New feature (minor version bump) |
| `fix` | Bug fix (patch version bump) |
| `BREAKING CHANGE` | API-breaking change (major version bump) |
| `chore` | Misc tasks, dependency updates |
| `docs` | Documentation changes |
| `style` | Formatting, indentation, comments |
| `refactor` | Code improvements, no functionality change |
| `perf` | Performance improvements |
| `test` | Adding or improving tests |

## Examples
```
feat(ui): add dark mode toggle

Introduced a dark mode toggle in user settings. Saves preference in local storage.
```
```
fix(auth): add missing API key check

Ensured API key is checked before sending authentication requests.
Fixes #128
```
```
docs(readme): update setup guide with new steps
```

## Rules
- Use present tense: "fix login bug" not "fixed login bug"
- Keep the short description concise (under 72 chars)
- Max **5 commits per PR**
- Max **5 files per commit**
- Separate unrelated changes into separate commits
- Reference issues when applicable: `Fixes #123`
