import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';







export default function SearchAppBar({ toggleNav, avengers, setTopAvengerFromSearch }) {
  const toggle = (e) => {
    toggleNav(e.target.value);
  }
  const [names, setNames] = React.useState(null);
  React.useEffect(() => {
    const avengerNames = avengers.map((avenger) => avenger.name);
    setNames(avengerNames)
  }, [avengers])
  
  const [searchValue, setSearchValue] = React.useState("")
  return (
    <Box className="box" >
      <AppBar position="static" sx={{ backgroundColor: '#36454f' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={(e) => { toggle(e) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MARVEL CHARACTERS
          </Typography>
          <Autocomplete

             getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => {
        console.log(newValue.name)
        setTopAvengerFromSearch(newValue.name);
      }}
      disablePortal
      id="combo-box-demo"
      options={avengers}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Characters" />}
    />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
