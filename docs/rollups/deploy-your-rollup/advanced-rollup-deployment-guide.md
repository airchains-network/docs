---
id: advanced-rollup-deployment-guide
title: Advanced Rollup Deployment Guide
description: Advanced rollup deployment guide
sidebar_position: 18
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Advanced Rollup Deployment Guide

This guide will help you deploy a rollup with custom configuration and parameters. It will also help you understand the different components of the rollup and how to configure them.

## Prerequisites

- [Environment Setup](./environment-setup.md)
- [Rust Installation](./environment-setup.md#rust-installation)
- [Go Installation](./environment-setup.md#go-installation)
- [Node.js Installation](./environment-setup.md#nodejs-installation)

## Deploying a rollup

### Step 1: Configure Access to the Junction Network

Set up your environment by downloading the junctiond binary, making it executable, and generating the necessary keys that will be used to manage your rollup deployments.

###### 1. Download the junctiond binary from the [Junction Network GitHub Releases](https://github.com/airchains-network/junction/releases)

```bash
wget https://github.com/airchains-network/junction/releases/download/v0.3.2/junctiond-linux-amd64 -O /path/to/your/junctiond
```

###### 2. Make the binary executable

```bash
chmod +x /path/to/your/junctiond
```

###### 3. Create a new key into junction network

```bash
junctiond keys add <key-name> --keyring-backend test
```

:::info
You may generate multiple keys based on the number of rollups you intend to deploy. These keys will be used to manage and operate the respective rollups
:::

### Step 2: Store ASC wasm to junction network

###### 1. Download the wasm file from the [Junction Network GitHub Releases](https://github.com/airchains-network/junction/releases)

```bash
wget https://github.com/airchains-network/binhub/releases/download/v0.0.0/asc.wasm -O /path/to/your/asc.wasm
```

###### 2. Store the wasm file to junction network

```bash
path/to/your/junctiond tx wasm upload <path to asc.wasm> \
--from <key_name> \
--chain-id varanasi \
--node <varanasi-rpc-address> \
--gas-prices 0.25uamf \
--gas auto \
--gas-adjustment 1.7 \
--keyring-backend test \
--output json \
-y
```

:::info
The varanasi-rpc-address refers to the RPC endpoint of the Junction Network testnet.
To retrieve the code ID from a store transaction, access the transaction using the following format:

`varanasi-rpc-address/tx?hash=0x<tx-hash>`

In the transaction response, look for the `store_code` event to find the associated code ID.
:::

###### 3. instantiate the wasm

```bash
path/to/your/junctiond tx wasm instantiate <code-id> "{"proof_type": "debug", "kms_core_conf": { "centralized": "default" }}" \
--label "configuration_0" \
"--no-admin" \
--from <key_name> \
--chain-id varanasi \
--node <varanasi-rpc-address> \
--gas-prices 0.25uamf \
--gas auto \
--gas-adjustment 1.7 \
--keyring-backend test \
--output json \
-y
```

:::info
Use this tx hash to find the contract address
To retrieve the contract address, use the transaction hash in the following format:

`varanasi-rpc-address/tx?hash=0x<tx-hash>`

In the transaction response, locate the `instantiate` event. The contract address will be included in this event’s attributes.
:::

### Step 3: Generate the FHE keys to run the operator

###### 1. Download the keygen binary and Make the binary executable

```bash
wget https://github.com/airchains-network/binhub/releases/download/v0.0.0/keygen -O /path/to/your/keygen
chmod +x /path/to/your/keygen
```

###### 2. Download the rsa public key

```bash
wget https://github.com/airchains-network/binhub/releases/download/v0.0.0/public_key.pem -O /path/to/your/rsa-public-key.pem
```

###### 3. Generate the FHE keys

```bash
/path/to/your/keygen --addresses <varanasi-gRPC-address>  --asc-contract <contract-address> --rsa-public-key-path <rsa-public-key.pem> --secret-key-id <secret-key> --private-key <private-key>
```

:::info

- **`varanasi-gRPC-address`**: The gRPC endpoint of the Junction Network testnet.
- **`contract-address`**: The on-chain address of the ASC (Application Smart Contract).
- **`rsa-public-key.pem`**: The local path to the RSA public key file used for FHE key encryption.
- **`secret-key`**: A unique identifier used to generate your FHE secret keys.
- **`private-key`**: The private key associated with your Junction Network wallet.
  :::

> After running the command, you will receive the FHE keys named **`PKS`** and **`SKS`**.  
> Make sure to **save these keys securely** for future use.  
> Additionally, a **`key-id`** file will be generated — this file contains the unique identifier for your FHE keys, which is essential for the operator gateway.

### Step 4: Create Operator keys

###### 1. Download the operator binary

```bash
wget https://github.com/airchains-network/binhub/releases/download/v0.0.0/operatord -O /path/to/your/operatord
```

###### 2. Make the binary executable

```bash
chmod +x /path/to/your/operatord
```

###### 3. Copy the FHE keys to the operatord directory

```bash
mkdir -p $HOME/.operatord/zama/keys/network-fhe-keys
cp /path/to/your/PKS $HOME/.operatord/zama/keys/network-fhe-keys/PKS
cp /path/to/your/SKS $HOME/.operatord/zama/keys/network-fhe-keys/SKS
```

###### 4. Add operator environment variables

```bash
export FHEVM_GO_KEYS_DIR=$HOME/.operatord/zama/keys/network-fhe-keys
export TFHE_EXECUTOR_CONTRACT_ADDRESS="0x"
```

:::info
The `TFHE_EXECUTOR_CONTRACT_ADDRESS` is the address of the FHE executor contract address which is change after fhe smart deploy in operator node. You can get this address from the `fhe_config.json` file which is generated in [**Step 9**](#step-9-deploy-fhe-contract-on-the-operator).
:::

###### 5. Create the operator keys

```bash
/path/to/your/operatord keys add <key-name> --keyring-backend test
```

:::info  
You may generate multiple keys — similar to the process in [**Step 1**](#step-1-configure-access-to-the-junction-network) — depending on the number of rollups you plan to deploy.  
Each key will be used to manage and operate a specific rollup instance on the Junction Network.  
It is recommended to use the **same private keys** created in [**Step 1**](#step-1-configure-access-to-the-junction-network) for consistency and easier key management.  
:::

###### 6. Key Generation for FHE Smart Contract Management

```bash
/path/to/your/operatord keys add fhe-key --keyring-backend test
```

:::info
Save the FHE keys private key and mnemonic phrase in secure location.  
This key will be used to manage the FHE smart contract on the Operator node.
:::

### Step 5: Provisioning Necessary Keys for Rollup Deployment

###### 1. Clone the Fhe Contract Deployer and install dependencies

```bash
git clone https://github.com/airchains-network/fhevm-contract-deployer.git
cd fhevm-contract-deployer
npm install
```

###### 2. Create the keys for rollup deployment

```bash
node path/to/your/fhevm-contract-deployer/wallet_details.js --mnemonic <mnemonic> --output <output-path>
```

:::info
The `mnemonic` is the mnemonic phrase of the operator key fhe-key which is generated in [**Step 4**](#6-key-generation-for-fhe-smart-contract-management).
The `output-path` is the path to the output file which will contain the keys.
:::

After running the command, you will receive the file `init_rollup_fhe_keys.json` in the `output-path` directory.

Sample output file:

```json
{
  "aclContractAddress": "0x",
  "tfheExecutorAddress": "0x",
  "kmsVerifierAddress": "0x",
  "gatewayContractAddress": "0x",
  "relayerGAddress": "0x"
}
```

### Step 6: Setup ZK FHE Prover

###### 1. Download the zk-fhe-prover binary and make it executable

<!-- TODO: Add the prover binary to the release -->

```bash
wget https://github.com/airchains-network/binhub/releases/download/v0.0.0/prover -O /path/to/your/prover
chmod +x /path/to/your/prover
```

###### 2. Start the prover

```bash
/path/to/your/prover start
```

:::info
The prover will start at address `http://localhost:8080`
:::

### Step 7: Deploy the rollup into Junction Network

###### 1. Verify Operator Moniker Availability

Before registering your operator, it is crucial to verify that your chosen moniker is unique and available within the Junction Networ

Request:

To check the availability of an operator moniker, execute the following curl command. Replace `operator-moniker` with your desired moniker.

```bash
curl -X GET "http://57.129.32.145:1317/airchains-network/junction/rollup/check_moniker_availability/<operator-moniker>" -H  "accept: application/json"
```

Sample response:

A successful response indicating moniker availability will be:

```json
{
  "is_available": true
}
```

If the moniker is not available, you will receive a response like this:

```json
{
  "is_available": false
}
```

**Action Required:**

If the moniker is not available ("is_available": false), please select a different moniker and re-execute the availability check.

###### 2. Deploy the rollup

```bash
path/to/your/junctiond tx rollup init-rollup \
<operator-moniker> \
<operator-chain-id> \
<operator-denom-name> \
<da-name> \
<keys-name> \
<supply-amount> \
<acl-contract-address> \
<kms-verifier-address> \
<tfhe-executor-address> \
<gateway-contract-address> \
<asc-contract-address> \
<relayer-g-address> \
<relayer-asc-address> \
--from <key_name> \
--chain-id varanasi \
--node <varanasi-rpc-address> \
--gas-prices 0.25uamf \
--gas auto \
--gas-adjustment 1.7 \
--keyring-backend test \
--output json \
-y
```

:::info

- **`operator-moniker`**: The name of the operator.
- **`operator-chain-id`**: The chain id of the operator.
- **`operator-denom-name`**: The denom name of the operator.
- **`da-name`**: The name of the data availability provider.
- **`keys-name`**: The name of the keys list which is generated in [**Step 1**](#step-1-configure-access-to-the-junction-network).
- **`supply-amount`**: The amount of the supply to each key in the keys list and supply amount in uamf value eg 100000uamf which is 1AMF.
- **`acl-contract-address`**, **`kms-verifier-address`**, **`tfhe-executor-address`**, **`gateway-contract-address`**, **`relayer-g-address`** : This all address is generated in [**Step 5**](#step-5-provisioning-necessary-keys-for-rollup-deployment).
- **`asc-contract-address`** : The contract address of the ASC.
- **`relayer-asc-address`** : The address from which you deploy ASC contract into junction network.

**Important Note on Funding:** When deploying the rollup, ensure your Junction Network wallet contains funds equivalent to, or greater than, the total supply-amount added to the --from account
:::

###### 3. Generate FHE Prover keys and get prover keys

1. Generate FHE Prover keys

```bash
curl --location 'http://localhost:8080/api/v1/keys/generate' \
--header 'Content-Type: application/json' \
--data '{
    "rollup-id" : <rollup-id>
}'
```

Sample response:

```json
{
  "description": "Keys created for rollup-id: asdf",
  "message": "Keys generated successfully",
  "status": 200,
  "success": true
}
```

If the keys already exist, you will receive a response like this:

```json
{
  "description": "Keys already exist for rollup-id: <rollup-id>",
  "message": "Keys already exist",
  "status": 409,
  "success": false
}
```

2. Get prover keys

```bash
curl --location 'http://localhost:8080/api/v1/keys/get' \
--header 'Content-Type: application/json' \
--data '{
    "rollup-id" : <rollup-id>
}'
```

Sample response:

```json
{
    "data": {
        "proving_key_path": <proving_key_path>,
        "verifying_key_path": <verifying_key_path>
    },
    "description": "Key paths retrieved for rollup-id: asdf",
    "message": "Key paths retrieved successfully",
    "status": 200,
    "success": true
}
```

If the keys already exist, you will receive a response like this:

```json
{
  "description": "keys for rollupId <rollup-id> do not exist",
  "message": "Keys not found",
  "status": 404,
  "success": false
}
```

:::info
This section provides guidance on identifying the rollup-id and clarifies a key network address.

Retrieving the Rollup ID:
The rollup-id is a unique identifier generated during the preceding rollup deployment or initialization step. To retrieve this ID, construct a query using the following format:

`varanasi-rpc-address/tx?hash=0x<tx-hash>`

In the transaction response obtained from this query, navigate to the rollup-initialized event. The rollup-id will be explicitly listed within the attributes of this event.

Zk-FHE Prover Address:
Please note that http://localhost:8080 refers to the default operational address of the Zk-FHE Prover.
:::

###### 4. Deploy Prover Config

```bash
path/to/your/junctiond tx rollup init-prover \
<rollup-id> \
<prover-enc-key> \
<prover-type> \
<prover-endpoint> \
--from <key_name> \
--chain-id varanasi \
--node <varanasi-rpc-address> \
--gas-prices 0.25uamf \
--gas auto \
--gas-adjustment 1.7 \
--keyring-backend test \
--output json \
-y
```

:::info

- **`rollup-id`**: The unique identifier of the rollup.
- **`prover-enc-key`**: The encryption key of the prover which is generated in [**Above step**](#3-generate-fhe-prover-keys-and-get-prover-keys). You must provide the Base64-encoded string of the prover's verification key here.
- **`prover-type`**: Specifies the category or implementation type of the prover `(e.g., default)`.
- **`prover-endpoint`**: The network address of the prover `(e.g., http://localhost:8080)`.

:::

### Step 8: Config and Initialize the Operator

###### 1. Create the operator config file

```bash
#!/bin/bash

CHAINID=<operator-chain-id>
MONIKER=<operator-moniker>
KEYRING="test"
KEYALGO="eth_secp256k1"
HOME_OPERATORD="$HOME/.operatord"
OPERATORD="path/to/your/operatord"

mkdir -p $HOME_OPERATORD/config

# validate dependencies are installed
command -v jq > /dev/null 2>&1 || { echo >&2 "jq not installed. More info: https://stedolan.github.io/jq/download/"; exit 1; }

# used to exit on first error (any non-zero exit code)
set -e

$OPERATORD config keyring-backend $KEYRING
$OPERATORD config chain-id $CHAINID

# Set moniker and chain-id for Ethermint (Moniker can be anything, chain-id must be an integer)
$OPERATORD init $MONIKER --chain-id $CHAINID

# Change parameter token denominations to aether
cat $HOME_OPERATORD/config/genesis.json | jq '.app_state["staking"]["params"]["bond_denom"]="aether"' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json
cat $HOME_OPERATORD/config/genesis.json | jq '.app_state["crisis"]["constant_fee"]["denom"]="aether"' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json
cat $HOME_OPERATORD/config/genesis.json | jq '.app_state["gov"]["deposit_params"]["min_deposit"][0]["denom"]="aether"' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json
cat $HOME_OPERATORD/config/genesis.json | jq '.app_state["mint"]["params"]["mint_denom"]="aether"' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json

# Set EVM RPC HTTP server address bind to 0.0.0.0 (needed to reach docker from host)
if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' 's/127.0.0.1:8545/0.0.0.0:8545/g' $HOME_OPERATORD/config/app.toml
  else
    sed -i 's/127.0.0.1:8545/0.0.0.0:8545/g' $HOME_OPERATORD/config/app.toml
fi

# Set EVM websocket server address bind to 0.0.0.0 (needed to reach docker from host)

if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' 's/127.0.0.1:8546/0.0.0.0:8546/g' $HOME_OPERATORD/config/app.toml
  else
    sed -i 's/127.0.0.1:8546/0.0.0.0:8546/g' $HOME_OPERATORD/config/app.toml
fi

# Set gas limit of 10000000 and txn limit of 4 MB in genesis
cat $HOME_OPERATORD/config/genesis.json | jq '.consensus_params["block"]["max_gas"]="10000000"' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json
cat $HOME_OPERATORD/config/genesis.json | jq '.consensus_params["block"]["max_bytes"]="4194304"' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json

# Set claims start time
node_address=$($OPERATORD keys list | grep  "address: " | cut -c12-)
current_date=$(date -u +"%Y-%m-%dT%TZ")
cat $HOME_OPERATORD/config/genesis.json | jq -r --arg current_date "$current_date" '.app_state["claims"]["params"]["airdrop_start_time"]=$current_date' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json

# Set claims records for validator account
amount_to_claim=10000
cat $HOME_OPERATORD/config/genesis.json | jq -r --arg node_address "$node_address" --arg amount_to_claim "$amount_to_claim" '.app_state["claims"]["claims_records"]=[{"initial_claimable_amount":$amount_to_claim, "actions_completed":[false, false, false, false],"address":$node_address}]' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json

# Set claims decay
cat $HOME_OPERATORD/config/genesis.json | jq '.app_state["claims"]["params"]["duration_of_decay"]="1000000s"' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json
cat $HOME_OPERATORD/config/genesis.json | jq '.app_state["claims"]["params"]["duration_until_decay"]="100000s"' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json

# Claim module account:
# 0xA61808Fe40fEb8B3433778BBC2ecECCAA47c8c47 || ethm15cvq3ljql6utxseh0zau9m8ve2j8erz8u5tz0g
cat $HOME_OPERATORD/config/genesis.json | jq -r --arg amount_to_claim "$amount_to_claim" '.app_state["bank"]["balances"] += [{"address":"ethm15cvq3ljql6utxseh0zau9m8ve2j8erz8u5tz0g","coins":[{"denom":"aether", "amount":$amount_to_claim}]}]' > $HOME_OPERATORD/config/tmp_genesis.json && mv $HOME_OPERATORD/config/tmp_genesis.json $HOME_OPERATORD/config/genesis.json


# Disable production of empty blocks.
# Increase transaction and HTTP server body sizes.
if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' 's/create_empty_blocks = true/create_empty_blocks = false/g' $HOME_OPERATORD/config/config.toml
  else
    sed -i 's/create_empty_blocks = true/create_empty_blocks = false/g' $HOME_OPERATORD/config/config.toml
fi


# Allocate genesis accounts (cosmos formatted addresses)
$OPERATORD add-genesis-account <operator-key-names> <supply-amount>aether --keyring-backend $KEYRING

# Sign genesis transaction
$OPERATORD gentx <operator-key-name> <stake-amount>aether --keyring-backend $KEYRING --chain-id $CHAINID

# Collect genesis tx
$OPERATORD collect-gentxs

# Run this to ensure everything worked and that the genesis file is setup correctly
$OPERATORD validate-genesis

# disable produce empty block and enable prometheus metrics
if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' 's/create_empty_blocks = true/create_empty_blocks = false/g' $HOME_OPERATORD/config/config.toml
    sed -i '' 's/prometheus = false/prometheus = true/' $HOME_OPERATORD/config/config.toml
    sed -i '' 's/prometheus-retention-time = 0/prometheus-retention-time  = 1000000000000/g' $HOME_OPERATORD/config/app.toml
    sed -i '' 's/enabled = false/enabled = true/g' $HOME_OPERATORD/config/app.toml
else
    sed -i 's/create_empty_blocks = true/create_empty_blocks = false/g' $HOME_OPERATORD/config/config.toml
    sed -i 's/prometheus = false/prometheus = true/' $HOME_OPERATORD/config/config.toml
    sed -i 's/prometheus-retention-time  = "0"/prometheus-retention-time  = "1000000000000"/g' $HOME_OPERATORD/config/app.toml
    sed -i 's/enabled = false/enabled = true/g' $HOME_OPERATORD/config/app.toml
fi

if [[ $1 == "pending" ]]; then
    echo "pending mode is on, please wait for the first block committed."
    if [[ $OSTYPE == "darwin"* ]]; then
        sed -i '' 's/create_empty_blocks_interval = "0s"/create_empty_blocks_interval = "30s"/g' $HOME_OPERATORD/config/config.toml
        sed -i '' 's/timeout_propose = "3s"/timeout_propose = "30s"/g' $HOME_OPERATORD/config/config.toml
        sed -i '' 's/timeout_propose_delta = "500ms"/timeout_propose_delta = "5s"/g' $HOME_OPERATORD/config/config.toml
        sed -i '' 's/timeout_prevote = "1s"/timeout_prevote = "10s"/g' $HOME_OPERATORD/config/config.toml
        sed -i '' 's/timeout_prevote_delta = "500ms"/timeout_prevote_delta = "5s"/g' $HOME_OPERATORD/config/config.toml
        sed -i '' 's/timeout_precommit = "1s"/timeout_precommit = "10s"/g' $HOME_OPERATORD/config/config.toml
        sed -i '' 's/timeout_precommit_delta = "500ms"/timeout_precommit_delta = "5s"/g' $HOME_OPERATORD/config/config.toml
        sed -i '' 's/timeout_commit = "5s"/timeout_commit = "150s"/g' $HOME_OPERATORD/config/config.toml
        sed -i '' 's/timeout_broadcast_tx_commit = "10s"/timeout_broadcast_tx_commit = "150s"/g' $HOME_OPERATORD/config/config.toml
    else
        sed -i 's/create_empty_blocks_interval = "0s"/create_empty_blocks_interval = "30s"/g' $HOME_OPERATORD/config/config.toml
        sed -i 's/timeout_propose = "3s"/timeout_propose = "30s"/g' $HOME_OPERATORD/config/config.toml
        sed -i 's/timeout_propose_delta = "500ms"/timeout_propose_delta = "5s"/g' $HOME_OPERATORD/config/config.toml
        sed -i 's/timeout_prevote = "1s"/timeout_prevote = "10s"/g' $HOME_OPERATORD/config/config.toml
        sed -i 's/timeout_prevote_delta = "500ms"/timeout_prevote_delta = "5s"/g' $HOME_OPERATORD/config/config.toml
        sed -i 's/timeout_precommit = "1s"/timeout_precommit = "10s"/g' $HOME_OPERATORD/config/config.toml
        sed -i 's/timeout_precommit_delta = "500ms"/timeout_precommit_delta = "5s"/g' $HOME_OPERATORD/config/config.toml
        sed -i 's/timeout_commit = "5s"/timeout_commit = "150s"/g' $HOME_OPERATORD/config/config.toml
        sed -i 's/timeout_broadcast_tx_commit = "10s"/timeout_broadcast_tx_commit = "150s"/g' $HOME_OPERATORD/config/config.toml
    fi
fi

# Create Zama-specific directories and files.
mkdir -p $HOME_OPERATORD/zama/keys/network-fhe-keys
mkdir -p $HOME_OPERATORD/zama/config

touch $HOME/privkey
$OPERATORD keys unsafe-export-eth-key <operator-key-name> --keyring-backend test > $HOME/privkey
touch $HOME/node_id
$OPERATORD tendermint show-node-id > $HOME/node_id
```

:::info

Remove the `config` and `data` folder from `~/.operatord` before running this script.

- **`<operator-key-name>`**: This refers to the name of the operator key that was generated in [**Step 4**](#step-4-create-operator-keys) and subsequently used during [**rollup deployment**](#2-deploy-the-rollup).
- **`<supply-amount>`**: This represents the total amount of supply to be allocated to each key within the specified key list. This value was also defined during [**rollup deployment**](#2-deploy-the-rollup)

**Note on Denomination**: The supply-amount you add uamf value while deploying rollup but here you need to add supply amount in 10^18 wei.

- **`<stake-amount>`**: In this you add the stake amount to one address which you want to add as opertor validator.

:::

###### 2. Start the operator

```bash
path/to/your/operatord start --pruning=nothing --trace --log_level info \
--minimum-gas-prices=0.0001aether \
--json-rpc.gas-cap=50000000 \
--json-rpc.api eth,txpool,net,web \
--rpc.laddr tcp://0.0.0.0:26657
```

:::info
Once the operator is started, and you successfully deploy the FHE contract on the operator,
Change the environment variable `TFHE_EXECUTOR_CONTRACT_ADDRESS` from the `fhe_config.json` file with the address of the FHE executor contract and restart the `operator`.
:::

### Step 9: Deploy FHE contract on the operator

```bash
node path/to/your/fhevm-contract-deployer/wallet_details.js --network-url "http://127.0.0.1:8545/" --private-key <private-key> --mnemonic <mnemonic> --output <output-path>

```

:::info

- **`<private-key>`**: The private key of the operator.
- **`<mnemonic>`**: The mnemonic of the fhe-key which you generate in [**Step 5**](#6-key-generation-for-fhe-smart-contract-management).
- **`<output-path>`**: The path to the output file.
  :::

###### Output Configuration File

Upon successful execution of the command, a file named `fhe_config.json` will be generated and saved in the specified `output-path` directory. This file contains crucial contract addresses and keys.

Sample output file:

```json
{
  "tfhe_executor_contract_address": "0x<tfhe-executor-contract-address>",
  "gateway_contract_address": "0x<gateway-contract-address>",
  "relayer_private_key": "0x<relayer-private-key>"
}
```

:::info
Save the `fhe_config.json` this address is used to run gateway
:::

### Step 10: Config and Initialize the Gateway

###### 1. Download the gateway binart and make it executable

```bash
wget https://github.com/airchains-network/binhub/releases/download/v0.0.0/gateway -O  path/to/your/gateway
chmod +x path/to/your/gateway
```

###### 2. Config the gateway

1. Setup `gateway.toml` file

```toml
# Set to true to start an emulated KMS backend.
# This option enables a debug mode where a mocked KMS backend is used instead of a real one.
# Useful for testing and development purposes without needing actual KMS services.
debug = false

# configure to match the KMS mode: centralized or threshold
mode = "centralized"

# api url binding
api_url = "0.0.0.0:7077"

# Ethereum Settings
# Configuration settings related to the Ethereum network and smart contract event interactions.
[ethereum]
# Listener type, one of FHEVM_V1, FHEVM_V1_1, or COPROCESSOR.
# Specifies the type of listener to be used for processing Ethereum events.
# - FHEVM_V1: Use the FHEVM version 1 listener.
# - FHEVM_V1_1: Use the FHEVM version 1.1 listener.
# - COPROCESSOR: Use the Coprocessor listener.
listener_type = "FHEVM_V1_1"

# URL of the Ethereum WebSocket server.
# Used for establishing a WebSocket connection to an Ethereum node.
wss_url = "ws://localhost:8546"

# Used for establishing an http connection to an Ethereum node.
http_url = "http://localhost:8545"

# Address of the FHE library smart contract on the Ethereum blockchain.
# Used for interactions with the FHE library contract.
fhe_lib_address = "000000000000000000000000000000000000005d"

# Address of the OraclePredeploy or GatewayPredeploy contract on the
# Ethereum blockchain. Used for pre-deployment operations related to the oracle.
oracle_predeploy_address = "<gateway_contract_address>"
# Test Address used for testing asynchronous decryption on the Ethereum blockchain.
test_async_decrypt_address = "99F460504563579922352932A42172B3c04a1420"

# Address of the coprocessor to query for ciphertexts
coprocessor_url = "http://127.0.0.1:8745/"

# optionally explicitly set the gas price
# gas_price = 1_000_000_000

# optionally explicitly set transaction gas limit
gas_limit = 5_000_000

# base gas price, one of current_gas_price or eip1559_max_priority_fee_per_gas
base_gas = "eip1559_max_priority_fee_per_gas"

# gas escalator increase in % of base_gas
gas_escalator_increase = 20

# relayer private key
relayer_key = "<relayer-private-key>"

# KMS Settings
# Configuration settings related to the Key Management System (KMS).
[kms]
# Address of the KMS smart contract on the blockchain.
# Used for interactions with the KMS contract.
parent_asc_contract_address = "air14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9snx9gzt"
asc_contract_address = "<asc-contract-address>"

# Mnemonic phrase for accessing the KMS.
# This is a human-readable string of words used to derive cryptographic keys.
# It should be kept secure and private.
mnemonic = "<varanasi-wallet-mnemonic>"

# Base URL of the KMS service.
# Used for making HTTP requests to the KMS service.
address = "<varanasi-grpc-url>"

# Key ID used within the KMS.
# Identifies the specific key to be used for cryptographic operations within the KMS.
key_id = <kms-key-id>

[storage]
url = <kms-storage-url>

[tracing]
service_name = "gateway"
endpoint = "http://localhost:4317"

```

:::info

- **`<gateway_contract_address>`** and **`<relayer-private-key>`**: The address of the gateway contract and the private key of the relayer which you generate in [**Step 9**](#step-9-deploy-fhe-contract-on-the-operator).
- **`<asc-contract-address>`**: The address of the ASC contract.
- **`<junction-wallet-mnemonic>`**: The mnemonic of the junction wallet.
- **`<varanasi-grpc-url>`**: The address of the varanasi grpc.
- **`<kms-key-id>`**: The key id of the KMS which you generate in [**Step 3**](#step-3-generate-the-fhe-keys-to-run-the-operator).
- **`<kms-storage-url>`**: The url of the KMS storage.

:::

2. 1. Setup `default.toml` file

```toml

tick_interval_secs = 1
storage_path = "./temp/events.toml"

[oracle]
addresses = ["<varanasi-rpc-url>"]

[blockchain]
addresses = ["<varanasi-grpc-url>"]
contract = "<asc-contract-address>"

[blockchain.signkey]
# It should be either mnemonic or bip32
mnemonic = "<varanasi-wallet-mnemonic>"
bip32 = "xprv9s21ZrQH143K3FQVQn1Z6"

[blockchain.fee]
denom = "UAMF"
amount = 3000000

[core]
addresses = ["<kms-core-address>"]

[core.timeout_config]
channel_timeout = 60

[core.timeout_config.crs]
initial_wait_time = 60
retry_interval = 60
max_poll_count = 120

[core.timeout_config.keygen]
initial_wait_time = 18000
retry_interval = 15000
max_poll_count = 1150

[core.timeout_config.preproc]
initial_wait_time = 18000
retry_interval = 15000
max_poll_count = 1150

[core.timeout_config.decryption]
initial_wait_time = 0
retry_interval = 0
max_poll_count = 1

[core.timeout_config.reencryption]
initial_wait_time = 0
retry_interval = 0
max_poll_count = 1

[tracing]
service_name = "kms-asc-connector"
endpoint = "http://localhost:4317"

[store]
url = "<kms-storage-url>"

```

:::info

- **`<varanasi-rpc-url>`**: The url of the varanasi rpc.
- **`<varanasi-grpc-url>`**: The url of the varanasi grpc.
- **`<asc-contract-address>`**: The address of the ASC contract.
- **`<junction-wallet-mnemonic>`**: The mnemonic of the junction wallet.
- **`<kms-core-address>`**: The address of the KMS core.
- **`<kms-storage-url>`**: The url of the KMS storage.

:::

###### 3. Start the gateway

```bash
./path/to/your/gateway
```

:::info

**Configuration File Location**

Ensure that `gateway.toml` and `default.toml` configuration files are placed within the `config` folder, located adjacent to the gateway binary.
:::

### Step 11: Config and Initialize the DA

<Tabs>
  <TabItem value="celestia" label="Celestia" default>

###### 1. Download the Celestia light client binary and make it executable

```bash
wget https://github.com/airchains-network/binhub/releases/download/v0.0.0/celestia -O path/to/your/celestia
wget https://github.com/airchains-network/binhub/releases/download/v0.0.0/cel-key -O path/to/your/cel-key
chmod +x path/to/your/celestia
chmod +x path/to/your/cel-key
```

<Tabs>
  <TabItem value="mainnet" label="Mainnet">
###### 2. Initialize the Celestia light client

    ```bash
    ./path/to/your/celestia init
    ```

    ###### 3. Setup Celestia light client keys

```bash
./cel-key add <key-name> --keyring-backend test \
    --node.type light
```

###### 4. Run the Celestia light client

```bash
./path/to/your/celestia light start --keyring.keyname <key-name> \
    --core.ip <celestia-rpc-url> --core.port 9090
```

###### 5. Celestia Authenticate key

```bash
./path/to/your/celestia light auth admin
```

  </TabItem>
  <TabItem value="mocha" label="Mocha">
###### 2. Initialize the Celestia light client

    ```bash
    ./path/to/your/celestia init --p2p.network mocha
    ```

    ###### 3. Setup Celestia light client keys

```bash
./cel-key add <key-name> --keyring-backend test \
    --node.type light --p2p.network mocha
```

###### 4. Run the Celestia light client

```bash
./path/to/your/celestia light start --keyring.keyname <key-name> \
    --core.ip <celestia-rpc-url> --core.port 9090 \
    --p2p.network mocha
```

###### 5. Celestia Authenticate key

```bash
./path/to/your/celestia light auth admin --p2p.network mocha
```

  </TabItem>
  <TabItem value="arabica" label="Arabica">
###### 2. Initialize the Celestia light client

    ```bash
    ./path/to/your/celestia init --p2p.network arabica
    ```

    ###### 3. Setup Celestia light client keys

```bash
./cel-key add <key-name> --keyring-backend test \
    --node.type light --p2p.network arabica
```

###### 4. Run the Celestia light client

```bash
./path/to/your/celestia light start --keyring.keyname <key-name> \
    --core.ip <celestia-rpc-url> --core.port 9090 \
    --p2p.network arabica
```

###### 5. Celestia Authenticate key

```bash
./path/to/your/celestia light auth admin --p2p.network arabica
```

  </TabItem>
</Tabs>

:::tip
You can replace the `core.ip` with a consensus node RPC endpoint from [Mainnet Beta](https://docs.celestia.org/how-to-guides/mainnet#integrations), [Mocha testnet](https://docs.celestia.org/how-to-guides/mocha-testnet#integrations), or [Arabica devnet](https://docs.celestia.org/how-to-guides/arabica-devnet#integrations).
:::

:::note

Securely store `authenticated key`. This Authenticated key is essential for operations within the `Sequencer`.

:::

  </TabItem>
  <TabItem value="avail" label="Avail">
  ###### Install and run the Avail light client
  To run an Avail light client, simply run the following command:

```bash
curl -sL1 avail.sh | bash -s -- --network turing
```

:::info

- **`<network>`**: The network to connect to. which can be `mainnet` or `turing`.

:::

After runnig this command you need to fund the your `avail wallet` which is located in `~/.avail/identity/identity.toml`

:::note

Securely store the private key for the `Avail wallet`. This private key is essential for operations within the `Sequencer`.
:::

  </TabItem>
</Tabs>


