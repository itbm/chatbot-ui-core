# Chatbot UI Core

This package provides type definitions and the interface for Chatbot UI extensions
to interact with the [Chatbot UI](https://github.com/jorge-menjivar/chatbot-ui) application.

## Installation

For [Chatbot UI](https://github.com/jorge-menjivar/chatbot-ui) users there is no need to install anything, as it already pre-installed in the main application [Chatbot UI](https://github.com/jorge-menjivar/chatbot-ui).

Developers building their own database extension can install this package by using:

```sh
npm i @chatbot-ui/core@latest
```

## Usage

If you want to build your own database extension you just have to implement the following interface in your package:
[./src/database/client-side.ts](./src/database/client-side.ts)

If you need a to use serverless functions to access your database (e.g. postgres), then you must also implement the Server-side database interface:
[./src/database/server-side.ts](./src/database/server-side.ts)

The server-side database implementation uses the `paths` property to map any API calls made to `/api/storage/[endpoint]` directly to your package.

## Examples

See the implementation of the package [@chatbot-ui/local-storage](https://www.npmjs.com/package/@chatbot-ui/local-storage) to view an example of a client-side-only database extension:
https://github.com/jorge-menjivar/chatbot-ui-local-storage

See the implementation of the package [@chatbot-ui/rdbms](https://www.npmjs.com/package/@chatbot-ui/rdbms) to view an example of database extension that needs access to serverless functions:
https://github.com/jorge-menjivar/chatbot-ui-rdbms
