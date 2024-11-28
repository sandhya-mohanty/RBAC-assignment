# RBAC-assignment
1. clone this repository:- https://github.com/sandhya-mohanty/RBAC-assignment.git
2. npm install
3. npm run dev

1. Register a New User
Endpoint: POST /api/auth/register
2. Login a User
Endpoint: POST /api/auth/login
3. Logout a User
Endpoint: POST /api/auth/logout
Request Body: (No body required)
Headers: (JWT token in the Authorization header)
4. Get All Users (Admin Only)
Endpoint: GET /api/users
Headers: (JWT token in the Authorization header)