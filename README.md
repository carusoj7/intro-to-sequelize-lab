# Sequelize Dog API
This allows you to complete CRUD operations on a database of dogs!

## Endpoints
The following below includes all the information for available endpoints for this API.

### Create a Dog
#### Method: POST
#### Endpoint: /api/dogs
#### Description: This endpoints creates a new dog.
#### Request Body:
```
{
  "name": "string",
  "age": integer,
  "breed": "string"
}
```
#### Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp"
  "updatedAt": "timestamp"
}
```
### Retrieve All Dogs
#### Method: GET
#### Endpoint: /api/dogs
#### Description: This endpoints creates retreives all the dogs stored in the database.
#### Response:
```
[
  {
    "id": integer,
    "name": "string",
    "age": integer,
    "breed": "string",
    "createdAt": "timestamp"
    "updatedAt": "timestamp"
  },
] 
```
### Update a Dog
#### Method: PUT
#### Endpoint: /api/dogs/:id
#### Description: This endpoints updates a specific dog by it's id.
#### Request Body:
```
{
  "name": "string",
  "age": integer,
  "breed": "string"
}
```
#### Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp"
  "updatedAt": "timestamp"
}
```
### Delete a Dog
#### Method: DELETE
#### Endpoint: /api/dogs/:id
#### Description: This endpoints deletes a dog by it's id from the database.
#### Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp"
  "updatedAt": "timestamp"
},
```