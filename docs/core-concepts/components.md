---
id: components
title: Components
description: A description of my new page.
sidebar_position: 5
slug: /core-concepts/components
---

# Components

Here's a breakdown of the major components within the Airchains architecture:

**1. End Users:**

* Individuals or entities that interact with the Airchains network by submitting transaction requests through their wallets.

**2. fheVMs (Fully Homomorphic Encryption Virtual Machines):**

* Isolated execution environments capable of running WASM-based smart contracts.
* They possess the unique ability to perform computations directly on encrypted data using Fully Homomorphic Encryption, ensuring privacy during processing.
* Each fheVM maintains its own **Local State**, which is updated based on the execution of transactions.
* They manage cryptographic **Keys**, including a Public Key for encryption and an Evaluation Key for FHE operations.

**3. Gateway:**

* The entry point for user-submitted transaction requests.
* Responsible for initial processing, including potential decryption and re-encryption of transaction data.
* Routes transactions to the appropriate target **fheVM**.

**4. Airchains Junction (Settlement Layer & KMS):**

* The central coordination and security hub of the Airchains network.
* Houses several key modules:
    * **Junction Module:** Oversees the finalization of transactions and interacts with other components.
    * **Finalization Engine:** Responsible for finalizing state updates and transactions on the network.
    * **Proof Verification:** Verifies the zk-SNARK proofs submitted by the Aggregator.
    * **Validators:** Participate in the consensus and validation processes within the Airchains Junction.
    * **KMS Core (Key Management System Core):** Manages the generation, storage, and access control of cryptographic keys used throughout the Airchains ecosystem.

**5. Aggregator:**

* Collects state updates from the **fheVMs**.
* Aggregates these updates and generates **zk-SNARK proofs** that attest to the correctness of the encrypted computations performed by the fheVMs.
* Submits these proofs to the **Proof Integrity Contract** on the Airchains Junction.

**6. Sequencer:**

* Responsible for ordering batches of transactions to ensure a consistent processing order across the network.

**7. Data Availability (DA) Layer:**

* Ensures that transaction data and potentially encrypted outputs/state changes related to the **fheVMs** are publicly accessible for audit and verification purposes.

**8. Provers Network:**

* A network of provers that likely contribute to ensuring the integrity and availability of data within the DA layer. Their exact role in the diagram isn't fully specified.

**9. Proof Integrity Contract (PIC):**

* A smart contract residing on the Airchains Junction.
* Responsible for verifying the zk-SNARK proofs submitted by the Aggregator.
* Upon successful verification, it triggers updates to the global state of the Airchains network.
