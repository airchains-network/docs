---
id: pre-requisites
title: Pre requisites
description: Pre-requisites for validating and running your node
sidebar_position: 9
slug: /validate-and-run-your-node/pre-requisites
---

# Pre requisites

Our node setup guides are designed for **Linux distributions with `apt` package management**, such as Debian. Running nodes on cloud servers is an industry-standard approach.

## System Requirements

### Hardware Specifications

| Component                    | Minimum | Recommended |
| ---------------------------- | ------- | ----------- |
| RAM                          | 4GB     | 8GB         |
| CPU (amd64/x86 architecture) | 2 cores | 4 cores     |
| Storage (SSD)                | 100 GB  | 100+ GB     |

:::info
While there are no specific operating system requirements, we recommend using secure and stable Linux server distributions like Ubuntu. As the network grows, storage requirements may increase. For stable operation of a full node, we recommend exceeding these minimum specifications.
:::

### Software Requirements

- Go v1.20+
- Rust v1.70+

## Installation Guide

### Go Installation Guide (Version 1.20+)

Follow these steps to install Go:

1. **Download the Go Package:**
    Download Go version 1.20 or higher. Replace `<version>` with the specific version number (e.g., `1.20.1`):

    ```bash
    wget https://dl.google.com/go/go<version>.linux-amd64.tar.gz
    ```

2. **Extract the Tar File:**
    Extract the downloaded file to `/usr/local`, the recommended location for Go installations:

    ```bash
    sudo tar -C /usr/local -xzf go<version>.linux-amd64.tar.gz
    ```

3. **Set Up Environment Variables:**
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

4. **Verify Installation:**
    Open a new terminal and run:

    ```bash
    go version
    ```

    **Note:** Ensure your system meets the necessary prerequisites for installing Go, such as a compatible Linux distribution and sufficient user permissions.

### Rust Installation Guide (Version 1.70+)

Follow these steps to install Rust:

1. **Install Rust:**
    Use `rustup` to simplify the installation process:

    ```bash
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```

2. **Configure Environment Variables:**
    Add the Rust bin directory to your `PATH`. Add the following line to your `~/.profile` or `~/.bashrc` file:

    ```bash
    export PATH=$PATH:$HOME/.cargo/bin
    ```

3. **Verify Installation:**
    Open a new terminal and run:

    ```bash
    rustc --version
    ```

    **Note:** Ensure your system meets the necessary prerequisites for installing Rust, such as a compatible Linux distribution and sufficient user permissions.

---

### Port Configuration

| Port  | Purpose        | Description                                  |
| ----- | -------------- | -------------------------------------------- |
| 26657 | JSON-RPC Port  | Used for JSON-RPC communications             |
| 1317  | Tendermint RPC | Dedicated to Tendermint RPC services         |
| 26656 | P2P Network    | Used for peer-to-peer network communications |
| 9090  | gRPC           | Used for gRPC communications                 |

---
