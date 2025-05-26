import Link from "@docusaurus/Link";
import React from "react";

const Overview = () => {
    return (
        <div>
            <p>
                Welcome to the Airchains validator documentation. Validators play a critical role
                in securing the network by proposing, verifying, and finalizing blocks. This
                documentation will guide you through the process of setting up, running, and
                maintaining a validator node on the Airchains testnet.
                Choose a topic below to get started.
            </p>

            <div className="docs_card_overview_wrapper"
                style={{
                    "--docs_card_overview_wrapper_cols_value": "2",
                }}
            >
                <Link
                    to={`/validate-and-run-your-node/pre-requisites`}
                    className="docs_overview_card"
                >
                    <div className="docs_overview_card_heading_title">Prerequisites</div>
                    <div className="docs_overview_card_description">
                        Review the required hardware, software, and environment setup to ensure a smooth installation and configuration process for your node.
                    </div>
                </Link>
                <Link
                    to={`/validate-and-run-your-node/run-a-node`}
                    className="docs_overview_card"
                >
                    <div className="docs_overview_card_heading_title">Run a Node on Testnet</div>
                    <div className="docs_overview_card_description">
                        Step-by-step guide for setting up a full node on the Airchains testnet. Includes installation, syncing, and connection instructions.
                    </div>
                </Link>
                <Link
                    to={`/validate-and-run-your-node/validating-on-testnet`}
                    className="docs_overview_card"
                >
                    <div className="docs_overview_card_heading_title">Become a Validator</div>
                    <div className="docs_overview_card_description">
                        Learn how to register your node as a validator on the testnet, configure validator keys, and participate in block validation.
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Overview;