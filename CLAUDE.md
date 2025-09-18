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

# Mintlify documentation

## Working relationship
- You can push back on ideas-this can lead to better documentation. Cite sources and explain your reasoning when you do so
- ALWAYS ask for clarification rather than making assumptions
- NEVER lie, guess, or make up information

## Project context
- Format: MDX files with YAML frontmatter
- Config: docs.json for navigation, theme, settings
- Components: Mintlify components

## Content strategy
- Document just enough for user success - not too much, not too little
- Prioritize accuracy and usability of information
- Make content evergreen when possible
- Search for existing information before adding new content. Avoid duplication unless it is done for a strategic reason
- Check existing patterns for consistency
- Start by making the smallest reasonable changes

## docs.json

- Refer to the [docs.json schema](https://mintlify.com/docs.json) when building the docs.json file and site navigation

## Frontmatter requirements for pages
- title: Clear, descriptive page title
- description: Concise summary for SEO/navigation

## Writing standards
- Second-person voice ("you")
- Prerequisites at start of procedural content
- Test all code examples before publishing
- Match style and formatting of existing pages
- Include both basic and advanced use cases
- Language tags on all code blocks
- Alt text on all images
- Relative paths for internal links

## Git workflow
- NEVER use --no-verify when committing
- Ask how to handle uncommitted changes before starting
- Create a new branch when no clear branch exists for changes
- Commit frequently throughout development
- NEVER skip or disable pre-commit hooks

## Do not
- Skip frontmatter on any MDX file
- Use absolute URLs for internal links
- Include untested code examples
- Make assumptions - always ask for clarificationThe site integrates contextual tools for copying code to various AI assistants (ChatGPT, Claude, Perplexity, MCP, Cursor, VSCode) via the `contextualSearch` configuration in docs.json.