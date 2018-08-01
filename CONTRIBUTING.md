# Code formatting

ESLint and Prettier is used in the project. In order to have a consistent code
formatting, simply autoformat the code pre-commit/push.

WARNING: ALL PRs WITH INCONSISTENT CODE FORMAT WILL BE DECLINED

# Environments variables

If you want to get your hands dirty on this project you'll certainly need React and Redux
developer tools extensions on your side. Create a `.env` file in the project's root and
define `REACT_APP_EXTENSIONS_BASE_PATH` that will hold your extensions base path
and `REACT_APP_REQUIRED_EXTENSION_IDS` that will hold your extentions id and version paths
in the form of a comma-delimited string:

```
REACT_APP_EXTENSIONS_BASE_PATH="/path/to/extensions"
REACT_APP_DEVELOPER_TOOLS="/id1/1.0.1,/id2/1.2.3"
```

Follow [this](https://electronjs.org/docs/tutorial/devtools-extension) if you need help in
finding the chrome extensions paths; it also states the supported extensions.

Now that you have configured the extensions to load, it's time to enable them by 
defining another env:

```
NODE_ENV="dev"
```

The developer tools extensions will be installed only on development environment.

# Commit Message Format

Each commit message consists of a header and an optional body, separated by an
empty line.

Header Format: [type]: subject.

type must have one of the following values:

- `feat`: a new feature
- `fix`: a bug fix
- `docs`: documentation only changes
- `style`: changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc)
- `refactor`: a code change that neither fixes a bug nor adds a feature
- `perf`: a code change that improves performance
- `test`: adding missing tests
- `chore`: changes to the build process or auxiliary tools and libraries such as
  documentation generation

subject is a succinct description of the change and:

- uses the imperative, present tense: "change" not "changed" nor "changes"
- doesn't capitalize the first letter
- has no dot (.) at the end

as for the body:

- just as in the subject, use the imperative, present tense: "change" not
  "changed" nor "changes"
- The body should include the motivation for the change and contrast this with
  previous behavior.

## Example

```
[chore]: dev environment setup

Add linter, add base dependencies.
```
