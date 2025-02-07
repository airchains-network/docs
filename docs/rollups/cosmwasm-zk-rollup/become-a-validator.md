---
id: become-a-validator
title: Become a Validator
sidebar_position: 4
---

# Become a Validator

:::note
To run a validator node, you must first operate a full node. Refer to the 'Running a Full Node' section for guidance, accessible here. This step is essential for transitioning to a validator node.
:::

### 1. Check node status

Run the Command to check the status of the Node.

```bash
airwasmicd status
```

:::warning
Should the 'catching_up' field return 'true', it's important to wait until the Node completes its synchronization. Do not proceed with further steps until this process is finished.
:::

### 2. Creating New Account for the Validator

```bash
airwasmicd keys add <validator-name>
```

:::success
This command will generate your wallet's `mnemonic` and `address`. It's crucial to write these down and store them securely.
:::

### 3. Fund you Account

You need to ensure that your validator account holds a minimum of `58 tokens`
. If your account doesn't have enough tokens, you can acquire tokens from the chain's faucet for Testnet or get it by contacting the chain owners.

4. Stake Token to become a Validator

```bash
/airwasmicd tx staking create-validator \
--amount=58stake \
--pubkey=$(./airwasmicd tendermint show-validator) \
--moniker=<moniker> \
--chain-id=airsettle \
--commission-rate="0.05" \
--commission-max-rate="0.10" \
--commission-max-change-rate="0.01" \
--min-self-delegation="1" \
--gas="200000" \
--fees="2stake" \
--from=<nameOfTheValdiator>
```

:::info
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
airwasmicd query tendermint-validator-set
```

:::success
If your address is visible, it indicates successful inclusion in the validator set. Please note that this process may take some time.
:::
