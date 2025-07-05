# JS Express Server

A simple Express.js server running on port 8001.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Navigate to the `js-server` directory:
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

The server will start on [http://localhost:8001](http://localhost:8001).

### Docker

This project includes a Dockerfile for containerized deployment.

#### Build the Docker image

```bash
docker build -t js-express-server .
```

#### Run the container

```bash
docker run -p 8001:8001 js-express-server
```

### SSH Access

The dev container includes an SSH server. To use it:

1. Set a password for your user (first time only).
2. Forward the SSH port to your local machine.
3. Connect using your preferred SSH/SFTP/SSHFS client.

### GitHub CLI

The GitHub CLI (`gh`) is pre-installed.  
**Note:** When using `gh api -f`, use multiple `-f` flags for hierarchical keys and string values (object values are not supported).

### Node.js Tooling

- Node.js, npm, and eslint are pre-installed for development.

### Available Endpoints

- `GET /health` — Health check endpoint

## Features

- Express.js framework
- JSON middleware
- Request logging
- Nodemon for development (auto-restart on file changes)
- Docker support
- Health check endpoint
- SSH server for remote access
- Pre-installed GitHub CLI and Node.js tooling

