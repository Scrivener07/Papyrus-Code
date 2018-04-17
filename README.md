# Papyrus-Code
A VS Code package for working with Bethesda's Papyrus scripting language.

## Features

Tooling
- [X] Compilation of psc files
- [ ] Assembly of pas files
- [ ] Disassembly of pex files
- [ ] Launch online documentation

Papyrus.
- [x] Syntax Colorizer
- [x] Snippets

Papyrus Assembly
- [x] Syntax Colorizer
- [ ] Snippets

Papyrus Project
- [x] Syntax Colorizer
- [x] Snippets

![](images/feature-1.gif)

## Installing
Download and install from the VS Code extension manager or [side-load](https://code.visualstudio.com/docs/extensions/yocode#_your-extensions-folder) it into VS Code.

## Extension Settings
This extension contributes the following settings. Add these to your user or workspace settings.
* `papyrus.compiler.executable`: Specifies a file path to `PapyrusCompiler.exe`.
* `papyrus.compiler.target`: Specifies a file or directory path to compile.
* `papyrus.compiler.output`: Specifies a directory path where compiled papyrus files are output.
* `papyrus.compiler.imports`: A list of import directories the papyrus compiler should use. Folders listed first override ones listed after.

## Extension Commands
* `Papyrus: Compile` The default keyboard mapping is `Ctrl` + `B`

## Known Issues
* No relative paths in configuration settings.

## Release Notes
There are no release notes at this time.

### 0.0.2
* Added the `const` script flag.
* Added F4SE v0.6.7 snippet support.

### 0.0.1
* Changes including refactoring and reduction.

### 0.0.0
* Github Only
