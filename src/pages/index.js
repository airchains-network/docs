import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { Redirect } from "@docusaurus/router";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <div className={styles.container}>
        <Redirect to="/introduction" />
      </div>
    </Layout>
  );
}
