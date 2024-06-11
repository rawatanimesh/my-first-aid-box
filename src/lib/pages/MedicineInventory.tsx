import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddMedicine from "../popups/AddMedicine";
const initialMedicines = [
  {
    medicine: "Aspirin",
    qty: 2,
    expiry: "Expires in 3 months",
    notes: "For headaches, 1 tab every 4 hours",
  },
  {
    medicine: "Band-aids",
    qty: 5,
    expiry: "Never",
    notes: "For small cuts and scrapes",
  },
  {
    medicine: "Hydrogen Peroxide",
    qty: 1,
    expiry: "Expires in 6 months",
    notes: "For cleaning wounds",
  },
  {
    medicine: "Ibuprofen",
    qty: 4,
    expiry: "Expires in 1 year",
    notes: "For pain relief, 2 tabs every 6 hours",
  },
  {
    medicine: "Neosporin",
    qty: 2,
    expiry: "Expires in 6 months",
    notes: "For preventing infection in minor wounds",
  },
  {
    medicine: "Pepto Bismol",
    qty: 1,
    expiry: "Expires in 2 years",
    notes: "For upset stomach, 1-2 tablets every 3 hours as needed",
  },
  {
    medicine: "Rubbing Alcohol",
    qty: 1,
    expiry: "Expires in 2 years",
    notes: "For cleaning and disinfecting wounds",
  },
];

function MedicineInventory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [medicines, setMedicines] = useState(initialMedicines);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.medicine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medicine.notes.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateMedicine = (newMedicine) => {
    const formattedMedicine = {
      medicine: newMedicine.medicine || "",
      qty: newMedicine.qty || 0,
      expiry: newMedicine.expiry || "Unknown",
      notes: newMedicine.notes || "",
    };
    setMedicines([...medicines, formattedMedicine]);
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
            Medicine Inventory
          </Typography>
          <Typography variant="subtitle1">
            Overview of all medicines in a box
          </Typography>
        </Box>

        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Medicine
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
          placeholder="Search medicines"
          InputProps={{
            startAdornment: <SearchIcon position="start" />,
          }}
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: "100%" }}
        />
      </Box>

      {filteredMedicines.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Medicine</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Expiry</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredMedicines.map((medicine, index) => (
                <TableRow key={index}>
                  <TableCell>{medicine.medicine}</TableCell>
                  <TableCell>{medicine.qty}</TableCell>
                  <TableCell>{medicine.expiry}</TableCell>
                  <TableCell>{medicine.notes}</TableCell>
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
      <AddMedicine
        open={open}
        handleClose={handleClose}
        handleCreateMedicine={handleCreateMedicine}
      />
    </Container>
  );
}

export default MedicineInventory;
