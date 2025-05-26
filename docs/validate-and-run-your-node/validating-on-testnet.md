---
id: validating-on-testnet
title: Validating on Testnet
description: Validating on Testnet
sidebar_position: 11
slug: /validate-and-run-your-node/validating-on-testnet
---

# Validating on Testnet

If you are currently operating a full node and want to upgrade to a validator node, please proceed with the following steps.

:::note
Before starting, it's crucial to set the minimum gas price in your app configuration. Locate the app.toml file at `~/.junction/config/app.toml` and ensure you set the minimum-gas-prices to `0.0025amf` to start the node.
This ensures smooth operation and fair transaction processing.
:::

### 1. Check the Node Status

Run the Command to check the status of the Node.

```bash
junctiond status
```

:::warning
Should the 'catching_up' field return 'true', it's important to wait until the Node completes its synchronization. Do not proceed with further steps until this process is finished.
:::

### 2. Create New Account for the Validator

```bash
junctiond keys add <validator_name>
```

:::tip
This command will generate your wallet's `mnemonic` and `address`. It's crucial to write these down and store them securely.
:::

<!-- TODO: Add a link to the discord faucet channel -->

### 3. Fund you Account

You need to ensure that your validator account holds a minimum of `58 tokens`. If your account doesn't have enough tokens, you can acquire testnet tokens from our discord faucet channel. The faucet is accessible at [Airchains Faucet](https://discord.gg/airchains).

### 4. Stake Token to become a Validator

Before executing the command `junctiond tx staking create-validator path/to/validator.json --from keyname`, you need to create a `validator.json` file with the following details. Below is an example:

To obtain the pubkey, you can use the command:

```bash
junctiond comet show-validator
```

The output will be something like this:

```JSON
 {"@type":"/cosmos.crypto.ed25519.PubKey","key":"ZXONS7NNjLWH4HePBOoHKDAYeLXQO5iUwpCRQSi1poI="}
```

You'll need to paste the pubkey value into the pubkey section of the JSON file.

:::note
Please adjust the staking amount and other keys as you see fit.
:::

```JSON
{
	"pubkey": <validator-pub-key>,
	"amount": "1000000amf",
	"moniker": "<validator-name>",
	"identity": "optional identity signature (ex. UPort or Keybase)",
	"website": "validator's (optional) website",
	"security": "validator's (optional) security contact email",
	"details": "validator's (optional) details",
	"commission-rate": "0.1",
	"commission-max-rate": "0.2",
	"commission-max-change-rate": "0.01",
	"min-self-delegation": "1"
}
```

```bash
junctiond tx staking create-validator path/to/validator.json --from <key-name> --chain-id varanasi-1 --fees 500amf
```

:::note
A prompt will appear in the CLI. To proceed, type 'y' and press enter.
:::

It will return Transaction hash Like this

```bash
code: 0
codespace: ""
data: ""
events: []
gas_used: "0"
gas_wanted: "0"
height: "0"
info: ""
logs: []
raw_log: '[]'
timestamp: ""
tx: null
txhash: 3068ED7C9867D9DC926A200363704715AE9470EE73452324A32C2583E62B1D79
```

### 5. Query Validator Set

To See if you were accepted as a validator,

```bash
junctiond q staking validator $(junctiond keys show <validator_name> --bech val -a)
```

:::note
If your address is visible, it indicates successful inclusion in the validator set. Please note that this process may take some time.
:::