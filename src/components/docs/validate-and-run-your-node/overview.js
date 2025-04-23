import Link from "@docusaurus/Link";
import React from "react";

const Overview = () => {
    return (
        <div>
            <p>
                Welcome to the validator documentation for Airchains. Validators are nodes that participate in the security of a network and are responsible for committing new blocks in the blockchain. To learn more, select one of the options below.
            </p>
            
            <div className="docs_card_overview_wrapper">
                <Link
                    to={`/validate-and-run-your-node/Pre-requisites.md`}
                    className="docs_overview_card"
                >
                    <div className="docs_overview_card_heading_title">Prerequisites</div>
                    <div className="docs_overview_card_description">
                        Before you start, make sure you have the following prerequisites in place for errorless installation and configuration of your node.
                    </div>
                </Link>
                <Link
                    to={`/validate-and-run-your-node/Pre-requisites.md`}
                    className="docs_overview_card"
                >
                    <div className="docs_overview_card_heading_title">Running a Node on Testnet</div>
                    <div className="docs_overview_card_description">
                        This guide will help you set up a node on the testnet. It includes instructions for installing the necessary software, configuring your node, and connecting to the testnet.
                    </div>
                </Link>
                <Link
                    to={`/validate-and-run-your-node/Pre-requisites.md`}
                    className="docs_overview_card"
                >
                    <div className="docs_overview_card_heading_title">Validating on Testnet</div>
                    <div className="docs_overview_card_description">
                        This guide will help you set up a validator on the testnet. It includes instructions for installing the necessary software, configuring your validator, and connecting to the testnet.
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Overview;
