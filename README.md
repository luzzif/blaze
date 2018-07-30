# Blaze

A minimal web browser made with Material Design, Electron and React.

## Contributing

Have a look at the `CONTRIBUTING.md` file in order to adhere to the codebase and
commit format.

## Environments variables

If you want to get your hands dirty on this project you'll certainly need React and Redux
developer tools extensions on your side. Create an `.env` file in the project's root and
define the `REACT_APP_DEVELOPER_TOOLS` env; this variable will hold your extentions paths
in the form of a comma-delimited string:

`REACT_APP_DEVELOPER_TOOLS="path1,path2,path3"`

Follow [this](https://electronjs.org/docs/tutorial/devtools-extension) if you need help in finding the chrome extensions paths.

To startup a development instance, run `yarn dev` in the project's root.
