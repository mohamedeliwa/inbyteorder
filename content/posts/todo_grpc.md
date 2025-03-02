+++
title = "Build a todo app with gRPC"
description = "a todo app (server, client) built with gRPC protocol in Nodejs"
weight = 1
date = "2025-02-26"

[extra]
+++

In this post, we'll build a simple to-do app using the gRPC protocol, following these steps:

## Initialize the Project

### 1. Start a New Node.js Project

Create a new directory for your project:

```bash
$ mkdir todo-grpc
```

Navigate to the newly created directory and initialize the Node.js project:

```bash
$ npm init
```

This command generates a `package.json` file. In this file, add the following entry to enable ES6 modules instead of CommonJS:

```json
"type": "module"
```

### 2. Install Dependencies

Install the necessary dependencies:

- `@grpc/grpc-js`: The gRPC client
- `@grpc/proto-loader`: A utility for loading `.proto` files for gRPC services

```bash
$ npm install @grpc/grpc-js @grpc/proto-loader
```

Here are the exact versions used in this post:

```json
"@grpc/grpc-js": "^1.12.6",
"@grpc/proto-loader": "^0.7.13"
```

### 3. Create Required Files

Create the required files for the project:

```bash
$ touch todo.proto server.js client.js
```

## Defining the Schema

Let’s start by defining the schema for communication between the server and the client.

In the `todo.proto` file, create a package called `todoPackage` and define a service named `Todo`. This service will expose methods for communication:

- **`createTodo`**: Creates a new to-do item. It accepts a `TodoItem` (which we'll define later) and returns the created `TodoItem`.
- **`readTodos`**: Retrieves all to-dos from the server. It takes no parameters and returns a list of `TodoItems`.
- **`readTodosStream`**: Streams to-dos from the server one by one. This method is more efficient for handling large datasets compared to `readTodos`, which returns all to-dos in one go.

```proto
syntax = "proto3";

package todoPackage;

service Todo {
    // Unary gRPC
    rpc createTodo(TodoItem) returns(TodoItem);
    // Synchronous
    rpc readTodos(NoParams) returns(TodoItems);
    // Server streaming
    rpc readTodosStream(NoParams) returns(stream TodoItem);
};
```

We also need to define the types used in the method parameters and return types:

- **`NoParams`**: A method with no parameters.
- **`TodoItem`**: Defines the structure of a single to-do item.
- **`TodoItems`**: Contains a property `items`, which is a list of `TodoItem` objects. Lists/arrays are represented using the `repeated` keyword.

```proto
message NoParams {};

message TodoItem {
    int32 id = 1;
    string text = 2;
};

message TodoItems {
    repeated TodoItem items = 1;
};
```

## Building the Server

Now, let’s build the server.

First, import the necessary dependencies:

```js
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
```

Next, load the schema we defined in `todo.proto`:

```js
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);

// Access the defined package using dot notation
const todoPackage = grpcObject.todoPackage;
```

Create an instance of the gRPC server and add the `Todo` service:

```js
const server = new grpc.Server();

server.addService(todoPackage.Todo.service, {
  createTodo: createTodo,
  readTodos: readTodos,
  readTodosStream: readTodosStream,
});

const todos = [];
```

Next, implement the methods for the `Todo` service:

```js
// Unary gRPC method
function createTodo(call, callback) {
  const todoItem = {
    id: todos.length,
    text: call.request.text,
  };
  todos.push(todoItem);
  callback(null, todoItem);
}

// Sync gRPC method
function readTodos(call, callback) {
  callback(null, { items: todos });
}

// Server streaming gRPC method
function readTodosStream(call) {
  todos.forEach((todo) => {
    call.write(todo);
  });
  call.end();
}
```

The `todos` array acts as in-memory storage for the to-dos.

### Key Notes:

- **`createTodo` method**:
  - We access the incoming to-do item via `call.request`, which is similar to accessing `request.body` in REST APIs.
  - After saving the to-do in the array, we call the callback with the created item.
- **`readTodos` method**:

  - This method returns all to-dos at once by invoking the callback with the full list.

- **`readTodosStream` method**:
  - We stream each to-do item individually to the client.

Finally, bind the server to a port and start listening:

```js
server.bindAsync(
  "0.0.0.0:3000",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("Server is listening on port 3000");
  }
);
```

## Building the Client

The client setup is similar to the server, so we will skip the repeated steps.

```js
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);

const todoPackage = grpcObject.todoPackage;
```

Next, create a new instance of the `Todo` service and specify the server's address and port:

```js
const client = new todoPackage.Todo(
  "0.0.0.0:3000",
  grpc.credentials.createInsecure()
);
```

To run the client, execute the following command, passing the to-do text as an argument:

```bash
node client.js "Buy some books"
```

Inside `client.js`, access the command-line argument:

```js
const text = process.argv[2];
```

Then, invoke the gRPC methods:

```js
// Unary gRPC method
client.createTodo({ id: -1, text }, (err, res) => {
  console.log({
    create: res,
  });
});

// Sync gRPC method
client.readTodos({}, (err, res) => {
  res.items.forEach((item) => {
    console.log(item.text);
  });
});

// Server streaming method
const call = client.readTodosStream();
call.on("data", (item) => {
  console.log(item.text);
});
call.on("end", () => console.log("Server done streaming"));
```

### Explanation of Calls:

- The first call creates a new to-do on the server.
- The second call retrieves all to-dos from the server.
- The third call streams to-dos from the server, with event listeners handling incoming data and the end of the stream.

## Running the Project

1. In one terminal, start the server:

```bash
node server.js
```

2. In another terminal, run the client multiple times with different to-do texts:

```bash
node client.js "Buy some books"
```

That’s it! Thanks for reading!

<br />
<br />
<br />
<br />
<br />
<br />

