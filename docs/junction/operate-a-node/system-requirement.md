---
id: system-requirement
title: System Requirements
sidebar_position: 1
---

# System Requirements

To ensure a smooth experience, consider the following:

1. **Hardware Requirements**: Verify that your hardware meets the Junction node requirements.
2. **Prerequisites & Installation**: Ensure you have the necessary prerequisites and packages installed on your machine.
3. **Port Configuration**: Configure the required system ports.

### Hardware Requirements

These are the necessary hardware specifications for running a Junction node:

| Component                    | Minimum   | Recommended |
| ---------------------------- | --------- | ----------- |
| RAM                          | 4GB       | 8GB         |
| CPU (amd64/x86 architecture) | 2 core    | 4 core      |
| Storage (SSD)                | 100 GB    | 100+ GB     |

<br/>

:::note
While there's no specific operating system requirement, we recommend using secure and stable Linux server distributions like Ubuntu rather than desktop operating systems like macOS or Windows. As the network grows, storage requirements may increase. For stable operation of a full node, we recommend exceeding these minimum specifications.
:::

### Prerequisites & Installation

Our node setup guides are designed for Linux distributions with apt package management, such as Debian. Running nodes on cloud servers is an industry standard approach.

Required software:
<!-- - [Ignite CLI](https://docs.airchains.io/junction/operate-a-node/system-requirements) v0.27.1 -->
- [Go](https://docs.airchains.io/junction/operate-a-node/system-requirements) v1.20+

<!-- ### Installation Guide for Ignite CLI -->

**Step 1: Download the Source Files**

Download the Ignite CLI source files from GitHub.

:::info
To correctly set up Ignite for your system, it's important to select the appropriate binary file tailored to your system's specifications. Please use this link Ignite CLI v0.27.1 for the download. We strongly recommend using [Ignite version v0.27.1](https://github.com/ignite/cli/releases/tag/v0.27.1), as other versions might not be compatible with Junction.
:::

```bash
wget https://github.com/ignite/cli/releases/download/v0.27.1/ignite_0.27.1_linux_amd64.tar.gz
```

**Step 2: Extract the Tar File**

Next, change the file permissions to make the downloaded file executable. Run:

```bash
chmod +x ignite_0.27.1_linux_amd64.tar.gz
```

**Step 3: Extract the Tar File**

Extract the contents of the TAR file using:

```bash
tar -xvf ignite_0.27.1_linux_amd64.tar.gz
```

This will create the Ignite executable binary.

**Step 4: Move the Binary**

Move the extracted Ignite binary to /usr/local/bin to make it globally accessible. Use:

```bash
sudo mv ignite /usr/local/bin
```

**Step 5: Update Environment Variables**

Ensure the Ignite CLI is available in your system's PATH by adding it to the environment variables. This step may vary based on your shell configuration.

**Step 6: Verify Installation**

Finally, confirm the installation by checking the version of the Ignite CLI. Run:

```bash
ignite version
```

This should display the version of the installed Ignite CLI, indicating successful installation.

### Go Installation Guide (Version 1.20+)

**Step 1: Download the Go Package**

Firstly, download the Go version 1.20 or higher package. You can get it from the official Go website. For Linux systems, use the following wget command, replacing `<version>` with the specific version number you want to install (e.g., 1.20.1):

```bash
wget https://dl.google.com/go/go<version>.linux-amd64.tar.gz
```

**Step 2: Extract the Tar File**

Extract the downloaded tarball to the `</usr/local>` directory. This is the recommended location for Go installations. Run:

```bash
sudo tar -C /usr/local -xzf go<version>.linux-amd64.tar.gz
```

**Step 3: Set Up Environment Variables**

Add `</usr/local/go/bin>` to the PATH environment variable. You can do this by adding the following line to your `<$HOME/.profile>` or `<$HOME/.bashrc>` file (depending on your shell):

```bash
export PATH=$PATH:/usr/local/go/bin
```

After editing the file, apply the changes by running source `<$HOME/.profile>` or `<source $HOME/.bashrc.>`

**Step 4: Verify Installation**

To verify that Go is installed correctly, open a new terminal and run:

```bash
go version
```

:::note
**Note** : Ensure that your system meets the necessary prerequisites for installing Go, such as having a compatible Linux distribution and sufficient user permissions. The process may slightly vary depending on the specific Linux distribution you are using.
:::

## Port Configuration

To ensure smooth operation, the system requires specific ports to be configured. Each port serves a distinct purpose as detailed below:

1. **Port 26657**: JSON RPC Port

   - This port is used for JSON-RPC communications. It's essential for enabling interactions based on the JSON-RPC protocol.

2. **Port 1317: Tendermint RPC**

   - Dedicated to Tendermint RPC (Remote Procedure Call) services, this port facilitates Tendermint-specific RPC interactions.

3. **Port 26656: Peer-to-Peer Network Connection**

   - Utilized for peer-to-peer network communications. This port is crucial for establishing and maintaining connections between different nodes in the network.

4. **Port 4500: Faucet**

   - This port is designated for the Faucet service, which is typically used in devnet & testnets to provide test tokens for users.

<br />

:::note
Ensure that these ports are correctly configured and open on your system to enable the intended functionalities and communication protocols. This setup is key to maintaining efficient and uninterrupted network operations.
:::
