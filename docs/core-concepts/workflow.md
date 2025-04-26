---
id: workflow
title: Workflow
description: A description of my new page.
sidebar_position: 4
slug: /core-concepts/workflow
---

# Workflow

The Airchains workflow describes the end-to-end process of how a user interaction, in the form of a transaction request, is processed and finalized within the network. This involves several key stages and interactions between the various architectural components.

**1. Transaction Request Initiation:**

* An **End User**, using their wallet, initiates a transaction intended for a specific smart contract deployed on one of the **fheVMs**.
* This transaction request typically includes the target smart contract, the function to be called, and the input data. Importantly, the user's wallet will likely encrypt any sensitive input data using the **Public Key (PK)** associated with the target **fheVM**, ensuring confidentiality from the outset.

**2. Gateway Processing:**

* The encrypted transaction request is submitted to the **Gateway**.
* The **Gateway** plays a crucial role in preparing the transaction for processing within the fheVM. This may involve:
    * **Decryption of Envelopes:** If the initial transaction is wrapped in any transport-layer encryption, the Gateway decrypts it.
    * **Re-encryption for fheVM:** The Gateway might re-encrypt parts of the transaction data in a format suitable for processing within the fheVM, potentially using the **Evaluation Key** or performing other transformations necessary for FHE operations.
    * **Transaction Dissemination:** The Gateway then routes the processed transaction to the appropriate **fheVM** responsible for executing the targeted smart contract.

**3. fheVM Execution:**

* The designated **fheVM** receives the encrypted transaction.
* The **WASM Module** within the fheVM executes the relevant smart contract code.
* Crucially, the fheVM performs **FHE operations on the encrypted values**. This means the smart contract logic is applied directly to the encrypted data without the need for decryption within the VM itself, preserving privacy.
* During execution, the **fheVM** updates its **Local State** based on the outcome of the computation. This updated state remains encrypted.

**4. Aggregation and Proof Generation:**

* The **Aggregator** periodically polls or receives updates about the **Local State** changes from the various **fheVMs**.
* The Aggregator's primary function is to aggregate these state updates and generate a **zk-SNARK proof**. This proof cryptographically attests to the correctness of the computations performed by the fheVMs that led to these state changes. The proof is succinct and does not reveal any information about the underlying data or the computations themselves.

**5. Batching and Sequencing:**

* The **Sequencer** receives transactions (either directly from the Gateway or indirectly as part of the aggregation process).
* The Sequencer's role is to order these transactions into batches. This ordered batch ensures a canonical history of transactions and state transitions within the network.
* The ordered batch is then passed on for further processing, which includes the submission of the corresponding zk-SNARK proof.

**6. Proof Submission and Verification on the Airchains Junction:**

* The **Aggregator** submits the generated zk-SNARK proof, along with the corresponding batch of state updates or transaction information, to the **Proof Integrity Contract (PIC)** on the **Airchains Junction**.
* The **Proof Verification** module within the Junction then verifies the validity of the submitted proof. This verification process confirms that the computations performed on the fheVMs were executed correctly, without needing to re-run them or access the private data.

**7. State Finalization:**

* If the **Proof Integrity Contract (PIC)** successfully verifies the zk-SNARK proof, the **Finalization Engine** on the **Airchains Junction** updates the global state of the Airchains network. This update reflects the changes resulting from the batch of transactions processed by the fheVMs.
* This finalized state on the Junction serves as the secure and agreed-upon record of the network's current status.

**8. Data Availability and Auditability:**

* Throughout this process, The DA layer ensures that transaction inputs and potentially encrypted outputs/state changes of each fheVM are publicly accessible. This allows verification that transactions were processed by the intended fheVM and their effects (even encrypted) are recorded.

