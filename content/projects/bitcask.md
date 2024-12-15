+++
title = "bitcask"
description = "A Log-Structured key/value storage engine as a partial implementation of the Bitcask engine."
weight = 2

[extra]
# You can also crop the image in the url by adjusting w=/h=
# remote_image = "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
+++

# Storage engine

It's basically a `Log-Structured key/value storage engine` as a partial implementation of the <a href="https://docs.riak.com/riak/kv/2.2.3/setup/planning/backend/bitcask/index.html" target="_blank">Bitcask</a> engine, created for learning and practice.

It offers high-performance reads and writes, subject to the requirement that all the keys fit in the available RAM, since the hash map is kept completely in memory.

The values can use more space than there is available memory, since they can be loaded from disk with just one disk seek.

A storage engine like Bitcask is well suited to situations where the value for each key is updated frequently.

In this kind of workload, there are a lot of writes, but there are not too many distinct keys—you have a large number of writes per key, but it’s feasible to keep all keys in memory.

# Storage Format

The underlying storage format is very simple: a text file where each line contains a key-value pair (Record), separated by a comma (roughly like a CSV file, ignoring escaping issues).

# Links

- <a href="https://github.com/mohamedeliwa/bitcask" target="_blank">Source code on Github</a>

<br />
<br />
<br />
