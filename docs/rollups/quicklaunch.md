---
id: quicklaunch
title: Quicklaunch
sidebar_position: 1
---

# Quicklaunch

:::warning
The Quicklaunch documentation provided is intended for the devnet and is not suitable for use on the switchyard testnet. Please wait as we are actively working on this, and we will launch it for the testnet very soon. Thank you for your patience.
:::
In this section, we will provide a comprehensive, step-by-step guide for the swift initiation of the Airchains Rollup, whether it be an EVM, SVM, or CosmWasm variant. The guide encompasses the DA options of Avail and Celestia. We strongly recommend opting for the Quicklaunch method, rather than manually configuring every aspect. Quicklaunch streamlines the setup process, ensuring a more efficient and hassle-free deployment of your Airchains rollup.

:::note
Please Ensure System Requirements are Met for Rollup Creation

Before initiating the creation of your preferred Rollup – be it an EVM, SVM, or CosmWasm variant – kindly review the specific system requirements outlined in the respective sections:

1.  [EVM Rollup Requirements](evm-rollup-requirements)
2.  [SVM Rollup Requirements](svm-rollup-requirements)
3.  [CosmWasm Rollup Requirements](cosmwasm-rollup-requirements)
:::

### 1. Clone the GitHub Repository

Clone the Airchains GitHub repository using the following command:

```bash
https://github.com/airchains-network/quicklaunch
```

### 2. Navigate to the Cloned Directory and Checkout a Release Version:

```bash
cd quicklaunch
git checkout development/v1/patch-2
```

### 3. Build the binaries using go:

```bash
go mod tidy
go build -o quicklaunch main.go
```

### 4. Make the Binary Executable:

```bash
chmod +x quicklaunch
```

### 5. Init the station using command line prompt or flags :

Replace with the moniker of the station you want to launch :

```bash
./quicklaunch init <MONIKER>
```

#### Available Flags:

```bash
--station-env            string      Station environment(EVM, WASM, SVM)
--chain-id               string      Chain ID of the station
--da-type                string      Data Availability Type of the station
--keyname                string      Keyname of the wallet to be used
--track-type             string      Sequencer type of the station (default, espresso)
--default-denom          string      Default Denom of the station
--supply                 string      Supply of the station (without decimal : 1 = 1 )
--genesis-allocation     string      Genesis allocation of the genesis validator account
```

:::info
**Note:** Run next command after successful completion of the above command.
:::

### 6. Create a Station:

```bash
./quicklaunch create-station
```

### 7. Start the Station:

```bash
./quicklaunch start
```

### 8. To Stop the Station, DA Private Node, and Track node:

:::info
**Note:** DA private node is started for avail and celestia da.
:::

```bash
./quicklaunch stop
```
