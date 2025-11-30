# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kavitea is a Rails 8 corporate website for a healthy beverage company (electrolyte sticks and ready-to-drink tea). The site targets potential business partners in China, emphasizing the brand's organic, zero-calorie, zero-sugar products.

## Tech Stack

- Ruby 3.3.1
- Rails 8.0.2
- PostgreSQL
- Hotwire (Turbo + Stimulus)
- Propshaft (asset pipeline)
- Importmap (JS modules)
- Solid Queue, Solid Cache, Solid Cable (database-backed background jobs, cache, and websockets)
- Kamal + Thruster (deployment)

Estos son los colores que representan la marca.

A. Verde Kavitea (Primario 1) – Orgánico & Saludable

HEX: #0E4B3C
Simboliza: hidratación, naturaleza, confianza, frescura.

B. Azul Marino Kavitea (Primario 2) – Premium & Internacional

HEX: #0A1D31
Simboliza: seriedad, calidad, exportación, presencia global.

## Common Commands

```bash
# Setup (installs deps, prepares DB, starts server)
bin/setup

# Development server
bin/dev

# Run all tests
bin/rails test

# Run a single test file
bin/rails test test/models/user_test.rb

# Run a specific test by line number
bin/rails test test/models/user_test.rb:10

# System tests
bin/rails test:system

# Linting
bin/rubocop

# Auto-fix lint issues
bin/rubocop -a

# Security scan
bin/brakeman

# Database commands
bin/rails db:create
bin/rails db:migrate
bin/rails db:seed
bin/rails db:prepare  # creates + migrates + seeds

# Background jobs
bin/jobs
```

## Architecture Notes

- **Multi-database production setup**: Primary database plus separate databases for cache, queue, and cable (see `config/database.yml`)
- **Linting**: Uses rubocop-rails-omakase style guide
- **Deployment**: Docker-based with Kamal; production runs behind Thruster for HTTP caching/compression
- **Assets**: Propshaft + Importmap (no Node.js required)

## Language

Content and business context are primarily in Spanish (targeting Latin American/Spanish markets and Chinese partners). Code and technical documentation should remain in English.
