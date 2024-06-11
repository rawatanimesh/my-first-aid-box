// src/Boxes.js
import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CreateFirstAidBox from "../popups/CreateFirstAidBox";

const initialBoxes = [
  {
    name: "Kitchen",
    location: "Building A, Floor 2",
    assignedCases: "12/20",
    inventory: 60,
    notes: "",
  },
  {
    name: "Office",
    location: "Building A, Floor 3",
    assignedCases: "5/10",
    inventory: 50,
    notes: "",
  },
  {
    name: "Gym",
    location: "Building B, Floor 1",
    assignedCases: "8/15",
    inventory: 40,
    notes: "",
  },
  {
    name: "Pool",
    location: "Building B, Floor 2",
    assignedCases: "10/18",
    inventory: 55,
    notes: "",
  },
];

function Boxes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [boxes, setBoxes] = useState(initialBoxes);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBoxes = boxes.filter(
    (box) =>
      box.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      box.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateBox = (newBox) => {
    // Ensure newBox data is properly formatted and not undefined
    console.log(newBox);
    const formattedBox = {
      name: newBox.boxName || "",
      location: newBox.boxLocation || "",
      assignedCases: newBox.assignedCases || "0/0",
      inventory: newBox.inventory || 0,
      notes: newBox.boxNotes,
    };
    setBoxes([...boxes, formattedBox]);
    handleClose();
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          mb={3}
        >
          <Typography variant="h4" component="h1">
            First Aid Boxes
          </Typography>
          <Typography variant="subtitle1">
            You can manage the inventory and assign cases to each first aid box.
          </Typography>
        </Box>

        <Button variant="contained" color="primary" onClick={handleOpen}>
          New Box
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search first aid boxes"
          InputProps={{
            startAdornment: <SearchIcon position="start" />,
          }}
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: "100%" }}
        />
      </Box>
      {filteredBoxes.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Assigned Cases</TableCell>
                <TableCell>Inventory</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBoxes.map((box, index) => (
                <TableRow key={index}>
                  <TableCell>{box.name}</TableCell>
                  <TableCell>{box.location}</TableCell>
                  <TableCell>{box.assignedCases}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <LinearProgress
                        variant="determinate"
                        value={(box.inventory / 100) * 100}
                        sx={{ width: "100%", marginRight: 1 }}
                      />
                      {box.inventory}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Button variant="text" color="primary">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
          No results to display
        </Typography>
      )}
      <CreateFirstAidBox
        open={open}
        handleClose={handleClose}
        handleCreateBox={handleCreateBox}
      />
    </Container>
  );
}

export default Boxes;
