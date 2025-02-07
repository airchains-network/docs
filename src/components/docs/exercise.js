import Link from "@docusaurus/Link";
import React from "react";

const Exercise = () => {
  return (
    <div>
      <p>
        Airchains leverages advanced Zero-Knowledge (ZK) and Fully Homomorphic
        Encryption (FHE) technologies to address critical challenges in
        scalability, privacy, and security.
      </p>
      <p>
        By integrating the two technologies together, Airchains ensures that
        computations can be performed on encrypted data, maintaining privacy,
        while zk-SNARKs provide robust mechanisms for verifying computations
        without exposing the underlying data, ensuring confidentiality and
        security. This is the essence of zkFHE.
      </p>
      <div className="docs_heading">Useful Links</div>
      <div className="docs_card_image_wrapper">
        <Link
          to={`/develop/exercise/hands-on-fhevm`}
          className="docs_card_without_image"
        >
          <div className="docs_card_heading_title">Hands-on fhEVM</div>
          <div className="docs_card_description">
            Testing suite for compiling, deploying and interacting with fhEVM
            contracts.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Exercise;
