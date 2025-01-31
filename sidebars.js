/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "doc",
      id: "introduction",
      className: "custom-sidebar-item",
    },
    {
      type: "html",
      value: '<div class="sidebar-heading">Concepts</div>',
    },
    {
      type: "doc",
      id: "framework",
      className: "custom-sidebar-item",
    },
    {
      type: "category",
      label: "Intro to zkFHE",
      className: "custom-sidebar-item",
      link: {
        type: "doc",
        id: "intro-to-zkfhe/intro-to-zkfhe",
      },
      items: [
        "intro-to-zkfhe/zk-proofs",
        "intro-to-zkfhe/fully-homomorphic-encryption",
        "intro-to-zkfhe/zk-snark-and-fhe-integration",
      ],
    },
    {
      type: "doc",
      id: "prove-schemes-and-curves",
      className: "custom-sidebar-item",
    },
    {
      type: "doc",
      id: "sequencers",
      className: "custom-sidebar-item",
    },
    {
      type: "category",
      label: "Data Availability",
      className: "custom-sidebar-item",
      link: {
        type: "doc",
        id: "data-availability/data-availability",
      },
      items: ["data-availability/monolithic-vs-modular"],
    },
    {
      type: "html",
      value: '<div class="sidebar-heading">Releases</div>',
    },
    {
      type: "doc",
      id: "releases/switchyard-testnet",
      className: "custom-sidebar-item",
    },

    {
      type: "html",
      value: '<div class="sidebar-heading">Junction</div>',
    },
    {
      type: "category",
      label: "Operate a Node",
      className: "custom-sidebar-item",
      items: [
        "junction/operate-a-node/system-requirement",
        "junction/operate-a-node/running-a-full-node",
        "junction/operate-a-node/running-a-light-node",
      ],
    },
    {
      type: "category",
      label: "Become a Validator",
      className: "custom-sidebar-item",
      items: [
        "junction/become-a-validator/already-running-a-full-node",
        "junction/become-a-validator/run-a-validator-node",
      ],
    },
    {
      type: "doc",
      id: "junction/endpoints",
      className: "custom-sidebar-item",
    },
    {
      type: "html",
      value: '<div class="sidebar-heading">Rollups</div>',
    },
    {
      type: "doc",
      id: "rollups/quicklaunch",
      className: "custom-sidebar-item",
    },
    {
      type: "category",
      label: "EVM ZK Rollup",
      className: "custom-sidebar-item",
      items: [
        "rollups/evm-zk-rollup/system-requirements",
        "rollups/evm-zk-rollup/create-an-evm-zk-rollup",
        "rollups/evm-zk-rollup/run-a-full-node",
        "rollups/evm-zk-rollup/become-a-validator",
      ],
    },
    {
      type: "category",
      label: "CosmWasm ZK Rollup",
      className: "custom-sidebar-item",
      items: [
        "rollups/cosmwasm-zk-rollup/system-requirements",
        "rollups/cosmwasm-zk-rollup/create-a-cosmwasm-rollup",
        "rollups/cosmwasm-zk-rollup/run-a-full-node",
        "rollups/cosmwasm-zk-rollup/become-a-validator",
      ],
    },
    {
      type: "html",
      value: '<div class="sidebar-heading">Develop</div>',
    },
    {
      type: "doc",
      id: "develop/tx-struct",
      className: "custom-sidebar-item",
    },
    // {
    //   type: "doc",
    //   id: "develop/exercise",
    //   className: "custom-sidebar-item",
    // },
    {
      type: "category",
      label: "Exercise",
      className: "custom-sidebar-item",
      link: {
        type: "doc",
        id: "develop/exercise/exercise",
      },
      items: ["develop/exercise/hands-on-fhevm"],
    },
    {
      type: "doc",
      id: "develop/kms",
      className: "custom-sidebar-item",
    },
    {
      type: "doc",
      id: "develop/relayers",
      className: "custom-sidebar-item",
    },
    {
      type: "doc",
      id: "develop/contribute",
      className: "custom-sidebar-item",
    },
    {
      type: "html",
      value: '<div class="sidebar-heading">Tools</div>',
    },
    {
      type: "doc",
      id: "tools/airvisor",
      className: "custom-sidebar-item",
    },
    {
      type: "html",
      value: '<div class="sidebar-heading">API Reference</div>',
    },
    {
      type: "doc",
      id: "api-reference/api-reference",
      className: "custom-sidebar-item",
    },
  ],
};

export default sidebars;
