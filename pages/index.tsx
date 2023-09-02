import { Button } from "@mui/material";

import type { NextPage } from "next";

import styles from "../src/button.module.css";

const Home: NextPage = () => {
  return (
    <main
      className={styles.main}
      // style={{
      //   width: "100vw",
      //   height: "100vh",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <div>
        <header>
          <h1>MUI5 + Next.js 12</h1>
        </header>
        <section>
          <Button className={styles.button} variant={"contained"}>
            Hello MUI
          </Button>
          <Button variant={"contained"}>Hello MUI</Button>
        </section>
      </div>
    </main>
  );
};

export default Home;
