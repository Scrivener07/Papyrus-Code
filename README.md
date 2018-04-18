# Papyrus-Code
A VS Code package for working with Bethesda's Papyrus scripting language.

## Features

Papyrus.
- [x] Syntax Colorizer
- [x] Snippets
- [x] Compilation of files,folders, and projects.

Papyrus Assembly
- [x] Syntax Colorizer
- [ ] Snippets

Papyrus Project
- [x] Syntax Colorizer
- [x] Snippets

![](images/feature-1.gif)

## Installing
* Download and install from the VS Code extension manager or [side-load](https://code.visualstudio.com/docs/extensions/yocode#_your-extensions-folder) it into VS Code.
* Open and configure Papyrus options through the VS Code settings window if necessary. 

## Extension
Papyrus Code adds Papyrus support to various contribution points in the VS Code editor.

### Settings
This extension contributes the following settings. Add these to your user or workspace settings.
* `papyrus.fo4.directory`	Specifies the path to Fallout 4's installation folder.
* `papyrus.fo4.compiler.directory`	Specifies the path to the Papyrus Compiler, supports relative pathing from the game directory.
* `papyrus.fo4.compiler.output`	Specifies the path for compiled scripts, supports relative pathing from the game directory.
* `papyrus.fo4.compiler.target`	Specifies a file to be compiled with the "Papyrus: Compile Target" command, supports relative pathing from the game directory.
* `papyrus.fo4.compiler.asm`	Specify the Papyrus Compiler assembly mode. "None" disables all output, "Only" only generates Papyrus assembly, not compiled .pex, "Discard" generates .pex and deletes assembly, and "Keep" generates and keeps both .pex and assembly.
* `papyrus.fo4.compiler.imports`	Specifies a list of import folders for the Papyrus Compiler, supports relative pathing from the game directory. Script files listed located in import directories listed first will overwrite scripts of the same name in other directories.

### Commands
This extension contributes the following commands. Execute these through the command palette.
* *Papyrus: Compile (Debug)*: The default keyboard mapping is `Ctrl`+`B`
* *Papyrus: Compile (Release)*
* *Papyrus: Compile (Release Final)*
* *Papyrus: Compile File*
* *Papyrus: Compile Folder*
* *Papyrus: Compile Target*: The default keyboard mapping is `Ctrl`+`Shift`+`B`
* *Papyrus: Create Project*

## Known Issues
There are no known issues at this time.

## Release Notes
There are no release notes at this time.

### [1.0.0]
* Added *Compile (Debug)*, *Compile (Release)*, and *Compile (Release Final)* commands for the active file.
* Added *Compile File* and *Compile Folder* commands with **FileDialog** for compilation selection.
* Added *Compile Default* command, works like original **Compile** to build a configured file, or folder.
* Added *Create Project* command, to create and save **Papyrus Project** files.
* Added support for relative pathing on some extension **Settings**.
* Added **Papyrus** ASM compilation options to the extension **Settings**.
* Changed, rewrote **Compiler** interface to generate **Papyrus Project** files, rather than running command line statements.
* Changed, refactored extension **Setting** with per-game support, Fallout 4 is still the only supported game however.
* Changed, rewrote various error messages to be clearer, and add confirmation to error messages.
* Changed, rewrote description fields for the extension **Settings** and **Commands**.
* Fixed, prevent extension from creating more than one **Terminal** instance.

### [0.0.2]
* Thank you for your contributions [shad0wshayd3](https://github.com/shad0wshayd3).
* Added the `const` script flag.
* Added F4SE v0.6.7 snippet support.
* Removed multiline function arguments from some snippets.
* Fixed papyrus comments.

### [0.0.1]
* Changed, refactoring and reduction to the code base.
* Removed unnecessary or expirmental features.

### [0.0.0]
* Github Only
