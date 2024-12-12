---
id: system-requirements
title: System Requirements
sidebar_position: 1
---

# System Requirements

To ensure a smooth experience, consider the following:

1. **Hardware Configuration**: Verify that your hardware meets the requirements.

2. **Prerequisites & Installation**: Ensure you have the necessary prerequisites and packages installed on your machine.

## Hardware Configuration

This outlines the necessary hardware specifications for establishing an Junction node

| Component                    | Minimum   | Recommended |
| ---------------------------- | --------- | ----------- |
| RAM                          | 4GB       | 8GB         |
| CPU (amd64/x86 architecture) | 2 core    | 4 core      |
| Storage (SSD)                | 50-100 GB | 200-300 GB  |

:::note
While there's no specific preference for an operating system, it's advisable to opt for more secure and stable Linux server distributions, such as Ubuntu, rather than desktop operating systems like macOS or Windows. Furthermore, as the network expands, the minimum storage needs will evolve. To ensure a stable operation of a full node, it's recommended to exceed these minimum requirements.
:::

## Prerequisites & Installation

Our node setup manuals are crafted specifically for Linux distributions with apt compatibility, such as Debian. Moreover, deploying nodes on cloud servers has become a standard approach in the industry.

- [Go](https://go.dev/doc/install) v1.20+
- [jq](https://stedolan.github.io/jq/download/)

### Go Installation Guide (Version 1.20+)

**Step 1: Download the Go Binary**

Firstly, download the Go version 1.20 or higher package. You can get it from the official Go website. For Linux systems, use the following wget command, replacing `<version>` with the specific version number you want to install (e.g., 1.20.1):

```bash
wget https://dl.google.com/go/go<version>.linux-amd64.tar.gz
```

**Step 2: Extract the TAR File**

Add `/usr/local/go/bin` to the PATH environment variable. You can do this by adding the following line to your `$HOME/.profile` or `$HOME/.bashrc` file (depending on your shell):

```bash
export PATH=$PATH:/usr/local/go/bin
```

After editing the file, apply the changes by running `source $HOME/.profile` or `source $HOME/.bashrc.`

**Step 3: Verify Installation**

To verify that Go is installed correctly, open a new terminal and run:

```bash
go version
```

This should display the version of Go that you have installed, confirming the successful installation.

:::note
Ensure that your system meets the necessary prerequisites for installing Go, such as having a compatible Linux distribution and sufficient user permissions. The process may slightly vary depending on the specific Linux distribution you are using.
:::

### jq Installation Guide

**Step 1: Update Package List**

Begin by updating your package list to ensure you have access to the latest versions available in the repository. Run:

```bash
sudo apt-get update
```

**Step 2: Install jq**

Next, install `jq` by executing the following command:

```bash
sudo apt-get install jq
```

**Step 3: Verify Installation**

Once the installation is complete, you can verify it by checking the version of `jq`. Type:

```bash
jq --version
```

This command will display the installed version of `jq`, confirming its successful installation.

:::note
This guide is tailored for systems using the APT package manager, commonly found in Debian-based distributions like Ubuntu. If you're using a different Linux distribution or package manager, the commands might vary slightly.
:::
