---
id: prerequisites
title: Prerequisites
description: This guide walks you through configuring your development setup, ensuring seamless interaction with the fhEVM network for encrypted smart contract execution
slug: /develop/exercise/hands-on-fhevm/prerequisites
hide_table_of_contents: false
sidebar_position: 2
---

# Prerequisites

Here are the prerequisites to set up your development environment for working with **fhEVM**.

Before proceeding, ensure your system meets the following requirements:

- **Operating System**: Linux, macOS, or Windows with WSL2
- **Go**: Version `v1.23.x` or higher
- **Docker**: Version `v26.x.x` or higher
- **Node.js**: Node.js `v20.x` or higher

---

## Step 1: Install Go

1. Visit the [Go Downloads Page](https://go.dev/dl/) and download the installer for your operating system.
2. Follow the installation instructions specific for your OS.
3. Verify the installation by running the following command:

   ```bash
   go version
   ```

   You should see the installed Go version in the output.

---

## Step 2: Install Docker

1. Follow the official Docker installation guide for your operating system:
   - [Install Docker on Linux](https://docs.docker.com/engine/install/)
   - [Install Docker on macOS](https://docs.docker.com/docker-for-mac/install/)
2. After installation, verify Docker is installed correctly:

   ```bash
   docker --version
   ```

   You should see the installed Docker version in the output.

3. Ensure Docker can run without `sudo` (Linux users only):

   ```bash
   sudo groupadd docker
   sudo usermod -aG docker $USER
   newgrp docker
   ```

   Verify it works:

   ```bash
   docker run hello-world
   ```

---

## Step 3: Install Docker Compose Plugin

1. Follow the official Docker Compose plugin installation guide for your operating system:
   - [Install Docker Compose Plugin on Linux](https://docs.docker.com/compose/install/linux/)
   - [Install Docker Compose Plugin on macOS](https://docs.docker.com/compose/install/mac/)
2. After installation, verify Docker Compose plugin is installed correctly:

   ```bash
   docker compose version
   ```

   You should see the installed Docker Compose plugin version in the output.

---

## Step 4: Install Node.js

1. Install Node.js and npm using the official guide for your operating system: [Node.js Downloads](https://nodejs.org/en/download/)

   - Select the **LTS** version for better stability.

2. Verify the installation by running the following commands:

   ```bash
   node -v
   npm -v
   ```

   These should output the installed Node.js and npm versions.
