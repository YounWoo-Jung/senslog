---
title: "TypeScript 제네릭 이해하기"
date: 2026-02-01
tags: ["typescript", "programming"]
series: "TypeScript Deep Dive"
description: "실전 예제로 이해하는 TypeScript 제네릭 가이드."
---

제네릭은 TypeScript의 가장 강력한 기능 중 하나입니다. 실전 예제로 차근차근 살펴봅시다.

## 문제 상황

제네릭이 없으면 타입마다 함수를 따로 만들어야 합니다:

```typescript
function firstString(arr: string[]): string | undefined {
  return arr[0];
}

function firstNumber(arr: number[]): number | undefined {
  return arr[0];
}
```

## 해결책

제네릭을 쓰면 한 번만 작성하면 됩니다:

```typescript
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const name = first(["Alice", "Bob"]); // string
const age = first([25, 30]);          // number
```

## 제약 조건

`extends`로 허용할 타입을 제한할 수 있습니다:

```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");    // ✅
getLength([1, 2, 3]);  // ✅
getLength(42);         // ❌ Error
```

## 제네릭 인터페이스

```typescript
interface Repository<T> {
  getById(id: string): Promise<T>;
  getAll(): Promise<T[]>;
  save(item: T): Promise<void>;
}
```

제네릭은 타입 안정성을 유지하면서 코드 재사용성을 높여줍니다. 단순한 형태로 시작해서 필요할 때 제약을 추가하세요.
