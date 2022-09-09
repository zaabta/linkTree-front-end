import {
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Link,
  Checkbox
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { deepPurple } from "@mui/material/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signinAction } from "../redux/actions/users";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

    const [userData, setUserData] = useState({
        account: "",
        password: ""
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOnChange =  (e) =>{
        userData[e.target.name] = e.target.value
    } 
    const handleSubmit = async (userData ,e) => {
        e.preventDefault();
        await dispatch(signinAction(userData)).then(()=> navigate("/me")
        )
    }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        m: "auto",
        width: "30%",
        height: "100vh"
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: deepPurple[500] }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={e => handleSubmit(userData, e)} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email or Username"
          name="account"
          autoFocus
          onChange={(e) => handleOnChange(e)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={(e) => handleOnChange(e)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LogIn;
