+++
title = "Rupit"
description = "a simple CLI tool to run long terminal commands by aliases"
weight = 2

[extra]
# local_image = "/projects/project-1.jpg"
# link_to = "https://github.com/not-matthias/apollo"
+++

# Intro

Rupit is a straightforward CLI tool designed to execute long, complex, and multi-step terminal commands using aliases.

It leverages a configuration file, `rupit.json`, which holds the list of aliases for Rupit to reference.

It functions similarly to how npm scripts are used in Node.js projects.

# How to use

For Linux users you can use the pre-built binary from the releases <a href="https://github.com/mohamedeliwa/rupit/releases" target="_blank">page</a>, it's built and tested on **Ubuntu 22.04.4 LTS**,

or you can build from source for linux, windows, and macOS systems using the following steps:

1. Pull the repo:

```sh
git pull git@github.com:mohamedeliwa/rupit.git
```

2. Build the project with:

```sh
cargo build --release
```

3. Put the release binary in a suitable execution path
4. Create `rupit.json` file, with a structure similar to the following:

```json
{
  "aliases": {
    "greetings": "echo \"Hello World\"",
    "multistep": "cd ~; touch test.txt"
  }
}
```

> Note: depending on your OS the path at which to put the file will be

> **Linux**: /home/\<user>/.config/rupit/rupit.json

> **Windows**: C:\Users\\\<user>\AppData\Roaming\Foo Corp\Bar App\rupit.json

> **macOS**: /Users/\<user>/Library/Application Support/com.Foo-Corp.Bar-App/rupit.json

5. Run the command with an alias name `rupit <ALIAS>`

```sh
rupit greetings
```

this will execute the following:

```sh
echo "Hello World"

Hello World
```

# Available Commands

- `rupit run <alias>` -> to run specific alias command from the config file.
- `rupit show -c` -> to show the expected path of the config file.
- `rupit show -a <alias>` -> to print the alias corresponding command without executing it.
- `rupit help` -> to print the help message

# Links

- <a href="https://github.com/mohamedeliwa/bitcask" target="_blank">Source code on Github</a>
<!-- - <a href="#" target="_blank">Posts written for this project</a> -->

<br />
<br />
<br />
