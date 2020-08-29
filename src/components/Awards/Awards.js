import React from "react";

import { Paper, Typography } from "@material-ui/core";
import styles from "./Awards.module.css";

function Award({ name, desc }) {
  return (
    <div>
      <br />
      <Paper className={styles.padding}>
        <Typography variant="h6">{name}</Typography>
        <Typography>{desc}</Typography>
      </Paper>
    </div>
  );
}

export default function Awards() {
  return (
    <Paper className={styles.padding}>
      <Typography variant="h5">Recent Awards:</Typography>
      <Award
        name="2020 Yale Summer STEM Research Fellowship"
        desc="Awarded the Yale Summer STEM Research Fellowship with stipend to continue conducting research into the automated detection of conversation groupings using computer vision and deep learning techniques."
      />
      <Award
        name="2019 HackMIT Financial Technology Track Winner"
        desc="Competed in the 2019 HackMIT event alongside two classmates. Developed Project Horus, a receipt scanning application that uses optical character recognition and natural language processing to identify and reward healthy shopping habits. Won the Instabase Sponsor Award and the Financial Technology Track."
      />
      <Award
        name="2019 Regeneron Science Talent Search Scholar"
        desc="Named one of 300 Regeneron Science Talent Search Scholars nationwide for exceptional high school scientific research and academic potential. Researched the effects of relativity on the quadrupole oscillation of compact objects."
      />
      <Award
        name="2018 FIRST Robotics Competition Dean's List Finalist Award"
        desc="As Captain of FIRST Robotics Competition Team 5511, named one of 200 finalists (among 92,000 students) for the FIRST Dean's List Award, recognizing outstanding leadership and commitment to FIRST."
      />
      <Award
        name="2018 Modeling the Future Challenge Winner"
        desc="Developed a mathematical model and wrote a paper on the predicted effects of autonomous vehicle adoption over the coming decades. Presented at the Modeling the Future Symposium in NYC and named national champion."
      />
    </Paper>
  );
}
