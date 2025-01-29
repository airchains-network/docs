import Link from "@docusaurus/Link";
import React from "react";

const IntroductionComponent = () => {
  return (
    <div>
      <p>
        Welcome to the documentation for the Starport SDK. Starport is a tool
        for building blockchains using the Cosmos SDK. It is designed to be
        simple, fast, and developer-friendly. Starport is the fastest way to
        build a blockchain, and it is the best way to build a blockchain for the
        Cosmos ecosystem.
      </p>
      <div className="docs_heading">Learn Basics</div>
      <div className="docs_card_image_wrapper">
        <Link to={`/concept/framework`} className="docs_card_without_image">
          <div className="docs_card_heading_title">Framework</div>
          <div className="docs_card_description">
            Explore the core architecture and framework of Airchains, its
            components and design principles.
          </div>
        </Link>
        <Link
          to={`/concepts/intro-to-zkfhe`}
          className="docs_card_without_image"
        >
          <div className="docs_card_heading_title">Intro to zkFHE</div>
          <div className="docs_card_description">
            Understand Zero-Knowledge Fully Homomorphic Encryption for
            privacy-preserving computation.
          </div>
        </Link>
        <Link
          to={`/concepts/prove-schemes-and-curves`}
          className="docs_card_without_image"
        >
          <div className="docs_card_heading_title">
            Prove Schemes and Curves
          </div>
          <div className="docs_card_description">
            Learn how Provers and Sequencers maintain trust, integrity, and
            order in decentralized networks.
          </div>
        </Link>
      </div>
      <div className="docs_heading">Releases</div>
      <div className="docs_card_image_wrapper">
        <Link
          to={`/releases/switchyard-testnet`}
          className="docs_card_with_image"
        >
          <div className="version_chip_container">
            <span className="version_chip">1.0.0</span>
          </div>
          <div className="docs_card_heading_title">Switchyard Testnet</div>
          <div className="docs_card_description">
            Airchains Framework: Simplifying blockchain innovation with a
          </div>
        </Link>
      </div>
      <div className="docs_heading">Build a Chain</div>
      <div className="docs_card_image_wrapper">
        <Link to={`/junction`} className="docs_card_with_image">
          <div>
            <img
              src="/img/junction.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">Junction</div>
          <div className="docs_card_description">
            Explore building on AIrchains Junction and running its nodes.
          </div>
        </Link>
        <Link to={`/rollups`} className="docs_card_with_image">
          <div>
            <img
              src="/img/execution.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">Execution Environment</div>
          <div className="docs_card_description">
            Explore different VMs and build on them using Airchains.
          </div>
        </Link>
      </div>
      <div className="docs_heading">Develop</div>
      <div className="docs_card_image_wrapper">
        <Link to={`/rollups/quicklaunch`} className="docs_card_with_image">
          <div>
            <img
              src="/img/quicklaunch.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">Quicklaunch</div>
          <div className="docs_card_description">
            Easily launch and initiate an AIrchains Rollup in no time
          </div>
        </Link>
        <Link to={`/develop/tx-struct`} className="docs_card_with_image">
          <div>
            <img
              src="/img/transaction2.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">Tx Struct</div>
          <div className="docs_card_description">
            Airchains Framework: Simplifying blockchain innovation with a
          </div>
        </Link>
        <Link to={`/develop/exercise`} className="docs_card_with_image">
          <div>
            <img
              src="/img/exercise2.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">Exercise</div>
          <div className="docs_card_description">
            Strengthen your understanding with some practical exercises.
          </div>
        </Link>
        <Link to={`/develop/kms`} className="docs_card_with_image">
          <div>
            <img
              src="/img/kms3.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">KMS</div>
          <div className="docs_card_description">
            KMS securely manages, stores, and handles cryptographic keys
          </div>
        </Link>
        <Link to={`/develop/relayers`} className="docs_card_with_image">
          <div>
            <img
              src="/img/relayer.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">Relayers</div>
          <div className="docs_card_description">
            Facilitates secure and seamless data transfer between chains.
          </div>
        </Link>
        <Link to={`/develop/contribute`} className="docs_card_with_image">
          <div>
            <img
              src="/img/contributing.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">Contributing</div>
          <div className="docs_card_description">
            Find guidelines to contribute to Airchains development.
          </div>
        </Link>
      </div>
      <div className="docs_heading">Tools</div>
      <div className="docs_card_image_wrapper">
        <Link to={`/rollups/quicklaunch`} className="docs_card_with_image">
          <div>
            <img
              src="/img/quicklaunch.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">Quicklaunch</div>
          <div className="docs_card_description">
            Easily launch and initiate an AIrchains Rollup in no time
          </div>
        </Link>
        <Link to={`/tools/airvisor`} className="docs_card_with_image">
          <div>
            <img
              src="/img/upgrade.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">Airvisor</div>
          <div className="docs_card_description">
            Easily auto-upgrade the chain with the latest JIPs.
          </div>
        </Link>
      </div>
      <div className="docs_heading">API Reference</div>
      <div className="docs_card_image_wrapper">
        <Link to={`/api-reference`} className="docs_card_with_image">
          <div>
            <img
              src="/img/exercises.png"
              alt="airchains"
              className="junction_logo"
            />
          </div>
          <div className="docs_card_heading_title">API Reference</div>
          <div className="docs_card_description">
            Access AIrchains API documentation for easy integration.
          </div>
        </Link>
      </div>
    </div>
  );
};

export default IntroductionComponent;
