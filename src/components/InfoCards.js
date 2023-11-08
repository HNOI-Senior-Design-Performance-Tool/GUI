import { Card, Grid, Typography } from "@mui/material";


export const CO2InfoCard = ({ data }) => {
    return (
        <Card>
        <Grid container>
            <Grid item xs={12}>
            <Typography variant="h6" component="h2" align="center">
                CO2 Emissions
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h4" component="h2" align="center">
                {data.average_CO2_emissions} g/mi
            </Typography>
            </Grid>
        </Grid>
        </Card>
    );
};

export const NOxInfoCard = ({ data }) => {
    return (
        <Card>
        <Grid container>
            <Grid item xs={12}>
            <Typography variant="h6" component="h2" align="center">
                NOx Emissions
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h4" component="h2" align="center">
                {data.average_NOx_emissions} g/mi
            </Typography>
            </Grid>
        </Grid>
        </Card>
    );
}

export const PMInfoCard = ({ data }) => {
    return (
        <Card>
        <Grid container>
            <Grid item xs={12}>
            <Typography variant="h6" component="h2" align="center">
                PM Emissions
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h4" component="h2" align="center">
                {data.average_PM_emissions} g/mi
            </Typography>
            </Grid>
        </Grid>
        </Card>
    );
}