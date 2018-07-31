# Blaze

A minimal web browser made with Material Design, Electron and React.

## Contributing

Have a look at the `CONTRIBUTING.md` file in order to adhere to the codebase and
commit format.

## Environments variables

If you want to get your hands dirty on this project you'll certainly need React and Redux
developer tools extensions on your side. Create an `.env` file in the project's root and
define `REACT_APP_EXTENSIONS_BASE_PATH` that will hold your extensions base path
and `REACT_APP_REQUIRED_EXTENSION_IDS` that will hold your extentions id and version paths
in the form of a comma-delimited string:

`REACT_APP_EXTENSIONS_BASE_PATH=/path/to/extensions`
`REACT_APP_DEVELOPER_TOOLS="/id1/1.0.1,/id2/1.2.3"`

Follow [this](https://electronjs.org/docs/tutorial/devtools-extension) if you need help in finding the chrome extensions paths.

To startup a development instance, run `yarn dev` in the project's root.
