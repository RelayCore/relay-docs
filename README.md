# Relay Documentation

Official documentation for Relay - a modern, open-source chat application built with Electron and Go.

## Live Documentation

Visit the documentation at: **https://relaycore.github.io/relay-docs/**

## About Relay

Relay is a complete chat solution designed for privacy, performance, and complete control over your communication platform. It consists of two main components:

### [Relay Client](https://github.com/RelayCore/relay-client)

-   Modern desktop application built with Electron and TypeScript
-   Beautiful interface with resizable panels and dark/light themes
-   Cross-platform support (Windows, macOS, Linux)
-   Real-time messaging with file attachments, replies, and mentions
-   Voice channels with mute, deafen, and speaking indicators

### [Relay Server](https://github.com/RelayCore/relay-server)

-   High-performance Go server with WebSocket real-time communication
-   SQLite database with GORM ORM
-   RESTful API with comprehensive user and channel management
-   Role-based permissions system
-   Ed25519 cryptographic authentication
-   File upload support

## Key Features

-   **Real-time Messaging** - Lightning-fast WebSocket-powered communication
-   **Voice Channels** - Dedicated voice communication for teams
-   **Self-Hosted** - Complete control over your data and infrastructure
-   **Secure & Private** - Ed25519 authentication and invite-only servers
-   **Cross-Platform** - Desktop builds for all major operating systems

## Documentation Structure

-   **Client Documentation** - Installation, features, and usage guides
-   **Server Setup** - Deployment, configuration, and best practices
-   **API Reference** - Complete REST API and WebSocket documentation
-   **Architecture** - Technical details and system design

## Development

This documentation site is built with:

-   [Next.js 15](https://nextjs.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [TypeScript](https://www.typescriptlang.org/)

### Prerequisites

-   Node.js 18 or higher
-   npm or yarn

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/RelayCore/relay-docs.git
cd relay-docs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

### Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Contributing

We welcome contributions to improve the documentation! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Related Repositories

-   **Relay Client**: [github.com/RelayCore/relay-client](https://github.com/RelayCore/relay-client)
-   **Relay Server**: [github.com/RelayCore/relay-server](https://github.com/RelayCore/relay-server)

## License

This documentation is open source and available under the [MIT License](LICENSE).

---
