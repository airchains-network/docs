---
id: system-requirement
title: System Requirement
sidebar_position: 1
---

# System Requirement

To ensure a smooth experience, considering the following:

1. **Hardware Requirements** : Verify that your hardware meets the Airsettle node's requirements.
2. **Prerequisites & Installation** : Ensure you have the necessary prerequisites and packages installed on your machine.
3. **Port Configuration** : Pay attention to system Port details.

### Hardware Requirements

This outlines the necessary hardware specifications for establishing an Airsettle node

| Component                    | Minimum   | Recommended |
| ---------------------------- | --------- | ----------- |
| RAM                          | 4GB       | 8GB         |
| CPU (amd64/x86 architecture) | 2 core    | 4 core      |
| Storage (SSD)                | 50-100 GB | 50-100 GB   |

<br/>

:::note
While there's no specific preference for an operating system, it's advisable to opt for more secure and stable Linux server distributions, such as Ubuntu, rather than desktop operating systems like macOS or Windows. Furthermore, as the network expands, the minimum storage needs will evolve. To ensure a stable operation of a full node, it's recommended to exceed these minimum requirements.
:::

### Prerequisites & Installation

Our node setup manuals are crafted specifically for Linux distributions with apt compatibility, such as Debian. Moreover, deploying nodes on cloud servers has become a standard approach in the industry.

- [Ignite CLI](https://docs.airchains.io/junction/operate-a-node/system-requirements) v0.27.1
- [Go](https://docs.airchains.io/junction/operate-a-node/system-requirements) v.

### Installation Guide for Ignite CLI

**Step 1: Download the Source Files**

Begin by downloading the appropriate Ignite CLI source files from GitHub. Since we are using an AMD processor on a Linux system, use the following wget command:

:::warning
To correctly set up Ignite for your system, it's important to select the appropriate binary file tailored to your system's specifications. Please use this link Ignite CLI v0.27.1 for the download. We strongly recommend using [Ignite version v0.27.1](https://github.com/ignite/cli/releases/tag/v0.27.1), as other versions might not be compatible with Airsettle.
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