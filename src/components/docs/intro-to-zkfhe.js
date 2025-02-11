import Link from "@docusaurus/Link";
import React from "react";

const IntroToZKFHE = () => {
  return (
    <div>
      <p>
        Airchains combines Zero-Knowledge (ZK) proofs and Fully Homomorphic
        Encryption (FHE) technologies to create innovative solutions for scalability,
        privacy, and security challenges in blockchain systems.
      </p>
      <p>
        Through the careful integration of these complementary technologies,
        Airchains enables secure computation on encrypted data while maintaining
        privacy. The zk-SNARKs provide efficient verification of state
        without compromising sensitive information. Together, these form the
        foundation of zkFHE - a powerful approach to blockchain privacy and security.
      </p>
      <div className="docs_heading">Useful Links</div>
      <div className="docs_card_image_wrapper">
        <Link
          to={`/concepts/intro-to-zkfhe/zk-proofs`}
          className="docs_card_without_image"
        >
          <div className="docs_card_heading_title">ZK Proofs</div>
          <div className="docs_card_description">
            Discover how ZK Proofs enable privacy-preserving computations and their
            implementation in Airchains.
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
            Understand how FHE creates opportunities for secure computation while
            maintaining data privacy through encryption.
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
            {/* TODO: Orchestrator??? */}
            Explore how Provers and Sequencers collaborate to ensure trust,
            integrity, and reliable ordering in decentralized networks.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IntroToZKFHE;
