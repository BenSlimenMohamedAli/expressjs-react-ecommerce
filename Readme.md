# Express.js React E-commerce

This is an e-commerce project built with Express.js for the backend and React for the frontend. The project is containerized and orchestrated using Docker Compose for easy setup and deployment.

## Features

- User authentication and authorization
- Product browsing, searching, and filtering
- Shopping cart functionality
- Checkout process with payment integration (to be implemented)
- Admin panel for managing products and orders (to be implemented)

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/expressjs-react-ecommerce.git
cd expressjs-react-ecommerce
```

2. Create a `.env` file in the root directory with the following environment variables:

```
# Express.js Backend
PORT=5000
MONGO_URI=mongodb://mongo:27017/ecommerce
# Change the MONGO_URI if necessary, for example:
# MONGO_URI=mongodb://localhost:27017/ecommerce

# React Frontend
REACT_APP_BACKEND_URL=http://localhost:5000
```

In the `MONGO_URI` variable, change `mongodb://mongo:27017/ecommerce` to the appropriate MongoDB connection URL if needed. For example, if you are running MongoDB locally, you can change it to `mongodb://localhost:27017/ecommerce`.

3. Build and start the Docker containers:

```bash
docker-compose up --build
```

4. Access the application in your web browser at `http://localhost:3000`.

## Directory Structure

```
expressjs-react-ecommerce/
  ├── client/            # React frontend
  │   ├── public/
  │   └── src/
  ├── server/            # Express.js backend
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   └── app.js
  ├── .env               # Environment variables
  ├── docker-compose.yml # Docker Compose configuration
  └── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
