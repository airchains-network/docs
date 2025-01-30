import Link from "@docusaurus/Link";
import React from "react";

const IntroToZKFHE = () => {
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
          to={`/concepts/intro-to-zkfhe/zk-proofs`}
          className="docs_card_without_image"
        >
          <div className="docs_card_heading_title">ZK Proofs</div>
          <div className="docs_card_description">
            Explore how ZK Proofs enable privacy-preserving computations and how
            they are used in Airchains.
          </div>
        </Link>
        <Link
          to={`/concepts/intro-to-zkfhe/fully-homomorphic-encryption`}
          className="docs_card_without_image"
        >
          <div className="docs_card_heading_title">
            Fully Homomorphic Encryption
          </div>
          <div className="docs_card_description">
            Learn how FHE enables computations on encrypted data without the
            need to decrypt it.
          </div>
        </Link>
        <Link
          to={`/concepts/intro-to-zkfhe/zk-snark-and-fhe-integration`}
          className="docs_card_without_image"
        >
          <div className="docs_card_heading_title">
            zk-SNARK and FHE Integration
          </div>
          <div className="docs_card_description">
            Learn how Provers and Sequencers maintain trust, integrity, and
            order in decentralized networks.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IntroToZKFHE;
