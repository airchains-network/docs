---
id: compiling-and-deploying
title: Compiling and Deploying
description: compile and deploy FHE-enabled Solidity contracts
slug: /develop/exercise/hands-on-fhevm/compiling-and-deploying
hide_table_of_contents: false
sidebar_position: 4
---

# Compiling and Deploying fhEVM Smart Contracts

This guide provides instructions on compiling and deploying Fully Homomorphic Encryption Virtual Machine (fhEVM) smart contracts. These contracts operate in an environment where data remains encrypted, offering enhanced privacy.

If you are new to blockchain development, **learn the basics of compiling, deploying, and interacting with standard Ethereum smart contracts first**. There are many tutorials online that explain these foundational concepts, which will make it easier to understand fhEVM development.

The template repository contains pre-written codes for compilation and deployment, along with sample contracts. Follow the steps below to get started.

---

## fhEVM Smart Contracts

The compilation code uses the Solidity compiler (`solc`) to compile smart contracts and extract their ABI and bytecode. It also handles special import resolutions required for fhEVM contracts.

### Steps to Compile and Deploy

1. Ensure your contract file is placed in the `contracts/` directory.
2. Navigate to `contract-deploy.js` and search for the `contractName` variable, then replace its value with the name of your desired contract.

### Output

The compiled ABI is stored in the `build/` directory. For example:

- ABI: `build/<ContractName>.json`
- Bytecode: Generated and used internally by the deployment script.

**Note**: The script automatically resolves imports from `node_modules/`.

### Deployment of fhEVM Smart Contracts

The deployment process requires:

- A JSON-RPC endpoint of the fhEVM-compatible network.
- A private key for deploying the contract.
- The compiled contract file (from the `build/` directory).
- Constructor arguments (if any).

The `contract-deploy.js` script includes a function call that deploys your contract using a **_test private key_** derived from the mnemonic provided in the `.env` file.

---

## What's Next?

Let's continue to writing fhEVM smart contracts. Move on to the **[Writing Smart Contracts](./writing-smart-contract.md)** section to learn more.
