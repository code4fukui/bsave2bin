# bsave2bin

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Converts MSX BSAVE format files to raw binary data files by stripping the 7-byte header.

## Features

- Extracts raw binary data from MSX BSAVE files.
- Provides both a simple web interface and a command-line tool.
- The web app displays BSAVE header information (start, end, and execution addresses).

## Usage

There are two ways to use this tool: via the web app or the command-line interface.

### Web App

**Demo: [bsave2bin](https://code4fukui.github.io/bsave2bin/)**

The web app provides an easy-to-use interface with a retro MSX style. Simply drag and drop your BSAVE file onto the page or use the file selector.

- The file's metadata (start, end, and execution addresses) will be displayed.
- The converted binary file will be downloaded automatically.

### Command-Line Tool

The CLI tool is a Deno script for local conversions.

#### Requirements

- [Deno](https://deno.land/) runtime

#### Command

Run the script directly from the URL, providing the input BSAVE file and the desired output binary filename.

```sh
deno run -A https://code4fukui.github.io/bsave2bin/bsave2bin.js [bsave file] [bin file]
```

## License

MIT License — see [LICENSE](LICENSE).