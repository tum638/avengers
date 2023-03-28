import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import Button from '@mui/material/Button';

import Slider from "@mui/material/Slider";

export default function SwitchListSecondary({handleFilter}) {
  const [checkedMovies, setCheckedMovies ] = React.useState(true);
  const [checkedSeries, setCheckedSeries ] = React.useState(true);
  const [checkedComics, setCheckedComics ] = React.useState(true);
  const [moviesSliderValue, setMoviesSliderValue ] = React.useState(30);
  const [seriesSliderValue, setSeriesSliderValue ] = React.useState(20);
  const [comicsSliderValue, setComicsSliderValue ] = React.useState(20);

  const handleMovieChange = (e) => {
    setCheckedMovies(e.target.checked);
  }
  const handleSeriesChange = (e) => {
    setCheckedSeries(e.target.checked);
  }
  const handleComicChange = (e) => {
    setCheckedComics(e.target.checked);
  }
  return (
    <List
      sx={{ width: 440, maxWidth: 700, bgcolor: "background.paper", marginLeft:2}}
      subheader={<ListSubheader>Filter by...</ListSubheader>}
    >
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary="movies less than.." />
        <Slider
        disabled={!checkedMovies}
          defaultValue={20}
          onChange={(e)=> {setMoviesSliderValue(e.target.value)}}
          aria-label="Default"
          value={moviesSliderValue}
          valueLabelDisplay="auto"
          sx={{ width: 230 }}
        />
         <Switch
      checked={checkedMovies}
      onChange={handleMovieChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      </ListItem>
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary="series less than.." />
        <Slider
        disabled={!checkedSeries}
        value={seriesSliderValue}
        onChange={(e)=>{setSeriesSliderValue(e.target.value)}}
          defaultValue={20}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{ width: 230 }}
        />
           <Switch
      checked={checkedSeries}
      onChange={handleSeriesChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
     
      </ListItem>
      <ListItem>
        <ListItemText id="switch-list-label-wifi" primary="comics less than.." />
        <Slider
          disabled={!checkedComics}
          onChange={(e)=> {setComicsSliderValue(e.target.value)}}
          value={comicsSliderValue}
          defaultValue={20}
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{ width: 230 }}
        />
        <Switch
      checked={checkedComics}
      onChange={handleComicChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      </ListItem>
      <Button variant="contained" sx={{marginLeft: 40,}} onClick={()=>{handleFilter(moviesSliderValue, seriesSliderValue, comicsSliderValue)}}>Filter</Button>
    </List>
    
  );
}
