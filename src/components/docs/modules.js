import Link from "@docusaurus/Link";
import React from "react";

const Modules = () => {
  return (
    <div>
      <p>
        Junction is a modular blockchain which consists of multiple modules.
        Each module has its own set of functions and data structures.
      </p>
      <p>
        Here you will find the documentation for each module.
        You can also find the implementation of each module in the {" "}
        <a href="https://github.com/airchains-network/junction/tree/main/x">Junction GitHub
          repository
        </a>
        .
      </p>
      <div className="docs_heading">Useful Links</div>
      <div className="docs_card_image_wrapper">
        <Link
          to={`/junction/modules/vrf`}
          className="docs_card_without_image"
        >
          <div className="docs_card_heading_title">VRF</div>
          <div className="docs_card_description">
            VRF is a module that is used to generate random numbers.
          </div>
        </Link>

        <div
          // to={`/junction/modules/espresso`}
          className="docs_card_without_image_disabled"
        >
          <div className="docs_card_heading_title_disabled">Espresso (Coming Soon)</div>
          <div className="docs_card_description_disabled">
            Espresso module is designed to provide a secure and efficient
            implementation of the Espresso Sequencer.
          </div>
        </div>
        <div
          // to={`/junction/modules/espresso`}
          className="docs_card_without_image_disabled"
        >
          <div className="docs_card_heading_title_disabled">DA (Coming Soon)</div>
          <div className="docs_card_description_disabled">
            DA module is designed to provide a secure and efficient
            implementation of the Data Availability.
          </div>
        </div>
        <div
          // to={`/junction/modules/espresso`}
          className="docs_card_without_image_disabled"
        >
          <div className="docs_card_heading_title_disabled">Zk-Sequencer (Coming Soon)</div>
          <div className="docs_card_description_disabled">
            Zk-Sequencer module is designed to provide Airchains Orchestrator
            a way to submit transactions to the L1 (Junction).
          </div>
        </div>
        <div
          // to={`/junction/modules/espresso`}
          className="docs_card_without_image_disabled"
        >
          <div className="docs_card_heading_title_disabled">Zk-FHE (Coming Soon)</div>
          <div className="docs_card_description_disabled">
            Zk-FHE module is designed to provide a secure and efficient
            implementation of the Zk-FHE.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
