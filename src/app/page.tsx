import Link from "next/link";

export default function Home() {
    const version = "0.1.0";

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section with diagonal design element */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background to-muted -z-10"></div>
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-positive/5"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-positive/3 blur-3xl rounded-full transform translate-x-1/2"></div>
                </div>

                <div className="container mx-auto px-4 pt-20 pb-32 text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-1 mb-8 bg-muted rounded-full">
                        <span className="px-3 py-1 text-xs font-medium text-foreground">
                            Documentation
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-background text-foreground rounded-full">
                            v{version}
                        </span>
                    </div>

                    <h1 className="text-6xl font-bold mb-6 text-foreground">
                        Relay
                    </h1>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <span className="px-3 py-1 bg-positive text-primary-foreground text-xs font-medium rounded-full">
                            Electron
                        </span>
                        <span className="px-3 py-1 border border-border text-foreground text-xs font-medium rounded-full">
                            Go Server
                        </span>
                        <span className="px-3 py-1 border border-border text-foreground text-xs font-medium rounded-full">
                            WebSocket Real-time
                        </span>
                        <span className="px-3 py-1 border border-border text-foreground text-xs font-medium rounded-full">
                            Self-Hosted
                        </span>
                    </div>

                    <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
                        A modern, open-source chat application built with
                        Electron and Go. Features real-time messaging, voice
                        channels, file sharing, and complete self-hosting
                        control.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/docs/client/getting-started"
                            className="px-7 py-3 bg-positive hover:bg-opacity-90 text-primary-foreground font-medium rounded-lg transition-all"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="https://github.com/RelayCore/relay-client"
                            target="_blank"
                            rel="noopener"
                            className="px-7 py-3 bg-secondary hover:bg-opacity-90 text-secondary-foreground font-medium rounded-lg transition-all border border-border"
                        >
                            <span className="flex items-center gap-2">
                                <svg
                                    className="w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                View on GitHub
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
            </div>

            {/* Main Features with offset grid */}
            <div className="container mx-auto px-4 py-24">
                <div className="flex flex-col md:flex-row items-start gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-10">
                            <span className="text-positive font-medium text-sm tracking-wider uppercase">
                                Features
                            </span>
                            <h2 className="text-4xl font-bold mt-2 mb-6 text-foreground">
                                Why choose Relay?
                            </h2>
                            <p className="text-muted-foreground">
                                A complete chat solution designed for privacy,
                                performance, and complete control over your
                                communication platform.
                            </p>

                            <div className="mt-10">
                                <Link
                                    href="/docs/features"
                                    className="inline-flex items-center text-positive hover:underline font-medium"
                                >
                                    View all features
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        ></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Feature 1 */}
                        <div className="border border-border rounded-xl p-6 hover:border-positive transition-colors">
                            <div className="w-12 h-12 bg-positive/10 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-positive"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Real-time Messaging
                            </h3>
                            <p className="text-muted-foreground">
                                Lightning-fast WebSocket-powered messaging with
                                support for text, file attachments, message
                                replies, and user mentions.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="border border-border rounded-xl p-6 hover:border-positive transition-colors mt-0 md:mt-12">
                            <div className="w-12 h-12 bg-positive/10 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-positive"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Voice Channels
                            </h3>
                            <p className="text-muted-foreground">
                                Create dedicated voice channels for team
                                communication with support for mute, deafen, and
                                speaking indicators.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="border border-border rounded-xl p-6 hover:border-positive transition-colors mb-0 md:mb-12">
                            <div className="w-12 h-12 bg-positive/10 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-positive"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h14l-5-5m0 0v10m0-10l5 5"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Self-Hosted
                            </h3>
                            <p className="text-muted-foreground">
                                Complete control over your data and
                                infrastructure. Host your own server with
                                built-in user management and permissions.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="border border-border rounded-xl p-6 hover:border-positive transition-colors mt-0 md:mt-0">
                            <div className="w-12 h-12 bg-positive/10 rounded-lg flex items-center justify-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-positive"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                                Secure & Private
                            </h3>
                            <p className="text-muted-foreground">
                                Ed25519 cryptographic authentication, role-based
                                permissions, and invite-only servers for maximum
                                security.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Architecture Section */}
            <div className="py-24 relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <div className="absolute left-0 top-1/4 -translate-y-1/2 w-64 h-64 bg-positive/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="text-center mb-16">
                        <span className="text-positive font-medium text-sm tracking-wider uppercase">
                            Architecture
                        </span>
                        <h2 className="text-4xl font-bold mt-2 mb-6 text-foreground">
                            Two-part solution
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Relay consists of a modern Electron client and a
                            high-performance Go server, designed to work
                            together seamlessly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Client */}
                        <div className="border border-border rounded-xl p-8 hover:bg-positive/5 transition-all hover:border-positive">
                            <div className="w-16 h-16 bg-positive/10 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-positive"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-foreground">
                                Relay Client
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Modern desktop application built with Electron
                                and TypeScript. Features a beautiful interface
                                with resizable panels, dark/light themes, and
                                cross-platform support.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <span className="w-2 h-2 bg-positive rounded-full mr-3"></span>
                                    Electron
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <span className="w-2 h-2 bg-positive rounded-full mr-3"></span>
                                    TailwindCSS + Radix UI
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <span className="w-2 h-2 bg-positive rounded-full mr-3"></span>
                                    Desktop builds
                                </div>
                            </div>
                        </div>

                        {/* Server */}
                        <div className="border border-border rounded-xl p-8 hover:bg-positive/5 transition-all hover:border-positive">
                            <div className="w-16 h-16 bg-positive/10 rounded-full flex items-center justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-positive"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2m8-8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V4zm0 8a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-foreground">
                                Relay Server
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                High-performance Go server with WebSocket
                                real-time communication, SQLite database, file
                                upload support, and comprehensive user and
                                channel management.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <span className="w-2 h-2 bg-positive rounded-full mr-3"></span>
                                    Go + GORM + SQLite
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <span className="w-2 h-2 bg-positive rounded-full mr-3"></span>
                                    WebSocket + REST API
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <span className="w-2 h-2 bg-positive rounded-full mr-3"></span>
                                    Role-based permissions
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Documentation Section with asymmetrical layout */}
            <div className="py-24 relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <div className="absolute right-0 top-1/4 -translate-y-1/2 w-64 h-64 bg-positive/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-lg mb-16">
                        <span className="text-positive font-medium text-sm tracking-wider uppercase">
                            Documentation
                        </span>
                        <h2 className="text-4xl font-bold mt-2 mb-6 text-foreground">
                            Everything you need to know
                        </h2>
                        <p className="text-muted-foreground">
                            Comprehensive guides to help you set up, deploy, and
                            customize your own Relay chat server and client.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Doc Section 1 */}
                        <Link
                            href="/docs/client/getting-started"
                            className="group block bg-background"
                        >
                            <div className="border border-border rounded-xl p-6 hover:bg-positive/5 transition-all hover:border-positive h-full">
                                <div className="w-10 h-10 bg-positive/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-positive/20 transition-colors">
                                    <span className="font-bold text-positive">
                                        01
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">
                                    Quick Start
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Get your Relay client up and running in
                                    minutes with our step-by-step installation
                                    guide.
                                </p>
                                <span className="text-positive font-medium inline-flex items-center">
                                    Read guide
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </Link>

                        {/* Doc Section 2 */}
                        <Link
                            href="/docs/server-setup"
                            className="group block bg-background"
                        >
                            <div className="border border-border rounded-xl p-6 hover:bg-positive/5 transition-all hover:border-positive h-full">
                                <div className="w-10 h-10 bg-positive/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-positive/20 transition-colors">
                                    <span className="font-bold text-positive">
                                        02
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">
                                    Server Setup
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Deploy and configure your Go server with
                                    database setup, permissions, and security
                                    best practices.
                                </p>
                                <span className="text-positive font-medium inline-flex items-center">
                                    Read guide
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </Link>

                        {/* Doc Section 3 */}
                        <Link
                            href="/docs/client-features"
                            className="group block bg-background"
                        >
                            <div className="border border-border rounded-xl p-6 hover:bg-positive/5 transition-all hover:border-positive h-full">
                                <div className="w-10 h-10 bg-positive/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-positive/20 transition-colors">
                                    <span className="font-bold text-positive">
                                        03
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">
                                    Client Features
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Explore all client features including
                                    channels, voice chat, file sharing, and
                                    identity management.
                                </p>
                                <span className="text-positive font-medium inline-flex items-center">
                                    Read guide
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="bg-muted/30 border border-border rounded-2xl p-8 md:p-16 relative">
                    <div className="absolute bottom-20 left-22 -mb-10 -ml-10 w-40 h-25 bg-positive/10 rounded-full blur-3xl"></div>

                    <div className="relative max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                            Ready to build your own chat platform?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Take control of your team communication with
                            Relay&apos;s self-hosted, secure, and feature-rich
                            chat solution.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/docs/server/getting-started"
                                className="px-6 py-3 bg-positive hover:bg-opacity-90 text-primary-foreground font-medium rounded-lg transition-all"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="https://github.com/RelayCore/relay-client"
                                target="_blank"
                                rel="noopener"
                                className="px-6 py-3 bg-muted hover:bg-muted/80 text-muted-foreground font-medium rounded-lg transition-all border border-border"
                            >
                                View Source Code
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
