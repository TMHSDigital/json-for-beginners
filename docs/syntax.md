# JSON Syntax

JSON has a simple and strict syntax. Here's everything you need to know:

## Basic Structure

JSON is built on two structures:
1. Objects: Unordered collections of key-value pairs
2. Arrays: Ordered sequences of values

## Data Types

- **Strings**: Double-quoted text
  ```json
  "Hello, World!"
  ```

- **Numbers**: Integer or floating-point
  ```json
  42
  3.14
  ```

- **Booleans**: true or false
  ```json
  true
  false
  ```

- **Null**: Represents empty value
  ```json
  null
  ```

## Objects

```json
{
  "name": "John",
  "age": 30,
  "isActive": true
}
```

## Arrays

```json
["apple", "banana", "orange"]
```

## Nested Structures

```json
{
  "person": {
    "name": "John",
    "hobbies": ["reading", "gaming"]
  }
}
```

## Rules

1. Use double quotes for strings
2. No trailing commas
3. No comments
4. No functions or expressions
5. Keys must be strings 