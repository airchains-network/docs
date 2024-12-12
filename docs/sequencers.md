---
id: sequencers
title: Sequencers
description: Sequencers are used to sequence transactions in a deterministic order.
sidebar_position: 5
---

# Sequencers

:::warning
The Airchains Sequencer is in its early development stages. This documentation is intended for rollup developers interested in early integration. Please note:

- The documentation may not be complete.
- The sequencer is not yet production-ready.

We welcome your pioneering spirit and appreciate your understanding as we continually improve our platform.
:::

<br/>
Rollups, an integral part of the Airchains platform, interact seamlessly with the Airchains Sequencer. This interaction is crucial for the transaction process flow. Here's how it works:

## Transactional Workflow

The process begins when users (clients) initiate transactions within the execution clients, also known as rollups. These transactions are first directed to Layer 1 (L1) sequencers.

L1 sequencers play a vital role. They take the incoming transactions and sequence them. Sequencing is essential for maintaining the correct order of transactions, which is crucial for consistency and integrity. Next, sequencers send the transactions to the batcher. The batcher’s job is to take these transactions into a batch of predetermined size.

> By batching, the system optimizes for network efficiency and cost. Batching multiple transactions reduces the overall processing load and potential fees.

The batcher, upon creating a batch, sends it to the [Data Availability (DA)](https://docs.airchains.io/concepts/data-availability) layer. The DA layer’s acknowledgment is crucial to proceed. This step ensures that the transaction data is accessible and can be referenced in the future. This layer acts as a safeguard for data integrity and availability, which is essential in a decentralized system.

Once the DA layer acknowledges the batch, it is sent to the prover. The prover's responsibility is to generate a cryptographic proof for this batch. This proof is vital as it validates the correctness and integrity of the transactions in the batch without revealing their specific content. With the cryptographic proof attached, the batch is then added to the Airchains Settlement Layer for the final settlement of transactions, ensuring they are recorded and finalized within the blockchain.

Once the batch is settled on the Airchains Settlement Layer, it awaits verification. This verification is essential for confirming the batch's validity and is conducted by the execution layer.

After successful verification, the system is ready to process new transactions, repeating this cycle to maintain continuous operation.

_Let's delve into a detailed exploration to fully understand the entire process._

## Indexer

The indexer, a critical subsystem of the sequencer, is responsible for the off-chain indexing of blocks and transactions within our system. This process involves several technically nuanced steps:

1. **Block Discovery and Validation**: The system initiates by continuously monitoring and validating newly minted blocks on the blockchain.

2. **Transaction Enumeration and Analysis**: Upon block validation, it enumerates the transactions, analyzing their hash, payload, and metadata to ensure integrity and compliance with blockchain protocols.

3. **Data Persistence and Indexing**: Each transaction is then persisted in an off-chain storage, with indexing based on key attributes like transaction ID, block reference, and timestamp, facilitating efficient query operations.

4. **Sequential Block Processing with Integrity Checks**: The system then iteratively processes each subsequent block, applying cryptographic checks and consensus algorithm validations to maintain blockchain integrity.
   <br/>
   <img src="/img/indexer.png" alt="Overview" style={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
   }}/>
   <br/>

## Aggregator

The Aggregator in a blockchain context is a sophisticated component designed for optimizing transaction processing. Here's an in-depth explanation of its functions and operational mechanisms:

### Transaction Collection and Filtering

The Aggregator begins by collating transactions from the network. It applies a filtering mechanism to identify transactions relevant to its batching criteria, focusing on optimizing batch composition for efficiency and throughput.

### Selective Data Extraction

Unlike a comprehensive transaction ledger, the Aggregator selectively extracts only critical data points from each transaction such as sender and receiver details, transaction amounts, unique transaction hashes,etc.

### Batch Creation

Utilizing this extracted data, the Aggregator then methodically compiles transactions into batches. This batching process is a crucial step, enhancing network throughput by consolidating multiple transaction requests into a single, manageable unit.

<img src="/img/batching.png" alt="Overview" style={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
   }}/>
<br/>

## Prover

The Prover is a sophisticated component in blockchain technology, particularly in scenarios involving zero-knowledge proofs (ZKP). It plays a crucial role in ensuring transaction integrity and privacy. Let's delve into the detailed, step-by-step process the Prover undertakes to create a proof for a batch:

### Circuit Initialization

The Prover starts by initializing a cryptographic computation circuit. This circuit is specifically designed to process transaction data and generate proofs, conducting sophisticated mathematical functions to achieve this. These functions are essential for maintaining both privacy and integrity in the proof generation process. The initialization of this circuit lays the groundwork for all subsequent computational steps and is fundamental to the generation of valid proofs.

### State Root Generation

Using the extracted transaction data, the Prover then generates a state root. This state root is a cryptographic representation of the transaction data and is used as a key input for the Data Availability (DA) call. The generation of the state root is a complex cryptographic process, ensuring that the proof is both secure and verifiable.

### Witness Creation

The Prover creates a witness using the transaction data present in the batch and the Scalar Field of the cryptographic curve. The witness is a crucial component in the ZKP process, as it contains the necessary information to generate a proof without revealing the underlying transaction data.

### Proof Generation

With the witness, the initialized circuit, and the proving key (obtained when the sequencer is first initiated), the Prover generates a proof of the batch. This proof is a zero-knowledge proof, meaning it demonstrates the validity of the transactions in the batch without revealing the transactions' contents.

Finally, the Prover returns the generated proof to the sequencer's relevant part.

## Transaction Settlement and Verification Process

Upon the successful generation and compilation of a batch, complete with its corresponding zero-knowledge proof and the current state hash, the sequencer embarks on a crucial step. It transmits this bundled data, enriched with the necessary metadata, to the DA layer. This transfer is not merely a procedural task but a fundamental aspect of ensuring the integrity and validity of the blockchain transactions. The metadata accompanying the batch provides additional context and information, enhancing the verifiability and traceability of the transactions within the blockchain ledger.

The sequencer, having dispatched this critical data to the DA layer, enters a phase of anticipation. It awaits the DA check - a confirmation that is instrumental in the blockchain process. This check serves as a seal of approval from the DA layer, affirming that the data is not only received but also validated and ready for the next phase. This acknowledgment is essential, as it signifies the successful adherence to the stringent protocols and standards that govern the blockchain network.

Once the DA check is received, the sequencer proceeds to integrate the batch, along with its proof, into the settlement layer of the blockchain. This step is vital in the transaction lifecycle, as the settlement layer is where transactions attain their finality and become an immutable part of the blockchain ledger. The addition of the batch to this layer is a meticulous process, ensuring that each transaction is accurately recorded and permanently stored.

Following the settlement of the batch, the blockchain system engages in a comprehensive verification process. This process involves a thorough examination of the batch within the settlement layer, ensuring its complete compliance with the network's protocols. It's a critical step in maintaining the network's integrity and trustworthiness, serving as a final check to validate the accuracy and authenticity of the transactions.

The ongoing cycle of these processes - the sequencer's interaction with the DA layer, the receipt of the DA check, the integration into the settlement layer, and the final verification - is integral to the blockchain's functionality. It ensures not only the efficiency and accuracy of transaction processing but also upholds the principles of security and transparency that are central to blockchain technology. Each step in this cycle, meticulously carried out by the various components of the blockchain, contributes to the robustness and reliability of the entire network.

<img src="/img/transaction-verification.png" alt="Overview" style={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
   }}/>
