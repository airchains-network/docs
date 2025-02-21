---
id: index
title: VRF Module
description: The VRF module enables verifiable random number generation for decentralized applications.
slug: /junction/modules/vrf
hide_table_of_contents: false
sidebar_position: 3
---

# VRF Module

The **Verifiable Random Function (VRF) Module** in Junction provides a **provably fair and unpredictable** source of randomness for decentralized applications. This ensures security, fairness, and integrity in various use cases like lotteries, gaming, and cryptographic protocols.

## Functions in the VRF Module

The VRF module offers several functions to interact with randomness securely.

### **Transactions**

These are the messages that users can send to interact with the VRF module.

#### 1. **Register Collection**

:::info
This is a one-time transaction to register a collection in the VRF module.  
:::

- **Description**: Registers a collection in the VRF module.
- **Message Type**: `MsgRegisterCollection`
- **Fields**:
  - `collection_name` _(string)_: The name of the collection.
  - `collection_id` _(string)_: The ID of the collection.
  - `members` _(string)_: The members of the collection which can request and verify randomness from this collection.
  - `offset` _(uint32)_: This is the starting index of the collection.

- **Example CLI Usage**:

  ```sh
  junctiond tx vrf register-collection --collection-name <name> --collection-id <id> --members <members> --offset <offset> --from <your-wallet>
  ```

#### 2. **Initiate VRF**

- **Description**: Requests a random number from the VRF module for a given collection.
- **Message Type**: `MsgInitiateVRF`
- **Fields**:
  - `key` _(string)_: The key of the collection to request randomness from.
  - `collection_id` _(string)_: The ID of the collection.
  - `upper_bound` _(uint32)_: The upper bound of the random number.
  - `serialized_rcp` _(bytes)_: The serialized RCP.
  - `proof` _(bytes)_: The proof of the RCP.
  - `origin_digest` _(bytes)_: The origin digest of the RCP.
- **Execution**:
  - A deterministic stats is generated off-chain 
  - which is used to generate a serialized RCP.
  - The serialized RCP is then submitted to the module.
  - The module verifies the RCP and generates a random number.
  - The random number is then submitted to the chain.
  - The module will emit a `EventInitiateVRF` event with the request ID as `<collection_id>-<key>`.
- **Example CLI Usage**:

:::warning
The serialized RCP, proof and origin digest are generated off-chain and are not provided in the CLI.
:::

  ```sh
  junctiond tx vrf initiate-vrf --key <key> --collection-id <id> --upper-bound <upper-bound> --serialized-rcp <serialized-rcp> --proof <proof> --origin-digest <origin-digest> --from <your-wallet>
  ```

#### 2. **SubmitVRFResult**

- **Description**: Submits the VRF-generated random number back to the chain.
- **Message Type**: `MsgSubmitVRFResult`
- **Fields**:
  - `request_id` _(uint64)_: The ID of the original request.
  - `random_value` _(bytes)_: The verifiable random output.
  - `proof` _(bytes)_: The cryptographic proof for the random value.
- **Execution**:
  - The module verifies the proof before accepting the randomness.
- **Example CLI Usage**:

  ```sh
  junctiond tx vrf submit-vrf-result --request-id <id> --random-value <value> --proof <proof> --from <your-wallet>
  ```

### Query Functions

The VRF module provides query methods to retrieve randomness-related data.

#### 1. **QueryVRFRequest**

- **Description**: Retrieves details of a submitted VRF request.
- **Query Type**: `QueryVRFRequest`
- **Parameters**:
  - `request_id` _(uint64)_: The request ID.
- **Example CLI Usage**:

  ```sh
  junctiond query vrf vrf-request <request_id>
  ```

- **Response**:

  ```json
  {
    "request_id": 1,
    "sender": "cosmos1...",
    "seed": "0xabc...",
    "status": "pending"
  }
  ```

#### 2. **QueryVRFResult**

- **Description**: Retrieves the result of a completed VRF request.
- **Query Type**: `QueryVRFResult`
- **Parameters**:
  - `request_id` _(uint64)_: The request ID.
- **Example CLI Usage**:

  ```sh
  junctiond query vrf vrf-result <request_id>
  ```
  
- **Response**:

  ```json
  {
    "request_id": 1,
    "random_value": "0x123456...",
    "proof": "0xabc...",
    "verified": true
  }
  ```

## Requirements

- The VRF module requires **off-chain computation** for randomness generation.
- The node submitting results must provide a valid **cryptographic proof**.
- Only whitelisted entities can submit VRF results (configurable in module params).

## Use Cases

The VRF module can be used in:

- **Decentralized Gaming**: Ensuring provably fair game outcomes.
- **Lottery Systems**: Generating random winners securely.
- **NFT Minting**: Assigning traits randomly in a verifiable way.
- **Randomized Governance**: Selecting council members or jurors.

---

This provides a **comprehensive and structured overview** of the VRF module. Let me know if you need any modifications! 🚀
