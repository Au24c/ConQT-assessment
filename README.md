# ConQT-assessment

## Node.js API for fetching vendor users:
This project is a Node.js application with an express.js API endpoint.
It retrieves data from a relational database using query parameters.

## Prerequisites:
- Node.js (v14 or higher)
- npm (Node Package Manager)


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Au24c/ConQT-assessment.git
2. Navigate to the project folder:
   ```bash
    cd ConQT-assessment
3. Install the dependencies:
   ```bash
    npm install
4. Run the server:
   ```bash
   node server.js


## API Usage
**Endpoint**: `GET /api/getVendorUsers`

**Query Parameters**:
- `prId`: The purchase request ID (e.g., `1`)
- `custOrgId`: The customer organization ID (e.g., `1`)

**Example Request**:
   http://localhost:3000/api/getVendorUsers?prId=1&custOrgId=1


## Error Handling
- **400 Bad Request**: Missing or invalid `prId` or `custOrgId`.
- **500 Internal Server Error**: Database query failure or server issues.


## PostmanTest
The following screenshot shows a successful response when testing the API using Postman:
![Postman screenshot](https://github.com/user-attachments/assets/c7a77752-7b7b-4cc5-8794-15d107575dff)
