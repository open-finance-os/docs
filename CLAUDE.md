# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Mintlify documentation site that demonstrates how to use Mintlify for creating modern documentation with AI development tool integrations.

## Development Commands

### Local Development
```bash
# Install Mintlify CLI globally (one-time setup)
npm i -g mint

# Start development server (run from project root with docs.json)
mint dev

# Use custom port if 3000 is occupied
mint dev --port 3333

# Update Mintlify CLI to latest version
npm mint update

# Validate all links in documentation
mint broken-links
```

### Prerequisites
- Node.js v19 or higher
- Mintlify CLI (`npm i -g mint`)

## Architecture & Structure

### Core Technology
- **Mintlify**: Documentation platform that generates static sites from MDX files
- **MDX**: Markdown with JSX components for rich, interactive documentation
- **docs.json**: Central configuration defining navigation, theming, and integrations

### Key Directories
- `/essentials/`: Core documentation concepts (navigation, settings, markdown, code blocks)
- `/ai-tools/`: AI development tool integrations (Claude Code, Cursor, Windsurf)
- `/api-reference/`: API documentation with OpenAPI spec integration
- `/snippets/`: Reusable content components

### Important Files
- `docs.json`: Primary configuration for navigation structure, theme, and features
- `index.mdx`: Homepage with card-based navigation
- `quickstart.mdx`: Getting started guide
- `development.mdx`: Development setup instructions

## Deployment

Changes pushed to the default branch are automatically deployed via GitHub integration configured in the Mintlify dashboard.

## MDX Component System

This project uses Mintlify's built-in components:
- `<Card>`, `<CardGroup>`: Grid-based navigation cards
- `<Steps>`, `<Step>`: Step-by-step tutorials
- `<Tabs>`, `<Tab>`: Tabbed content organization
- `<Accordion>`, `<AccordionGroup>`: Collapsible content sections
- `<Info>`, `<Warning>`, `<Note>`, `<Tip>`: Callout blocks
- `<Frame>`: Image containers with styling

## Navigation Configuration

The site uses a tabbed navigation structure defined in `docs.json`:
1. **Documentation Tab**: Essentials, AI Tools sections
2. **API Reference Tab**: OpenAPI-based API documentation

## Contextual AI Tools

The site integrates contextual tools for copying code to various AI assistants (ChatGPT, Claude, Perplexity, MCP, Cursor, VSCode) via the `contextualSearch` configuration in docs.json.