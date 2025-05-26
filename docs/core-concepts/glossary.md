---
id: glossary
title: Glossary
description: A description of my new page.
sidebar_position: 6
slug: /core-concepts/glossary
---

# Glossary

Here are some key terms and their definitions based on our discussion of the Airchains architecture:

* **ASC Contract:** (Likely stands for Airchains Smart Contract) - A smart contract written in WASM (WebAssembly) that can be deployed and executed on an fheVM.


* **Airchains Junction:** The central settlement layer and Key Management System (KMS) of the Airchains network, responsible for coordinating the network, finalizing transactions, and managing cryptographic keys.


* **Aggregator:** A component that collects state updates from the fheVMs, aggregates them, and generates zk-SNARK proofs to attest to the correctness of the computations.


* **Data Availability (DA) Layer:** The part of the Airchains architecture that ensures transaction data and potentially encrypted outputs/state changes related to the fheVMs are publicly accessible for audit and verification.


* **End User:** An individual or entity that interacts with the Airchains network by submitting transaction requests.


* **Evaluation Key:** A specific type of cryptographic key used within Fully Homomorphic Encryption (FHE) schemes to enable computations on encrypted data.


* **fheVM (Fully Homomorphic Encryption Virtual Machine):** An isolated execution environment capable of running smart contracts and performing computations directly on encrypted data using Fully Homomorphic Encryption.


* **Finalization Engine:** A module within the Airchains Junction responsible for finalizing state updates and transactions on the network after successful proof verification.


* **Gateway:** The entry point for user-submitted transaction requests, responsible for initial processing and routing to the appropriate fheVM.


* **KMS Core (Key Management System Core):** The central component within the Airchains Junction that manages the generation, storage, and access control of cryptographic keys.


* **Local State:** The individual state maintained by each fheVM, which is updated as a result of executing transactions on encrypted data.


* **Proof Integrity Contract (PIC):** A smart contract on the Airchains Junction that verifies the zk-SNARK proofs submitted by the Aggregator.


* **Proof Verification:** A module within the Airchains Junction responsible for verifying the validity of zk-SNARK proofs.


* **Provers Network:** A network of entities that likely contribute to ensuring data integrity and availability within the DA layer.


* **Public Key (PK):** A cryptographic key used for encrypting data, such as user transaction inputs intended for an fheVM.


* **Sequencer:** A component responsible for ordering batches of transactions to ensure a consistent processing order within the network.


* **Validators:** Participants in the consensus and validation processes within the Airchains Junction.


* **WASM Module:** The WebAssembly module within an fheVM that executes the smart contract code.


* **zk-SNARK (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge):** A cryptographic proof that allows one party to prove to another that they possess certain information without revealing the information itself, and the proof is short and non-interactive. In Airchains, these proofs are used to verify the correctness of computations performed on encrypted data.
