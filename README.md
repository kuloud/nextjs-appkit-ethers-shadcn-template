# Next.js Dapps Starter Template

This is a https://nextjs.org/ project bootstrapped with [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app), specifically designed as a streamlined development template for decentralized applications (Dapps). It integrates commonly used configurations and tools to accelerate the development process.

## 🚀 Features

1. **Reown AppKit with ethers** - Integrated wallet connection solution
2. **shadcn-ui** - Modern, accessible component library
3. **Reown SIWX** - The Sign In With X feature enables decentralized applications (Dapps) to authenticate users seamlessly across multiple blockchain networks, such as Ethereum, Solana, and Bitcoin, since this feature is chain agnostic.

## 🛠️ Getting Started

### 1. Create a Reown Project

- Visit https://dashboard.reown.com/ and create a new project
- Copy your Project ID from the dashboard

### 2. Configure Environment Variables

- Rename `.env.example` to `.env`
- Set your Project ID as the value for `NEXT_PUBLIC_PROJECT_ID`:
  ```
  NEXT_PUBLIC_PROJECT_ID=your-project-id-here
  ```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Start Development Server

```bash
pnpm dev
```

### 5. Access Your Application

Open http://localhost:3000 in your browser to view the running application.

## 🔧 Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Wallet Integration**: Reown AppKit with ethers.js
- **UI Components**: shadcn-ui
- **Identity Features**: Reown SIWX
- **Package Manager**: pnpm (recommended)

## 📦 Included Configurations

- Optimized Next.js configuration with default performance settings
- Pre-configured environment variables structure
- Development-ready project structure
- Essential Dapp development tools integration

## 🤝 Recommended Tools

- **Package Manager**: pnpm (recommended), npm, or yarn
- **Development Environment**: VS Code or preferred code editor
- **Browser**: Modern browser with WebSocket support

## 📄 Project Structure

```
├── .env                # Environment variables (rename from .env.example)
├── .env.example        # Environment variables template
├── package.json        # Project dependencies and scripts
├── next.config.js      # Next.js configuration
├── ...                 # Additional project files
```

## 📚 Documentation

- https://nextjs.org/docs
- https://docs.reown.com/
- https://ui.shadcn.com/
- https://docs.ethers.org/

## ⚡ Quick Deployment

This template is optimized for deployment to Vercel, the creators of Next.js:

1. Push your code to a Git repository
2. Import the project to https://vercel.com/
3. Follow the deployment wizard

## 🛡️ Security Considerations

- Keep your Project ID secure and do not expose it in client-side code unnecessarily
- Follow best practices for wallet connection and user authentication
- Regularly update dependencies to maintain security

---

This template provides a solid foundation for building Dapps with modern tooling and best practices. Customize and extend it according to your specific project requirements.
