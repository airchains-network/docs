import React from 'react'
import Link from "@docusaurus/Link";

const QuickStart = () => {
    return (
        <div>
            <p>
                This section serves as a central hub for deploying rollups using the Orchestrator CLI tool. It provides access to various deployment guides, catering to different levels of complexity and customization requirements.
            </p>

            <div className="docs_card_overview_wrapper"
                style={{
                    "--docs_card_overview_wrapper_cols_value": "2",
                }}
            >
                <Link
                    to={`/rollups/environment-setup`}
                    className="docs_overview_card"
                >
                    <div className="docs_overview_card_heading_title">Environment Setup</div>
                    <div className="docs_overview_card_description">
                        Essential steps to prepare your development environment for rollup deployment.
                    </div>
                </Link>
                <Link
                    to={`/rollups/quick-rollup-deployment`}
                    className="docs_overview_card"
                >
                    <div className="docs_overview_card_heading_title">Quick Rollup Deployment</div>
                    <div className="docs_overview_card_description">
                        Learn to deploy a rollup rapidly using the Orchestrator CLI tool with standard configurations.
                    </div>
                </Link>
                <Link
                    to={`/rollups/advanced-rollup-deployment-guide`}
                    className="docs_overview_card"
                >
                    <div className="docs_overview_card_heading_title">Advanced Rollup Deployment</div>
                    <div className="docs_overview_card_description">
                        A detailed guide for deploying a rollup with tailored configurations and specific parameters.
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default QuickStart;