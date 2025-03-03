+++
title = "How to use SQLX (SQLite) with Tauri (Rust side)"
description = "How to install SQLx with the SQLite feature and use it with Tauri, focusing on the Rust side."
weight = 1
date = "2025-03-03"

[extra]
+++

This article demonstrates how to install SQLx with the SQLite feature and use it with Tauri, focusing on the Rust side.

## Install SQLx

To install SQLx with the Tokio runtime and SQLite support, add the following to the `[dependencies]` section of your `src-tauri/Cargo.toml` file:

```toml
[dependencies]
# SQLx with Tokio (no TLS) and SQLite support
sqlx = { version = "0.8", features = [ "runtime-tokio", "sqlite"] }
```

## Connect to the Database

Create an asynchronous method to establish a connection to the SQLite database and return a connection pool:

```rs
async fn establish_connection() -> SqlitePool {
    SqlitePoolOptions::new()
        .max_connections(5)
        .connect("sqlite://")
        .await
        .expect("Unable to connect to SQLite database")
}
```

## Store the Connection Pool

Create a struct to store the database connection pool:

```rs
struct AppData {
    db_pool: SqlitePool,
}
```

Next, initialize the connection pool:

```rs
// Create a connection pool
let db_pool: SqlitePool = block_on(establish_connection());
```

Store the connection pool in the application state:

```rs
 app.manage(AppData { db_pool });
```

## Access the Database in an Async Command

To interact with the database from an asynchronous command, define a Tauri command like this:

```rs
#[tauri::command]
async fn db_test(state: State<'_, AppData>) -> Result<(), String> {
    // You can now interact with the database using `state.db_pool`
    Ok(())
}
```

<br />
<br />
<br />
<br />
<br />
<br />
