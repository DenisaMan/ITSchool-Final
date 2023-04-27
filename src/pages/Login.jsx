import { Password } from "@mui/icons-material";
import { Box, Typography, Link, TextField, Button } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export default function () {
  const { formValues, registerField } = useForm({
    email: "",
    password: "",
  });

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <Box className="FlexCenter" sx={{ mt: 12 }}>
      <Typography variant="h5">Sign in</Typography>
      <Typography variant="body1">
        Or{" "}
        <Link component={NavLink} to="/">
          explore the app
        </Link>
      </Typography>
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
        <TextField
          {...registerField("email")}
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <TextField
          {...registerField("password")}
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          required
        />
        <Button type="submit" variant="contained" fullWidth>
          Sign In{" "}
        </Button>
        <Link component={NavLink} to="/register" variant="body1">
          You don't have an account? Sign Up here!
        </Link>
      </Box>
    </Box>
  );
}
