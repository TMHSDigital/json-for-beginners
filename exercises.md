# JSON Exercises

Practice your JSON skills with these exercises. Try to solve them without looking at the answers!

## Exercise 1: Basic Object
Create a JSON object representing a book with the following properties:
- title
- author
- year
- isAvailable
- genres (array)

## Exercise 2: Nested Structure
Create a JSON object representing a shopping cart with:
- items (array of objects with name, price, quantity)
- total
- customer information
- shipping address

## Exercise 3: API Response
Create a JSON response for a weather API that includes:
- current conditions
- forecast for next 3 days
- location information
- metadata (timestamp, version)

## Answers

### Exercise 1
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925,
  "isAvailable": true,
  "genres": ["fiction", "classic", "drama"]
}
```

### Exercise 2
```json
{
  "items": [
    {
      "name": "Laptop",
      "price": 999.99,
      "quantity": 1
    },
    {
      "name": "Mouse",
      "price": 29.99,
      "quantity": 2
    }
  ],
  "total": 1059.97,
  "customer": {
    "name": "John Smith",
    "email": "john@example.com"
  },
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Boston",
    "zip": "02108",
    "country": "USA"
  }
}
```

### Exercise 3
```json
{
  "current": {
    "temperature": 72,
    "condition": "Sunny",
    "humidity": 45,
    "windSpeed": 8
  },
  "forecast": [
    {
      "date": "2024-03-16",
      "high": 75,
      "low": 60,
      "condition": "Partly Cloudy"
    },
    {
      "date": "2024-03-17",
      "high": 78,
      "low": 62,
      "condition": "Sunny"
    },
    {
      "date": "2024-03-18",
      "high": 70,
      "low": 58,
      "condition": "Rain"
    }
  ],
  "location": {
    "city": "Boston",
    "state": "MA",
    "country": "USA",
    "coordinates": {
      "latitude": 42.3601,
      "longitude": -71.0589
    }
  },
  "metadata": {
    "timestamp": "2024-03-15T15:00:00Z",
    "version": "1.0.0",
    "source": "National Weather Service"
  }
}
``` 