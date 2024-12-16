---
id: running-a-full-node
title: Running a Full Node
sidebar_position: 2
---

# Running a Full Node

This manual offers a detailed, step-by-step approach for establishing and operating a full node on the Junction, utilizing pre-assembled binaries. Designed to be user-friendly, it caters to both newcomers and seasoned node operators, ensuring an easy-to-follow procedure.

### 1. Download the `junctiond` Binary

Use the `wget` command to download the `junctiond` executable from the Airchains Network GitHub release page.

```bash
wget https://github.com/airchains-network/junction/releases/download/v0.1.0/junctiond
```

### 2. Make the Binary Executable

Apply the `chmod +x` command to add executable permissions to the `junctiond` file, allowing it to be run as a program.

```bash
chmod +x junctiond
```

### 3. Move the binary to a system-wide directory

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

#### Download the Testnet Genesis File

Begin by downloading the latest genesis file from the GitHub repository.

```bash
wget https://github.com/airchains-network/junction/releases/download/v0.1.0/genesis.json
```

#### Replace the Existing Genesis File

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

```bash
junctiond start
```
