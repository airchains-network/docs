---
id: run-a-validator-node
title: Run a Validator Node
sidebar_position: 2
---

# Run a Validator Node

This manual offers a detailed, step-by-step approach for establishing and operating a full validator node on the Junction.

### 1. Download the `junctiond` binary

Use the `wget` command to download the `junctiond` executable from the Airchains Network GitHub release page.

```bash
wget https://github.com/airchains-network/junction/releases/download/v0.1.0/junctiond
```

### 2. Make the binary executable

Apply the `chmod +x` command to add executable permissions to the `junctiond` file, allowing it to be run as a program.

```bash
chmod +x junctiond
```

### 3. Move the binary to a system-wide location

Employ the `sudo mv` command to transfer the `junctiond` binary to `/usr/local/bin`, enabling it to be accessed and executed from any location on the system.

```bash
sudo mv junctiond /usr/local/bin
```

### 4. Initialize the Node with the Moniker

```bash
junctiond init <moniker>
```

### 5. Update Genesis Configuration

To ensure your node is configured correctly for the testnet, follow these steps to update the genesis configuration

#### Download the testnet genesis file

Begin by downloading the latest genesis file from the GitHub repository.

```bash
wget https://github.com/airchains-network/junction/releases/download/v0.1.0/genesis.json
```

#### Replace the existing genesis file

After downloading the new genesis file, you need to replace the existing file in your Junction node configuration directory. This step ensures your node starts with the correct testnet settings.

```bash
cp genesis.json ~/.junction/config/genesis.json
```

### 6. Update Configuration

Edit `~/.junction/config/config.toml` to set `persistent_peers`:

```bash
persistent_peers = "de2e7251667dee5de5eed98e54a58749fadd23d8@34.22.237.85:26656"
```

### 7. Start the Node

:::warning
Before starting, it's crucial to set the minimum gas price in your app configuration. Locate the app.toml file at `~/.junction/config/app.toml` and ensure you set the minimum-gas-prices to `0.00025amf` to start the node.

This ensures smooth operation and fair transaction processing.
:::

```bash
junctiond start
```

### 8. Wait For the Node the to Sync

Run the Command to check the status of the Node.

```bash
junctiond status
```

:::warning
Should the 'catching_up' field return 'true', it's important to wait until the Node completes its synchronization. Do not proceed with further steps until this process is finished.
:::

### 9. Creating New Account for the Validator

```bash
junctiond keys add <validator_name>
```

:::tip
This command will generate your wallet's `mnemonic` and `address`. It's crucial to write these down and store them securely.
:::

### 10. Fund Your Account

You need to ensure that your validator account holds a minimum of `58 tokens`. If your account doesn't have enough tokens, you can acquire testnet tokens from our discord faucet channel. The faucet is accessible at [Airchains Faucet](https://discord.gg/airchains).

### 11. Stake Token to Become a Validator

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
junctiond tx staking create-validator path/to/validator.json --from <key-name> --chain-id junction --fees 500amf
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

### 12. Query Validator Set

To see if you were accepted as a validator,

```bash
junctiond query tendermint-validator-set
```

:::note
If your address is visible, it indicates successful inclusion in the validator set. Please note that this process may take some time.
:::
