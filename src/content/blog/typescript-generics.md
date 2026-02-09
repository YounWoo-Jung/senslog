---
title: "Understanding TypeScript Generics"
date: 2026-02-01
tags: ["typescript", "programming"]
series: "TypeScript Deep Dive"
description: "A practical guide to TypeScript generics with real-world examples."
---

Generics are one of TypeScript's most powerful features. Let's break them down with practical examples.

## The Problem

Without generics, you'd write separate functions for each type:

```typescript
function firstString(arr: string[]): string | undefined {
  return arr[0];
}

function firstNumber(arr: number[]): number | undefined {
  return arr[0];
}
```

## The Solution

Generics let you write it once:

```typescript
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const name = first(["Alice", "Bob"]); // string
const age = first([25, 30]);          // number
```

## Constraints

Use `extends` to constrain what types are allowed:

```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");    // ✅
getLength([1, 2, 3]);  // ✅
getLength(42);         // ❌ Error
```

## Generic Interfaces

```typescript
interface Repository<T> {
  getById(id: string): Promise<T>;
  getAll(): Promise<T[]>;
  save(item: T): Promise<void>;
}
```

Generics make your code reusable without sacrificing type safety. Start simple and add constraints as needed.
