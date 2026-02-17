# Codolio Electron Wrapper

This is a desktop application wrapper for [Codolio](https://codolio.com/), built using [Electron](https://www.electronjs.org/).

## Features

- **Dedicated Window:** Runs Codolio in its own application window, separate from your web browser.
- **Custom Icon:** Uses a custom application icon.
- **Security:** Configured with `nodeIntegration: false` and `contextIsolation: true` for security.
- **External Links:** Links to external websites are automatically opened in your default web browser.

## Prerequisites

- [Node.js](https://nodejs.org/) (installed and available in your terminal)

## Installation

1.  Clone or download this repository.
2.  Open a terminal in the project directory.
3.  Install dependencies:

    ```bash
    npm install
    ```

## Usage

To start the application:

```bash
npm start
```

## Building the Executable

To create a standalone `.exe` file for Windows:

```bash
npm run package
```

### Creating a Windows Installer

To create a single setup file (`.exe`) that installs the application:

```bash
npm run installer
```

The installer will be created in:
`dist/installer/CodolioSetup.exe`

### Sharing the Application

To share the application with others, you only need to send them **one file**:

*   `dist/installer/CodolioSetup.exe`

They can simply run this file to install and launch Codolio.

## Troubleshooting

### "App is undefined" or Launch Errors

If you encounter an error where `app` is undefined or the application fails to launch immediately, it might be due to a conflicting environment variable.

Try unsetting the `ELECTRON_RUN_AS_NODE` variable:

**PowerShell:**
```powershell
$env:ELECTRON_RUN_AS_NODE=""
npm start
```

**Command Prompt (cmd):**
```cmd
set ELECTRON_RUN_AS_NODE=
npm start
```

**Built with love with the help of CipherSchools**


