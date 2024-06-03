import React from "react";
import { Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/dashboard"); // Navigate back to the dashboard
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h2" component="h3" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoBack}>
        Go to Dashboard
      </Button>
    </Container>
  );
}

export default NotFound;
