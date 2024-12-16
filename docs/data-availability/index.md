---
id: data-availability
title: Data Availability
sidebar_position: 6
slug: /concepts/data-availability
---

# Data Availability

## What is Data Availability

Data availability addresses the issue of whether specific data has been released into a blockchain network. This aspect becomes especially significant when a network node comes across a new block proposed for addition to the blockchain. At this juncture, it's the node's duty to gather all transaction data within this new block. Successfully obtaining this transaction data is critical for the node; it verifies that the data has been effectively spread throughout the network. In essence, if a node manages to retrieve and download all the transaction data from the incoming block, it affirms that data availability is upheld, confirming that the block's data has been properly published and is accessible across the network.

In blockchain systems, especially in scaling solutions like rollups or sidechains, only a summary of the data might be posted to the main chain (like Ethereum), with the detailed data hosted off-chain or on a secondary layer. Ensuring data availability in these scenarios is crucial because:

- **Security**: If data is unavailable, even temporarily, it can lead to security vulnerabilities. Nodes or validators must have access to complete data to validate transactions and maintain the integrity of the blockchain.

- **Decentralization**: Full data availability supports the decentralized nature of blockchain technology. It prevents central points of control or failure and ensures that all participants can independently verify the state of the network.

- **Trustlessness**: In a trustless environment like blockchain, participants shouldn't need to rely on a third party to assert that the data is correct. Availability allows participants to independently verify data.

## How Data Availability Works on Airchains

In of our blockchain system, the Data Availability (DA) layer functions as a critical intermediary, ensuring the seamless and secure settlement of transaction batches within the settlement layer. This layer plays a pivotal role in maintaining the integrity and availability of data, a cornerstone in our blockchain's operational framework.

### 1. Building a Robust Connection

The process begins with the DA layer establishing a robust connection between the execution and settlement layers. This connection is not just a mere linkage; it's a crucial bridge ensuring the continuous and reliable availability of data across different segments of the blockchain. This step is fundamental in maintaining the coherence and integrity of the blockchain's state across its various layers.

### 2. Requesting and Validating Data

The DA layer then proceeds to perform a series of critical validation checks. It requests the state root of the execution layer along with the compressed transaction hash and other relevant metadata. The state root serves as a cryptographic representation of the entire state of the execution chain at a given point in time. By verifying the state root, the DA layer confirms the validity and consistency of the execution chain's state, an essential aspect in ensuring the integrity of the blockchain.

### 3. Storing and Referencing Transaction Data

In parallel, the DA layer stores the compressed transaction hash within its own framework. This stored data becomes a reference point, available for future validation and verification processes. It acts as an immutable record, confirming whether specific transaction data was available at a certain point in time. This aspect of the DA layer's functionality is vital for maintaining transparency and trust in the blockchain network.

### 4. Finalizing the Settlement Process

Upon successful completion of these validation checks, the DA layer provides a crucial piece of information - the block height in the case of Celestia-based systems, and the transaction hash in the case of Avail-based systems. This information is not just a confirmation but also a marker of a successful transaction settlement. It signifies the completion of a critical phase in the transaction lifecycle and the readiness of the batch for integration into the blockchain ledger.

The DA layer, through these meticulously executed steps, reinforces the security, transparency, and efficiency of our blockchain system. It ensures that every transaction batch settled in the settlement layer is not only valid and consistent but also readily available and verifiable. This layer's role is a testament to our commitment to maintaining a blockchain environment that is both robust and trustworthy, aligning with the highest standards of data integrity and availability.
