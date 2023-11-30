import { Card, Grid, Typography } from "@mui/material";

import { useState, useEffect } from "react";


export const EmissionInfoCard = ({ data, emissionType}) => {

  const [body, setBody] = useState(
    <Typography>Emission Type not impemented</Typography>
  );

  const [title, setTitle] = useState(String(emissionType));

  const [link, setLink] = useState("https://www.epa.gov/ghgemissions/overview-greenhouse-gases");

  useEffect(() => {
    switch (emissionType) {
      case "CO2":
        setTitle("CO2 Emissions");
        setBody(
          <Typography
            variant="body1"
            component="h2"
            align="left"
            style={{ paddingLeft: 20, paddingRight: 20 }}
          >
            Carbon dioxide (CO2) is the primary greenhouse gas emitted through
            human activities. In 2021, CO2 accounted for 79% of all U.S.
            greenhouse gas emissions from human activities. The combustion of
            fossil fuels such as gasoline and diesel to transport people and
            goods was the largest source of CO2 emissions in 2021, accounting
            for 35% of total U.S. CO2 emissions and 28% of total U.S. greenhouse
            gas emissions.
          </Typography>
        );
        setLink(
          "https://www.epa.gov/ghgemissions/overview-greenhouse-gases#carbon-dioxide"
        );
        break;

      case "NOx":
        setTitle("NOx Emissions");
        setBody(
          <Typography
            variant="body1"
            component="h2"
            align="left"
            style={{ paddingLeft: 20, paddingRight: 20 }}
          >
            In 2021, nitrous oxide (N2O) accounted for 6% of all U.S. greenhouse
            gas emissions from human activities. Human activities such as
            agriculture, fuel combustion, wastewater management, and industrial
            processes are increasing the amount of N2O in the atmosphere.
            Nitrous oxide is emitted when fuels are burned. The amount of N2O
            emitted from burning fuels depends on the type of fuel and
            combustion technology, maintenance, and operating practices.
          </Typography>
        );
        setLink(
          "https://www.epa.gov/ghgemissions/overview-greenhouse-gases#nitrous-oxide"
        );
        break;

      case "PM":
        setTitle("Particulate Matter Emissions");
        setBody(
          <Typography
              variant="body1"
              component="h2"
              align="left"
              style={{ paddingLeft: 20, paddingRight: 20 }}
            >
              PM stands for particulate matter (also called particle pollution):
              the term for a mixture of solid particles and liquid droplets
              found in the air. Some particles, such as dust, dirt, soot, or
              smoke, are large or dark enough to be seen with the naked eye.
              Others are so small they can only be detected using an electron
              microscope.
            </Typography>
        );
        setLink(
          "https://www.epa.gov/pm-pollution/particulate-matter-pm-basics#PM"
        );
        break;

      default:
        setTitle("Click on a bar to see more info");
        setBody("");
        setLink("");
    }
  }, [emissionType]);

  return (
    <Card style={{ height: 500 }}>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            style={{ paddingTop: 20 }}
          >
            {title}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            style={{ }}
          >
            {data}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="body1"
            component="h2"
            align="left"
            style={{ paddingLeft: 20, paddingRight: 20 }}
          >
            {body}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" component="h2" align="center">
            <a href={link}>{link}</a>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};