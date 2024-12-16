---
id: zk-snark-and-fhe-integration
title: ZK Snark and FHE Integration
description: Zero-Knowledge Proofs in Airchains Framework
slug: /concepts/intro-to-zkfhe/zk-snark-and-fhe-integration
sidebar_position: 3
---

# ZK Snark and FHE Integration

Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge (zk-SNARKs) and Fully Homomorphic Encryption (FHE) are two advanced cryptographic techniques integrated into Airchains to enhance privacy, security, and verifiability.

zk-SNARKs enable the creation of succinct proofs that attest to the correctness of computations, which can be verified by others without gaining any knowledge about the input data.

While zk-SNARKs are excellent for maintaining confidentiality during verification, they have a drawback: the prover must access the private data to generate the proof. This necessity means that users must trust the prover with their sensitive information, potentially exposing it to risk.

To address the limitations of both zk-SNARKs and FHE, we propose combining these technologies to create zkFHE. This innovative approach leverages the strengths of both techniques to provide robust privacy and verifiability.

- **Encrypted Data Computation**: With zkFHE, users encrypt their data using FHE and send it to the prover for computation.

- **Proof Generation**: The prover performs computations on the encrypted data and generates zk-SNARKs to prove the correctness of these computations without decrypting the data.

- **Verification**: The verifier can then validate the zk-SNARKs, ensuring that the computations were performed correctly without accessing the underlying data.

This combined approach, zkFHE, ensures that sensitive data remains encrypted throughout the computation process, and the correctness of the computation can be verified without exposing any private information. By merging the privacy guarantees of FHE with the verifiability of zk-SNARKs, zkFHE provides a comprehensive solution for secure and trustworthy computations.

- **Enhanced Privacy**: Data remains encrypted during computations, ensuring that sensitive information is never exposed.

- **Robust Verifiability**: zk-SNARKs provide strong guarantees that computations are correct, even without revealing the underlying data.

- **Trust Minimization**: Users do not need to trust the prover with their plaintext data or the correctness of their computations, as zkFHE handles both aspects securely.

### Workflow for End Users with zkFHE

The integration of zk-SNARKs and FHE provides a seamless and secure workflow for end users to perform computations on their encrypted transaction data. Here’s how the process works:

1. **Data Encryption**: End users utilize the Airchains FHE SDK to encrypt their transaction data. This step ensures that the data is protected before being sent to the Airchains network.

2. **Submission to Stations**: The encrypted data is submitted to Stations, which are responsible for managing and processing the transactions. The encryption ensures that sensitive information remains confidential during this process.

3. **Processing by Stations**: Stations and other Airchains components perform their respective tasks on the encrypted data. These tasks include transaction validation, indexing, batch aggregation, and proof generation — all carried out without decrypting the data.

4. **Proof Generation**: After processing the encrypted data, Stations generate zk-SNARKs to prove the correctness of the computations. These proofs provide assurance that the operations were performed correctly without revealing the data.

5. **Verification and Settlement**: The generated zk-SNARKs are verified, and the processed transaction data is settled. The encrypted results are then returned to the end users.

6. **Decryption by End Users**: Finally, end users decrypt the returned results using their private keys to obtain the final outputs of the computations.

### Transaction Orchestration Protocol in zkFHE VMs

1. **Transaction Initialization**: A user initiates a transaction, specifying critical details such as the sender and recipient addresses, gas price, gas limit, and any additional payload data required. To ensure maximum privacy and confidentiality, the transaction data is encrypted using Fully Homomorphic Encryption (FHE). FHE allows computations to be performed on the encrypted data without needing to decrypt it, maintaining privacy at all stages of the transaction process. Then, the transaction is signed with the user’s private cryptographic key, generating a digital signature that guarantees the data’s authenticity and integrity while keeping the data encrypted.
2. **Transaction Dissemination**: Once the FHE-encrypted transaction is created, it is disseminated across the network. zkFHE VMs perform initial validation checks, ensuring that the transaction format adheres to protocol specifications, the gas limit is sufficient for execution, and the transaction’s nonce is correct, all while maintaining the encryption of the data. These validation checks are crucial as they ensure that only legitimate transactions are processed, preventing any form of malicious activity without revealing any sensitive information. By maintaining encryption throughout these checks, the privacy and confidentiality of the data are preserved, safeguarding the user’s information.

3. **Mempool Management**: Transactions that pass these validations are incorporated into the zkFHE VMs mempool — a temporary repository for pending encrypted transactions. Within the mempool, transactions are prioritized based on the gas price offered by the sender. Transactions with higher gas prices are typically given higher priority and are more quickly included in a block, as proposers seek to maximize their earnings from transaction fees. This prioritization mechanism ensures that the network operates efficiently, handling transactions in a manner that optimizes the use of resources, while still maintaining the integrity and privacy of the data via encryption.

4. **Batch Processing and zkProof Generation**: After individual transactions are validated, they are grouped into batches for efficient processing. zkFHE VMs generate these transaction batches and send them to a sequencer for generating zero-knowledge proofs. The sequencer performs cryptographic operations to produce proofs that validate the correctness of the entire batch without revealing any underlying data. This process ensures that each batch of transactions is accurately verified while maintaining confidentiality.

5. **Submission to Settlement and Data Availability Layers**: Once the batches are generated, they are submitted to the Junction (Settlement Layer) for zk proof verification, as well as to the Data Availability layers. The Settlement Layer ensures the finality and ordering of transactions, while the DA layers store the encrypted transaction data, ensuring that it is available and can be retrieved when needed, without being decrypted. This dual submission ensures that transaction integrity is maintained and that the data is securely stored and accessible in its encrypted form.




