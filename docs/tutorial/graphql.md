---
id: graphql
title: 5. Generating GraphQL Endpoint
sidebar_label: 5. Generating GraphQL Endpoint
slug: /tutorial/graphql
---

## Introduction to the GraphQL concept

> GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data.
>
> — [*Introduction to GraphQL | GraphQL*](https://graphql.org/learn)

Herbs supports REST **and** GraphQL APIs, which means that you can provide two options for the client's request using the same usecase!

Let's walk through the required setup to use that GraphQL layer of herbs. The GraphQL server needs 3 main definitions to work:

- **Types**: to define the entities properties to the client.
- **Queries**: to define the usecases which fetch data.
- **Mutation**: to define the usecases which create or update data.

Using [`herbs2gql`](/docs/glues/herbs2gql) it is really simple to set them all based on concepts we've seen before (eg. [entity](/docs/entity/getting-started) and [use case](/docs/usecase/getting-started)).

## Types

In this case, is set the type for User entity.

For an entity like User:

```js
entity('User', {
    id: field(Number),
    nickname: field(String),
    password: field(String),
})
```

The type definition in the GraphQL syntax would be like this:

```graphql
type User {
    id: Float!
    nickname: String!
    password: String!
}
```

But hopefully, we don't have to convert each entity by hand, we can use the function `entity2type` from `@herbsjs/herbs2gql`:

```js
// src/infra/api/graphql/types.js
const { entity2type } = require('@herbs/herbs2gql')
const entities = require('../../../domain/entities')

// Set the default schema for the types.
const defaultSchema = [`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }`]

// For each entity in the list `entities` convert it to a type and put it in the list of `types`.
const types = [defaultSchema].concat(Object
  .keys(entities)
  .map(entity => [entity2type(entities[entity])]))

module.exports = types
```

## Queries

The process to set up Queries is pretty similar to the previous one. The main difference is that in the CLI we use a factory function which receive the usecase list.

We are going to use the `usecase2query` util and the `defaultResolver`, both from `@herbsjs/herbs2gql`:

```js
// src/infra/api/graphql/queries.js
const { usecase2query } = require('@herbs/herbs2gql')
const defaultResolver = require('./defaultResolver')

// Function require all the usecases in a list.
function factory(usecases) {
    // For each usecase in the list `usecases` convert it to a query and put it in the list of `queries`.
    const queries = usecases.map(usecase => usecase2query(usecase(), defaultResolver(usecase)))
    return queries  
}

module.exports = { factory }
```

## Mutations

The same thing for mutations, but now we are using the `usecase2mutation` util:

```js
// src/infra/api/graphql/mutations.js
const { usecase2query } = require('@herbs/herbs2gql')
const defaultResolver = require('./defaultResolver')

// Require all the usecases in a list.
function factory (usecases) {
    // For each usecase in the list `usecases` convert it to a mutation and put it in the list of `mutations`.
    const mutations = usecases.map(usecase => usecase2mutation(usecase(), defaultResolver(usecase)))
    return mutations
}

module.exports = { factory }
```
