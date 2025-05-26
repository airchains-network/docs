---
id: architecture-overview
title: Architecture Overview
description: A description of my new page.
sidebar_position: 3
slug: /core-concepts/architecture-overview
---

# Architecture Overview

<img
src="/img/airchains_architecture.jpeg"
alt="Introduction"
className="intro_image"
/>

Airchains presents a novel multi-VM architecture engineered for secure and private computation. At its core lies the **Airchains Junction**, serving as both a settlement layer and a secure **Key Management System (KMS)**. This design empowers end-users interacting with **Fully Homomorphic Encryption Virtual Machines (fheVMs)** through a protected **Gateway** to execute computations on sensitive data without ever revealing it.

**Key Architectural Pillars:**

* **Confidential Computation with fheVMs:** The use of Fully Homomorphic Encryption (FHE) within the **fheVMs** is a cornerstone of Airchains. This allows smart contracts to operate directly on encrypted data, ensuring privacy and confidentiality throughout the computation process.
* **Integrity and Verifiability via zk-SNARKs:** To guarantee the correctness of these encrypted computations, the **Aggregator** generates zk-SNARK proofs. These succinct, non-interactive proofs are then verified by the **Proof Integrity Contract (PIC)** on the Airchains Junction, providing strong cryptographic assurance without revealing the underlying data.
* **Modular and Scalable Multi-VM Design:** The architecture's foundation in multiple independent **fheVMs** offers potential for scalability and specialization. Different fheVMs could be optimized for specific types of computations or applications.
* **Secure Settlement and Key Management with the Airchains Junction:** The **Airchains Junction** acts as the central coordination and security hub. It not only finalizes transactions and manages the overall state of the network but also securely handles the cryptographic keys essential for the FHE operations.

**Why This Architecture?**

The Airchains architecture is designed to address critical challenges in decentralized computing, particularly the need for both privacy and trust. By combining the power of FHE and zk-SNARKs, Airchains aims to provide:

* **Enhanced Privacy:** Sensitive data can be processed without being decrypted, protecting it from unauthorized access.
* **Trustless Verification:** zk-SNARKs enable the verification of computation integrity without the need to re-execute or reveal the data, fostering trust in the system's outputs.
* **Scalability Potential:** The multi-VM design allows for parallel processing and the potential to scale the network's computational capacity.
* **Secure Key Management:** The integrated KMS within the Airchains Junction provides a robust framework for managing the complex cryptographic keys required for FHE.

**Component Interactions:**

1.  **Transaction Initiation:** End users submit encrypted transaction requests via their wallets to the **Gateway**.
2.  **Encrypted Transaction Processing:** The **Gateway** handles initial processing and forwards the encrypted transactions to the designated **fheVM**. Within the **fheVM**, WASM-based smart contracts perform FHE operations on this encrypted data, updating the **fheVM's Local State**.
3.  **Aggregation and Proof Generation:** The **Aggregator** collects these state updates from the **fheVMs** and generates a zk-SNARK proof attesting to the validity of the computations.
4.  **Batching and Ordering:** The **Sequencer** orders batches of transactions to ensure a consistent processing order.
5.  **Proof Submission and Verification:** The **Aggregator** submits the generated zk-SNARK proof to the **Proof Integrity Contract (PIC)** on the **Airchains Junction**. The PIC verifies this proof using the **Proof Verification** mechanism.
6.  **State Finalization:** Upon successful proof verification, the **Finalization Engine** on the **Airchains Junction** updates the global state of the network.
7.  **Data Availability:** The **Data Availability** layer ensures that the underlying transaction data is accessible for auditability and potential recovery. The **KMS Core** plays a role here by providing access to necessary log data.
