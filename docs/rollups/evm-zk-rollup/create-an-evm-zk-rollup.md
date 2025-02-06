---
id: create-an-evm-zk-rollup
title: Create an EVM ZK Rollup
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an EVM ZK Rollup

## 1. Clone the GitHub Repositories

Start by cloning the necessary repositories from GitHub. Use the following commands in your terminal:

```bash
git clone https://github.com/airchains-network/evm-station.git
git clone https://github.com/airchains-network/tracks.git
```

If you're utilizing EigenDA, there's no necessity to clone any repository. Otherwise, clone the respective repositories for the DA client you're using.

<Tabs>
<TabItem value="avail" label="Avail">
```bash
wget https://github.com/airchains-network/tracks/releases/download/v0.0.2/avail-light
```
</TabItem>
<TabItem value="celestia" label="Celestia">
```bash
wget https://github.com/airchains-network/tracks/releases/download/v0.0.2/celestia-light
```
</TabItem>
</Tabs>

## 2. Setting Up and Running the EVM Station

**Install Dependencies**

After cloning the repository, navigate into the project directory.

```bash
cd evm-station
```

Then, tidy up the Go modules to ensure that dependencies are properly managed.

```bash
go mod tidy
```

**Run the Project**

To run the EVM Station project locally, execute the following command:

```bash
/bin/bash ./scripts/local-setup.sh
/bin/bash ./scripts/local-start.sh
```

Get Your Private Key of EVM Station

```bash
/bin/bash ./scripts/local-keys.sh
```

## 3. Setting Up DA Keys and Running DA Client

<Tabs>
<TabItem value="avail" label="Avail">
<br/>

### Generate DA KEY for Avail

#### Download the Binary to Generate Keys

```bash
wget https://github.com/airchains-network/tracks/releases/download/v0.0.2/avail-node
```

#### Make the Binary Executable

```bash
chmod +x avail-node
```

#### Generate the DA Key

#### SS58 Address is your DA Keys

```bash
  ./avail-node key generate

  Secret phrase:     sugar genuine grief already basic lend labor audit bread trip space limb
  Network ID:        substrate
  Secret seed:       0x519ca67ed47173559eb0414b489e727343d2d74743545b4b82037e8be7d61fa4
  Public key (hex):  0xd2748458725a993a7d359bb5d502630455591c75c9d220023f3a38c01a45857b
  Account ID:        0xd2748458725a993a7d359bb5d502630455591c75c9d220023f3a38c01a45857b
  Public key (SS58): 5GpeXSmsEPnwT785KyiCdaXmcttmFqyLkNPEjoTrjThwFhPQ
  SS58 Address:      5GpeXSmsEPnwT785KyiCdaXmcttmFqyLkNPEjoTrjThwFhPQ
```

Running `avail da` with Custom Identity Configuration

If you possess a specific seed phrase and wish to use it instead of the generated one, you can either modify the default identity configuration file or pass the seed phrase as a flag.

- To modify the default identity configuration file, navigate to `~/.avail/identity/identity.toml` and edit it using a text editor such as `nano`.

```bash
nano ~/.avail/identity/identity.toml
```

- Alternatively, you can create a new identity configuration file and specify your seed phrase. For example:

```bash
touch ~/identity.toml
nano ~/identity.toml
```

Then, execute the avail-light with the `--identity` flag and specify the path to your custom identity configuration file:

**Example Identity Configuration**
:::warning
**Attention:** Using the seed phrase provided below in production environments is strongly discouraged.
:::

Here is an example of the content for the `~/identity.toml` file:

```toml
avail_secret_seed_phrase = 'sugar genuine grief already basic lend labor audit bread trip space limb'
```

This seed phrase will be used for identity generation during the execution of the `availup.sh` script.

Feel free to customize the identity configuration as needed!

Running `avail da`

To execute the `avail da`, use the following command:

```bash
avail-light --network "turing" --app-id 36 --identity ~/identity.toml
```

