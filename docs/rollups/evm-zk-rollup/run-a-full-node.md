---
id: run-a-full-node
title: Run a Full Node
sidebar_position: 3
---

# Run a Full Node

## Step 1: Clone the EVM Station Repository

Clone the EVM Station repository from the GitHub URL provided and navigate into the cloned directory.

```bash
git clone https://github.com/airchains-network/evm-station
cd evm-station
```

## Step 2: Declare and Initialize Variables

Declare and initialize variables essential for configuring the node. These variables define the node's identity, network parameters, cryptographic settings, file paths, and persistent peers.

```bash
KEYS=("dev0" "dev1" "dev2")
CHAINID="test-1234"
MONIKER="localtestnet"
PersistentPeers="id1@ip1:port1,id2@ip2:port2" // Example format replace with actual peers

KEYRING="test"
KEYALGO="eth_secp256k1"
LOGLEVEL="info"
HOMEDIR="./.evmstation"
EVMCHAINID="1234"
```

## Step 3: Cleanup and Build Process

Ensure a clean state before compiling the source code to prevent potential conflicts from previous builds.

```bash
rm -rf ./build
make clean
make build
```

## Step 4: Blockchain Node Initialization

Set up the basic structure for the node's operation, including directory structures and configuration files under the specified home directory.

```bash
/build/bin/evmstationd init $MONIKER --chain-id $CHAINID --home "$HOMEDIR"
```

## Step 5: Configuration of Client and Node

Configure the node's client software to use a specific key management system and create a new key pair for transactions and blockchain interactions.

```bash
./build/bin/evmstationd config set client keyring-backend $KEYRING --home "$HOMEDIR"

./build/bin/evmstationd keys add ${KEYS[0]} --keyring-backend $KEYRING --algo $KEYALGO --home "$HOMEDIR"
```

## Step 6: Genesis Configuration and Accounts Setup

Customize the genesis block with appropriate network parameters and account balances.

```bash
jq '.app_state["staking"]["params"]["bond_denom"]="abera"' "$GENESIS" >"$TMP_GENESIS" && mv "$TMP_GENESIS" "$GENESIS"

jq '.app_state["crisis"]["constant_fee"]["denom"]="abera"' "$GENESIS" >"$TMP_GENESIS" && mv "$TMP_GENESIS" "$GENESIS"

jq '.app_state["gov"]["deposit_params"]["min_deposit"][0]["denom"]="abera"' "$GENESIS" >"$TMP_GENESIS" && mv "$TMP_GENESIS" "$GENESIS"

jq '.app_state["mint"]["params"]["mint_denom"]="abera"' "$GENESIS" >"$TMP_GENESIS" && mv "$TMP_GENESIS" "$GENESIS"

jq '.consensus["params"]["block"]["max_gas"]="30000000"' "$GENESIS" >"$TMP_GENESIS" && mv "$TMP_GENESIS" "$GENESIS"

sed -i "/\[polaris\.polar\.chain\]/!b;n;c chain-id = \"$EVMCHAINID\"" $HOMEDIR/config/app.toml


// Note this is a test wallet address
./build/bin/evmstationd genesis add-genesis-account cosmos1yrene6g2zwjttemf0c65fscg8w8c55w58yh8rl 69000000000000000000000000abera --keyring-backend $KEYRING --home "$HOMEDIR"


for KEY in "${KEYS[@]}"; do
	./build/bin/evmstationd genesis add-genesis-account $KEY 100000000000000000000000000abera --keyring-backend $KEYRING --home "$HOMEDIR"
done
```

## Step 7: Genesis Transaction and Validation

Finalize the genesis block by including transactions that set up the initial validators for the network.

```bash
./build/bin/evmstationd genesis gentx ${KEYS[0]} 1000000000000000000000abera --keyring-backend $KEYRING --chain-id $CHAINID --home "$HOMEDIR"

./build/bin/evmstationd genesis collect-gentxs --home "$HOMEDIR"

./build/bin/evmstationd genesis validate-genesis --home "$HOMEDIR"
```

## Step 8: Start Node

Boot up the node, making it live and enabling it to connect to other nodes, process transactions, and participate in the blockchain network.

```bash
./build/bin/evmstationd start --pruning=nothing --log_level $LOGLEVEL --api.enabled-unsafe-cors --api.enable --api.swagger --minimum-gas-prices=0.0001abera --home "$HOMEDIR"
```

Follow these steps to initialize and start the EVM Station node for your blockchain network. Ensure each step is executed correctly to ensure the proper functioning of the node.
