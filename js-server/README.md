# JS Express Server

A simple Express.js server running on port 8001.

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### Installation

1. Navigate to the js-server directory:
   ```bash
   cd js-server
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Server

#### Development Mode (with nodemon)
```bash
npm start
# or
yarn start
```

#### Production Mode
```bash
npm run prod
```

The server will start on `http://localhost:8001`

### Docker

#### Build the Docker image:
```bash
docker build -t js-express-server .
```

#### Run the container:
```bash
docker run -p 8001:8001 js-express-server
```

### Available Endpoints

- `GET /health` - Health check endpoint

## Features

- Express.js framework
- JSON middleware
- Request logging
- Nodemon for development (auto-restart on file changes)
- Docker support
- Health check endpoint
