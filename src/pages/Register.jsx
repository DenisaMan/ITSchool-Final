import { Box, Typography, TextField, Button, Link, Checkbox } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <Box className="FlexCenter" sx={{ mt: 12 }}>
      
      <Typography variant="h5">Create a new account!</Typography>
      <Typography variant="body1"/>
      <TextField
        id="outlined-basic" sx={{mt:3}}
        label="First-Name"
        variant="outlined"
        fullWidth
          margin="normal"
          required
      />
      <TextField
        id="outlined-basic"
        label="Last-Name"
        variant="outlined"
        fullWidth
          margin="normal"
          required
        
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        fullWidth
          margin="normal"
          required
        
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        fullWidth
          margin="normal"
        required
      />
      <TextField
        id="outlined-basic"
        label="Confirm Password"
        variant="outlined"
        fullWidth
          margin="normal"
        required
      />
      <Button type="submit" variant="contained" fullWidth>Create account! {""}</Button>
      <Link component={NavLink} to="/" variant="body1" sx={{mt:1}}>
          Continue witout an account!
        </Link>
    </Box>
  );
}
