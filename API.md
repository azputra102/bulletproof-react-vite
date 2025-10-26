# API Documentation

This document describes the API endpoints and their usage in the Bulletproof React Vite application.

## Authentication API

### Login
```typescript
POST /auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password"
}

Response:
{
  "user": {
    "id": "1",
    "email": "test@example.com",
    "name": "Test User",
    "avatar": "https://avatars.githubusercontent.com/u/1?v=4",
    "role": "user",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  },
  "token": "jwt-token"
}
```

### Register
```typescript
POST /auth/register
Content-Type: application/json

{
  "email": "new@example.com",
  "password": "password123",
  "name": "New User"
}
```

### Get Current User
```typescript
GET /auth/me
Authorization: Bearer <token>
```

### Logout
```typescript
POST /auth/logout
Authorization: Bearer <token>
```

## Users API

### Get Users
```typescript
GET /users?page=1&limit=10&search=query
```

### Get User by ID
```typescript
GET /users/:id
```

### Update User
```typescript
PATCH /users/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "avatar": "https://example.com/avatar.jpg"
}
```

### Delete User
```typescript
DELETE /users/:id
```

## Discussions API

### Get Discussions
```typescript
GET /discussions?page=1&limit=10&search=query&tag=javascript
```

### Get Discussion by ID
```typescript
GET /discussions/:id
```

### Create Discussion
```typescript
POST /discussions
Content-Type: application/json

{
  "title": "Discussion Title",
  "content": "Discussion content...",
  "tags": ["javascript", "react"]
}
```

### Update Discussion
```typescript
PATCH /discussions/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content..."
}
```

### Delete Discussion
```typescript
DELETE /discussions/:id
```

### Like/Unlike Discussion
```typescript
POST /discussions/:id/like
DELETE /discussions/:id/like
```

## Error Responses

All API endpoints may return error responses in the following format:

```typescript
{
  "message": "Error description",
  "statusCode": 400
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error
