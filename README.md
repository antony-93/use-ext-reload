# use-ext-reload

Use Ext Reload is a package designed to make developing with Ext JS easier. With a single command, it allows you to run your Ext JS application with hot reload and live reload support, significantly improving your productivity.

### Key Features

* **Hot Reload**: Changes to the code are instantly reflected in the application without the need to reload the page.

* **Live Reload**: When detecting changes in your code, the page will automatically reload.

* **Ease of Use**: With just one command, quickly launch your development environment and focus on coding.

## Installation

To install use-ext-reload, run the following command in your console

```bash
npm i -g use-ext-reload
```

## Usage

To get started using the use-ext package, follow these steps:

1. **Create the Configuration File**: At the root of your project, create a file called use-ext.config.json.

2. **Configure the File**: Inside use-ext.config.json, add a JSON object that contains the paths property. This property should be an array of strings that lists the folder paths you want to use, based on the root of your project.

```json
{
   "paths": [
     "app",
     "packages/local/example-package"
   ]
}
```

3. **Run the Package**: After configuration, you can start your project with the command:

## Commands

The use-ext-reload package offers the following commands:

`use-ext run`

This command starts the application, by default it uses hot reload!

### Arguments:

* `--port`

  * **Description**: Defines the port on which the application will run.

  * **Use**: To specify the port, add --port followed by the desired port number.

  * **Example**:

    ```bash
    use-ext run --port 3000
    ```

* `--browser-reload`

  * **Description**: Activates live reload, allowing code changes to be automatically reflected in the browser.

  * **Use**: To enable this option, add --browser-reload to the command.

  * **Example**:

    ```bash
    use-ext run --browser-reload
    ```

* `--log`

  * **Description**: Prints requests made by the browser to the console.

  * **Use**: To enable this option, add --log to the command.

  * **Example**:

    ```bash
    use-ext run --log
    ```

### Complete example:
To run the application with logging enabled, live reload and on port 3000, you would use the following command:

```bash
use-ext run --log --browser-reload --port 3000
```