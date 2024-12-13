---
id: fully-homomorphic-encryption
title: Fully Homomorphic Encryption
description: Zero-Knowledge Proofs in Airchains Framework
slug: /concepts/intro-to-zkfhe/fully-homomorphic-encryption
sidebar_position: 3
---

# Fully Homomorphic Encryption

Fully Homomorphic Encryption (FHE) is a revolutionary cryptographic paradigm that facilitates computations directly on encrypted data, without ever needing to be decrypted. This ensures that sensitive data remains private throughout the process, so that computations remain secure in any environment.

### Core Tenets of Fully Homomorphic Encryption

- **Homomorphic Properties**: The main attribute of FHE is its homomorphic properties, which permit specific algebraic operations to be executed on ciphertexts. These operations encompass addition and multiplication; fundamental for general computational processes. The resulting outputs of these operations remain encrypted, accessible only to the intended recipient via their private key for decryption.

- **Encryption and Decryption Mechanisms**: Within the FHE framework, data is encrypted using a public key prior to any computations. The encrypted data, or ciphertext, can then be manipulated via homomorphic operations. Upon completing the desired computations, the resulting ciphertext is decrypted using a private key, thereby revealing the final output.

- **Security and Privacy Assurance**: FHE ensures data privacy throughout the computation process. Given that data remains encrypted during computation, even the entities performing the operations are precluded from accessing the underlying information. This robust privacy guarantee makes FHE exceptionally powerful for applications that require stringent data security.

### History

The concept of homomorphic encryption has been around for several decades, but it wasn't until Craig Gentry's breakthrough in 2009 that a practical scheme for FHE was proposed. Gentry's work provided a foundation for subsequent research and development in the field of FHE.

### Basic Principles

#### Homomorphic Properties

The core feature of FHE is its ability to support operations on ciphertexts. Specifically, it allows:

- **Addition**: Given ciphertexts of two numbers, the encrypted sum can be computed without decrypting the inputs.

- **Multiplication**: Similarly, the encrypted product can be derived from ciphertexts of two numbers.

These properties enable the execution of arbitrary computations on encrypted data.

#### Encryption and Decryption

FHE schemes typically involve three main processes:

1. **Key Generation**: A public key for encryption and a private key for decryption are generated.

2. **Encryption**: Data is encrypted using the public key, producing ciphertexts that hide the original information.

3. **Decryption**: The final computation result, still in encrypted form, can be decrypted with the private key to reveal the plaintext result

### FHE Schemes

#### BGV Scheme

Developed by Zvika Brakerski, Craig Gentry, and Vinod Vaikuntanathan, the BGV scheme supports both addition and multiplication operations on ciphertexts. It uses lattice-based cryptography and requires an evaluation key for certain operations.

#### CKKS Scheme (Cheon-Kim-Kim-Song)

Introduced by Jung Hee Cheon, Andrey Kim, Miran Kim, and Yongsoo Song, the CKKS scheme is designed to handle approximate arithmetic on real numbers. This makes it particularly useful for applications involving real-valued data, such as machine learning and financial computations.

#### TFHE Scheme (Fast Fully Homomorphic Encryption over the Torus)

TFHE is a scheme optimized for high-speed computations, especially suitable for applications requiring real-time processing. It employs techniques for fast bootstrapping, which refreshes the ciphertext to manage noise accumulation.

### Technical Details

#### Noise Management

One of the challenges in FHE is the accumulation of noise with each operation. Excessive noise can render the ciphertext undecryptable. To address this, schemes include noise management techniques such as bootstrapping, which refreshes the ciphertext and reduces noise.

#### Bootstrapping

Bootstrapping is a process that resets the noise level in a ciphertext, allowing further operations to be performed without degrading the quality of the data. This is a crucial aspect of making FHE practical for extensive computations.

### Applications

#### Secure Data Processing

FHE is particularly valuable in scenarios where data privacy is paramount. Examples include:

- **Cloud Computing**: Enabling secure computation on sensitive data stored in the cloud without exposing the data to the cloud provider.

- **Healthcare**: Allowing the analysis of encrypted medical records while preserving patient privacy.

- **Finance**: Performing computations on encrypted financial data to protect sensitive information.

#### Blockchain and Cryptocurrencies

FHE can enhance the privacy and security of blockchain transactions by allowing computations on encrypted transactions and smart contracts, reducing the risk of data breaches.

### Challenges and Future Directions

#### Computational Overhead

FHE schemes typically incur significant computational overhead compared to traditional encryption. Ongoing research aims to optimize the efficiency and scalability of FHE to make it more practical for widespread use.

#### Standardization 

As FHE technology matures, efforts are underway to standardize schemes and protocols to ensure interoperability and security across different implementations.