For obtaining Turing Testnet tokens, please visit the [Faucet-Avail](https://faucet.avail.tools/).
</TabItem>
<TabItem value="celestia" label="Celestia">
<br/>

#### Initialize the light node

Run the following command :

```bash
celestia light init --p2p.network mocha
```

The output in your terminal will show the location of your node store and config. It will also show confirmation that the node store has been initialized.

### Keys and Wallets

#### Download the Binary to Generate Wallets

```bash
wget https://github.com/airchains-network/tracks/releases/download/v0.0.2/celestia-key
```

You can create your key for your node by running the following command with the [celestia-key utility](https://docs.celestia.org/tutorials/celestia-node-key)

```bash
celestia-key add <key-name> --keyring-backend test --node.type light --p2p.network mocha
```

### Generate your DA Keys for Celestia

**The Output is your DA Keys**

```bash
celestia light auth admin --p2p.network mocha-4
```

**Example Output**

```bash
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBbGxvdyI6WyJwdWJsaWMiLCJyZWFkIiwid3JpdGUiLCJhZG1pbiJdfQ.Qs4iN4jFKk08pBgooEMYE-zXf-JEA8yu8OyRpO7n4hE
```

You can start your light node with the key created above by running the following command:

```bash
celestia light start --keyring.accname my_celes_key \
    --core.ip rpc-mocha.pops.one --p2p.network mocha
```

Once you start the light node, a wallet key will be generated for you. You will need to fund that address with testnet tokens to pay for `PayForBlob` transactions.

<!-- https://docs.celestia.org/how-to-guides/light-node#testnet-tokens -->

For guidance on obtaining Mocha Testnet tokens, please visit the [mocha-testnet-tokens](https://docs.celestia.org/how-to-guides/light-node#testnet-tokens)
</TabItem>
<TabItem value="eigenda" label="EigenDA">
<br/>
**Download the Binary to Generate Keys**

```bash
wget https://github.com/airchains-network/tracks/releases/download/v0.0.2/eigenlayer
```

**Create and List Keys**

```bash
./eigenlayer operator keys create --key-type ecdsa [keyname]
```

**Public Hex Key is the DA key**

```bash
eigenlayer operator keys create --key-type ecdsa test
? Enter password to encrypt the ecdsa private key:
ECDSA Private Key (Hex):  b3eba201405d5b5f7aaa9adf6bb734dc6c0f448ef64dd39df80ca2d92fca6d7b
Please backup the above private key hex in safe place.

Key location: /home/ubuntu/.eigenlayer/operator_keys/test.ecdsa.key.json
Public Key hex:  f87ee475109c2943038b3c006b8a004ee17bebf3357d10d8f63ef202c5c28723906533dccfda5d76c1da0a9f05cc6d32085ca1af8aaab5a28171474b1ad0aa68
Ethereum Address 0x6a8c0D554a694899041E52a91B4EC3Ff23d8aBD5
```

</TabItem>
</Tabs>

## 4. Setting Up and Running Tracks

**Remove Old Data**

Before initiating the setup process, ensure that any old data is removed if present. Use the following command:

```bash
sudo rm -rf ~/.tracks
```

**Install Dependencies**

After cloning the repository, navigate into the project directory.

```bash
cd tracks
```

Then, tidy up the Go modules to ensure that dependencies are properly managed.

```bash
go mod tidy
```

**Initiate Sequencer**

To initiate the sequencer, execute the following command:

:::warning
Please Add Da-rpc, Da-keys and Da-type accordingly. Not doing this Can cause Unexpected Errors while Submitting to DA Clients
:::

```bash
go run cmd/main.go init --daRpc "da-rpc" --daKey "daKey" --daType "<da-type>" --moniker "<moniker-name>" --stationRpc "http://127.0.0.1:8545" --stationAPI "http://127.0.0.1:8545" --stationType "evm"
```

Specify the DA type using the `--daType` flag with one of the following options:

- `avail` for Avail DA
- `celestia` for Celestia DA
- `eigenda` for EigenDA
- `mock` for Mock DA

The DA keys were defined in the section above when we were setting up the DA. Use the Da Keys Accordingly.

:::info
Da Key for Mock-Da is Mock-Key
:::

**List of DA RPC**

:::note
For Avail and Celestia, you have to run their nodes locally.
:::

- `Eigen`: disperser-holesky.eigenda.xyz
- `Avail`: http://127.0.0.1:7000
- `Celestia`: http://127.0.0.1:26658
- `MockDA`: mock-rpc

Create Keys for Junction

Generate keys for the Junction component using the following command:

```bash
go run cmd/main.go keys junction --accountName <account-name> --accountPath $HOME/.tracks/junction-accounts/keys
```

**Fund Keys for Junction Testnet**

Navigate to the Switchyard faucet in the Airchains Discord group and follow the provided steps to obtain Switchyard tokens for funding the keys.

**Initiate Prover**

Initiate the Prover component using the following command:

```bash
go run cmd/main.go prover v1EVM
```

**Create Station on Junction**

Create a station on the Junction component with the specified parameters using the following command:

```bash
go run cmd/main.go create-station --accountName <account-name> --accountPath $HOME/.tracks/junction-accounts/keys --jsonRPC "https://airchains-testnet-rpc.cosmonautstakes.com/" --info "EVM Track" --tracks <wallet-address> --bootstrapNode "/ip4/192.168.1.24/tcp/2300/p2p/<node_id>"
```

In the `--bootstrapNode` parameter, input your persistence peer. Follow these steps to create your bootstrapNode persistence_peer with the node ID:

Locate the node ID in the `~/.track/config/sequencer.toml` configuration file.

Copy the node ID from the configuration file.

Insert the copied node ID into the following string format:

```bash
"/ip4/<user-ip>/tcp/2300/p2p/<node_id>"
```


Replace `<user-ip>` with your actual IP address and `<node_id>` with the copied node ID.

This ensures that your track ID is correctly linked with the corresponding node ID for persistence_peer configuration.

**Start Node**

To start the node, execute the following command:

```bash
go run cmd/main.go start
```

This sequence sets up the necessary components for managing tracks effectively. Ensure that each step is executed correctly to ensure smooth operation.
