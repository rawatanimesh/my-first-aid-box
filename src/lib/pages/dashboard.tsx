// src/Dashboard.js
import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

const steps = [
  {
    title: "Prep for safety incidents",
    description: "Setup your account and add your first responders",
  },
  {
    title: "Track your supplies",
    description:
      "Add your first aid kits and supplies to track expiration dates and use",
  },
  {
    title: "Refill your supplies",
    description: "Set up auto-refills or just add your refill reminders",
  },
  {
    title: "Train your team",
    description:
      "Build a custom training plan to make sure your team is prepared",
  },
];

function Dashboard() {
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to your First Aid Office
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Get started with your first aid program in four easy steps:
      </Typography>
      <Grid container spacing={3}>
        {steps.map((step, index) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h2">
                  {step.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {step.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "auto" }}
                >
                  Get started
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Dashboard;
