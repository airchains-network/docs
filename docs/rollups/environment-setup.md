---
id: environment-setup
title: Environment Setup
description: Complete guide for setting up your development environment to work with the network framework. Includes installation of required dependencies, programming languages, and tools.
sidebar_position: 16
---

# Environment Setup

This guide will help you set up your development environment with all the necessary tools and dependencies required to work with the network framework. Follow these steps in order to ensure a proper setup.

## Table of Contents
- [Ubuntu Dependencies](#ubuntu-dependencies)
- [Go Installation](#go-installation)
- [Rust Installation](#rust-installation)
- [Node.js Installation](#nodejs-installation)

## Ubuntu Dependencies

Install the required system dependencies using the following command:

```bash
sudo apt install -y \
  build-essential \
  llvm-dev \
  libclang-dev \
  clang \
  curl \
  tar \
  wget \
  aria2 \
  pkg-config \
  libssl-dev \
  jq \
  git \
  make \
  ncdu
```

Verify the installation:
```bash
clang --version
git --version
```

## Go Installation

Install Go version 1.24.0 (or the latest stable version):


1.  **Download the Go Package:**
    Download Go version 1.20 or higher. Replace `<version>` with the specific version number (e.g., `1.20.1`):
    ```bash
    wget https://dl.google.com/go/go<version>.linux-amd64.tar.gz
    ```
2.  **Extract the Tar File:**
    Extract the downloaded file to `/usr/local`, the recommended location for Go installations:
    ```bash
    sudo tar -C /usr/local -xzf go<version>.linux-amd64.tar.gz
    ```
3.  **Set Up Environment Variables:**
    Add `/usr/local/go/bin` to your `PATH`. Add the following line to your `~/.profile` or `~/.bashrc` file:
    ```bash
    export PATH=$PATH:/usr/local/go/bin
    ```
    After editing, apply the changes:
    ```bash
    source $HOME/.profile
    # OR
    source $HOME/.bashrc
    ```
4.  **Verify Installation:**
    Open a new terminal and run:
    ```bash
    go version
    ```

## Rust Installation

Install Rust and its toolchain:

1.  **Install Rust:**
    Use `rustup` to simplify the installation process:
    ```bash
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```
2.  **Configure Environment Variables:**
    Add the Rust bin directory to your `PATH`. Add the following line to your `~/.profile` or `~/.bashrc` file:
    ```bash
    export PATH=$PATH:$HOME/.cargo/bin
    ```

3.  **Verify Installation:**
    Open a new terminal and run:
    ```bash
    rustc --version
    ```

## Node.js Installation

Install Node.js version 22:

```bash
cd ~
curl -sL https://deb.nodesource.com/setup_22.x -o nodesource_setup.sh
# Optional: Review the script before running
# nano nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
```

Verify the installation:
```bash
node --version
npm --version
```
