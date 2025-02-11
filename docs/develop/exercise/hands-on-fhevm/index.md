---
id: index
title: Hands-on fhEVM
description: --
slug: /develop/exercise/hands-on-fhevm
hide_table_of_contents: false
sidebar_position: 1
---

# Hands-on fhEVM

This hands-on guide will walk you through **understanding, setting up, and working with fhEVM** to develop encrypted smart contracts and test them on fhEVM network.

### What You’ll Learn

- Basics of fhEVM and its architecture.
- Setting up a local fhEVM development environment.
- Writing, compiling, and deploying FHE-enabled Solidity contracts.
- Testing encrypted contract interactions.

---

## **1. Understanding fhEVM**

fhEVM is a **privacy-first smart contract platform** that allows computations on encrypted data **without decryption**. This ensures **on-chain privacy** while maintaining **verifiability and interoperability**.

### **Core Principles**

1. **Security**: No compromise on blockchain security.
2. **Public Verifiability**: Confidential yet verifiable computations.
3. **Developer-Friendly**: Familiar Solidity tools.
4. **Composability**: Interoperable confidential and public contracts.

### **Key Features**

- **Encrypted Data Types**: `ebool`, `euintX`, `eaddress`, `ebytesX`, etc.
- **Homomorphic Computation**: Arithmetic on encrypted numbers.
- **Confidential Transactions**: Data remains encrypted even on-chain.
- **EVM-Compatible**: Supports Solidity with added FHE functionalities.

### **Encrypted Data Types**

fhEVM introduces special encrypted types for secure computations:

- **Booleans**: `ebool`
- **Integers**: `euint4`, `euint8`, ... `euint256`
- **Addresses**: `eaddress`
- **Bytes**: `ebytes64`, `ebytes128`, `ebytes256`
- **Inputs**: `einput`

### **Type Casting**

fhEVM provides utility functions to convert between encrypted types:

- `TFHE.asEbool(value)`: Converts a boolean to an encrypted boolean.
- `TFHE.asEuintX(value)`: Converts an integer to an encrypted integer.
- `TFHE.asEaddress(value)`: Converts an address to an encrypted address.

fhEVM empowers secure and efficient computation on encrypted data while preserving blockchain functionality.

---

## 2. **fhEVM Architecture**

### **Core Components**

fhEVM consists of several **interdependent components**:

- **Smart Contracts**: Interact with encrypted data to execute logic securely on the blockchain.
- **fhEVM-native**: On-chain processing that handles homomorphic computations on ciphertexts using evaluation keys.
- **Key Management System (KMS)**: Safeguards private keys for decryption and re-encryption processes.
- **Gateway**: Acts as a bridge between the blockchain and the KMS, enabling secure operations like decryption and re-encryption.
- **Connector**: A service that connects the gateway to the KMS.
- **Gateway Store**: A service that stores ciphertexts.
- **fhEVM.js Library**: Facilitates client-side interactions such as encryption, decryption, and re-encryption.

---

### **End-to-End Confidentiality**

fhEVM ensures that:

- **Plaintext data is never exposed** during processing or transmission.
- **Homomorphic computations** enable complex operations on encrypted data.
- **Secure re-encryption** allows sharing and interoperability without compromising privacy.

This **tightly integrated architecture** supports **decentralized applications (dApps)** requiring privacy-preserving operations, paving the way for **more secure and trustless systems**.

For more detailed insights, you can refer to the **[official documentation by Zama](https://docs.zama.ai/fhevm)**.

---

### **What's Next?**

Now that you understand the **fhEVM architecture**, let's set up an **fhEVM network**.
➡ Move on to **[Network Setup](./setting-up-network.md)** to learn how to proceed.


<!--
## **3. Setting Up Your Development Environment**

Before writing encrypted contracts, install the necessary tools.

### **Prerequisites**

✔ **Go** (`v1.23.x` or later)
✔ **Docker** (`v26.x.x` or later)
✔ **Node.js** (`v20.x` or later)

📖 **[Full Setup Guide](./preparation.md)**

---

## **4. Deploying fhEVM Network**

We will **set up a local fhEVM test network** using Docker.

### **Start the Network**

```bash
make run-full
```

### **Fund Accounts**

```bash
npm run fund
```

### **Deploy Core Contracts**

```bash
npm run core
```

📖 **[Full Network Setup Guide](./setting-up-network.md)**

---

## **5. Writing and Deploying Encrypted Smart Contracts**

fhEVM supports **Fully Homomorphic Encryption (FHE)** within Solidity contracts.

### **Key Contract Operations**

✔ **EncryptedERC20**: Secure token minting, transfer, and approvals.
✔ **Homomorphic Computation**: Arithmetic on encrypted balances.
✔ **Decryption via Gateway**: Interact with KMS securely.

📖 **[Writing Smart Contracts](./writing-smart-contract.md)**
📖 **[Deploying Smart Contracts](./compiling-and-deploying.md)**

---

## **6. Testing Encrypted Contracts**

To validate your contracts, write **JavaScript-based tests** using `ethers.js`.

### **Example Test Cases**

✔ **Minting Tokens**
✔ **Encrypted Transfers**
✔ **Encrypted Approvals**
✔ **Balance Decryption**

📖 **[Writing Test Files](./writing-contract-test-files.md)**

---

## **7. Conclusion**

By completing this hands-on guide, you now understand:

- **How fhEVM works** and how it enables privacy in smart contracts.
- **How to set up and deploy an encrypted EVM-compatible network**.
- **How to write and test FHE-enabled Solidity contracts**.

### **Next Steps**

🔹 Explore **advanced encrypted contract interactions**.
🔹 Contribute to **fhEVM projects and research**.
🔹 Learn more from **[Zama’s Official Documentation](https://docs.zama.ai/fhevm)**.

📖 **[Final Thoughts & Summary](./08-conclusion.md)**

---

## **🚀 Ready to Build?**

You’re now equipped with the **fundamentals of fhEVM**. Start experimenting with your own encrypted smart contracts and push the boundaries of **on-chain privacy**! -->
