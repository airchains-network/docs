---
id: run-a-full-node
title: Run a Full Node
sidebar_position: 3
---

# Run a Full Node

### Step 1: Clone the WASM Station Repository

Clone the WASM Station repository from the provided GitHub URL and navigate into the cloned directory.

```bash
git clone https://github.com/airchains-network/wasm-station
cd wasm-station;
```

### Step 2: Set Variables and Clean Environment

Establish environment variables for node configuration, including the node's key, blockchain ID, moniker (node's name), and keyring for cryptographic operations.

```bash
KEY=node
CHAINID=station-1
MONIKER=testing
KEYRING="test"
```

### Step 3: Build the Binary

Ensure you are working with the latest codebase and generate the necessary executables for running the node.

```bash
rm -f ./build
make build
```

### Step 4: Initialize the Node

Create the foundational setup for the node, including generating configuration files and setting up the initial blockchain state.

```bash
./build/wasmstationd init $MONIKER --chain-id $CHAINID
```

### Step 5: Prepare Account

Generate a new cryptographic key pair that will be used for validating transactions and participating in the blockchain network.

```bash
./build/wasmstationd keys add $KEY --keyring-backend $KEYRING
```

### Step 6: Add Account Balance to Genesis

Ensure that the account has the necessary funds to start operating on the network, facilitating transactions and other operations.

```bash
./build/wasmstationd genesis add-genesis-account $KEY 100000000stake --keyring-backend $KEYRING
```

### Step 7: Create and Sign a Genesis Transaction (gentx)

Establish the account as a validator or active participant in the network from the very first block, enabling it to propose and validate blocks.

```bash
./build/wasmstationd genesis gentx $KEY 70000000stake --keyring-backend $KEYRING --chain-id $CHAINID
./build/wasmstationd genesis collect-gentxs
```

### Step 8: Start Node

Activate the node, connecting it to the network to begin processing transactions and engaging in consensus activities.

```bash
./build/wasmstationd start --api.enables
```

Follow these steps to initialize and start the WASM Station node for your blockchain network. Ensure each step is executed correctly to ensure the proper functioning of the node.
