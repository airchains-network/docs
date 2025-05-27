---
id: quick-rollup-deployment
title: Quick Rollup Deployment
description: Quick rollup deployment guide
sidebar_position: 17
---

# Quick Rollup Deployment

## Orchestrator

The Orchestrator is a CLI-based service designed to manage, configure, and run multiple rollup dependencies and service binary in the background using a unified configuration interface. It simplifies deployment and initialization by centralizing key parameters in a single config.toml file. And it also provides a simple way to manage the rollup and its dependencies.

---

## Prerequisites

- [Environment Setup](./environment-setup.md)
- [Rust Installation](./environment-setup.md#rust-installation)
- [Go Installation](./environment-setup.md#go-installation)
- [Node.js Installation](./environment-setup.md#nodejs-installation)

### Download and setup the Orchestrator Binary

#### Download the Binary

```bash
wget https://github.com/airchains-network/orchestrator/releases/download/v0.0.1-beta.1/orchestrator -O /path/to/your/orchestrator
```

#### Make the Binary Executable

```bash
chmod +x /path/to/your/orchestrator
```

#### Move the Binary to the Bin Directory

```bash
sudo mv /path/to/your/orchestrator /usr/local/bin/orchestrator
```

### Configuration the Orchestrator

#### Config File Format

```toml
[junction]
# Unique name identifying the operator node.
moniker = "<moniker>"

# Unique chain ID for the operator; format: <moniker>_<4-digit>-<1-digit>.
chain_id = "<chain_id>"

# Token denomination used by the operator; default is 'aether'.
denom_name = "<denom_name>"

# List of key names included in the operator's genesis, registered in the varanasi chain.
keys = ["<key_name1>", "<key_name2>", "<key_name3>"]

# Initial token allocation for each key defined in the genesis.
supply = ["<supply1>", "<supply2>", "<supply3>"]

# RPC endpoint URL for the Varanasi chain node.
node_rpc_address = "<node_rpc_address>"

# api endpoint URL for the Varanasi chain node.
node_api_address = "<node_api_address>"

[keygen]
# gRPC endpoint URL for the keygen service in the Varanasi chain.
node_grpc_address = "<node_grpc_address>"

# secret_key_id is the key id used to add the secret identity to user FHE key
secret_key_id = "<secret_key_id>"

# prover baisc details
[prover]
# prover type name
prover_type = "<prover_type>"
# prover endpoint
# local example : http://<ip-address>:8080
# server exaample : https://<domain_name>/<prover_endpoint>
prover_endpoint = "<prover_endpoint>"

# da details
[da]
# Data availability (DA) layer to be used; options: celestia, avail, eigen.
da_type = "<da_type>"
# da rpc endpoint
da_rpc_address = "<da_rpc_address>"
```

:::note
The config file is located in `$HOME/.orchestrator/config.toml`. with add the baisc details of this config file.
:::

Here’s a more formal rephrasing of your documentation section:

---

## Usage

```bash
orchestrator
```

:::note
Upon executing the above command, you will be prompted to enter your sudo password:

```bash
./target/release/orchestrator
[sudo] password for $USER:
```

This prompt appears because the orchestrator requires elevated permissions to initiate the rollup and its dependencies in the background.
:::

Once the password is provided, the orchestrator will automatically launch the rollup along with all required dependencies in the background.

After initialization, the orchestrator will:

- Fund the designated **Junction wallet address** and **Data Availability (DA) wallet address**
- Display all logs and wallet information directly in the terminal output

#### Sample Output

<img src="/img/orchestrator-output.png" alt="orchestrator output" />
