
# Backend Task

## Setup

1. Clone the repository:
   ```bash
   git clone
   cd backend-task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following content:
   ```
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=your_user
   DATABASE_PASS=your_pass
   DATABASE_NAME=your_db
   ```

4. Run the application:
   ```bash
   npm run start
   ```

## Endpoints

### 1. GET /items

Fetches items from Skinport API with caching.

#### Response
Returns an array of item objects with two additional prices:
- `tradable_price`: The minimum price for tradable items.
- `non_tradable_price`: The minimum price for non-tradable items.

Example:
```json
[
  {
    "id": 1,
    "name": "Item Name",
    "tradable_price": 100,
    "non_tradable_price": 90
  }
]
```

### 2. POST /users/deduct

Deducts balance from a user.

#### Request Body
```json
{
  "userId": 1,
  "amount": 100
}
```

## Environment Variables

- `DATABASE_HOST`: Database host
- `DATABASE_PORT`: Database port
- `DATABASE_USER`: Database user
- `DATABASE_PASS`: Database password
- `DATABASE_NAME`: Database name
