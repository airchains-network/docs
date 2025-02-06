---
id: setting-up-network
title: Setting Up Network
description: This guide walks you through configuring your development setup, ensuring seamless interaction with the fhEVM network for encrypted smart contract execution
slug: /develop/exercise/hands-on-fhevm/setting-up-network
hide_table_of_contents: false
sidebar_position: 3
---

# Setting Up Network

:::note Preparation
Before you start, ensure you have the necessary tools and dependencies installed on your system.
Follow the steps mentioned in the prerequisites section [here](./prerequisites.md).
:::

## Clone the Project Repository and Setup

Once Go and Docker are installed, clone the **hands-on-fhevm** repository from GitHub:

1. Open a terminal and navigate to the directory where you want to clone the repository.
2. Run the following command:

   ```bash
   git clone https://github.com/airchains-network/hands-on-fhevm.git
   ```

3. Navigate to the project directory:

   ```bash
   cd hands-on-fhevm
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Create a .env file:

   ```bash
   cp .env.example .env
   ```

---

## Setting Up the fhEVM Network using Docker

This section will guide you through setting up your **fhevm network** using Docker.

### Spin Up the Network

Start the network and the fhevm-service (along with generating the necessary keys) by running:

```bash
make run-full
```

### Fund Accounts

Fund the required accounts with:

```bash
npm run fund
```

### Deploy the Essential Core Contracts

Deploy the core contracts by executing:

```bash
npm run core
```

### Stop the Network

When you need to stop the network and all running containers, use:

```bash
make stop-full
```

### What's Next?

Your fhevm-network is now ready to use. Proceed to [Compiling and Deploying](./compiling-and-deploying.md) your smart contracts.

<!--

## Step 5: Clone the Project Repository and Setup

Once Go and Docker are installed, clone the **hands-on-fhevm** repository from GitHub:

1. Open a terminal and navigate to the directory where you want to clone the repository.
2. Run the following command:

   ```bash
   git clone https://github.com/airchains-network/hands-on-fhevm.git
   ```

3. Navigate to the project directory:

   ```bash
   cd hands-on-fhevm
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Create a .env file:

   ```bash
   cp .env.example .env
   ```

6. Deploy essential contracts on network setup:

   ```bash
   npm start
   ``` -->
