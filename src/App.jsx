import { useEffect, useState } from 'react'
import SearchAppBar from './components/SearchAppBar'
import TemporaryDrawer from './components/TemporaryDrawer'
import BasicCard from './components/BasicCard'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import { Avatar } from '@mui/material'
import AlignItemsList from './components/AlignItemList'
import SwitchListSecondary from './components/SwitchListSecondary'

import './App.css';
const API_KEY = import.meta.env.VITE_APP_API_KEY;






function App() {
  const [toggle, setToggle] = useState(false)
  const [avengers, setAvengers] = useState([]);
  const [topAvenger, setTopAvenger] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [searchList, setSearchList] = useState([]);

  const toggleNav = () => {
    if (toggle === true) {
      setToggle(false)
    } else {
      setToggle(true)
    }

  }
  const setTopAvengerFromSearch = (name) => {

    const findSearchedAvenger = avengers.find((avenger) => avenger.name === name)
    setTopAvenger(findSearchedAvenger)
  }
  const handleFilter = (numMovies, numSeries, numComics) => {

    const filteredAvengers = avengers.filter((avenger) => avenger.comics.available < numComics
      && avenger.series.available < numSeries && avenger.stories.available < numMovies)
    setSearchList(filteredAvengers);
  } 
  useEffect(() => {

    const avengerWithMaxMovies = searchList.reduce((acc, curr) => {
      if (curr.stories.available > acc) {
        acc = curr.stories.available
        return acc
      }
      else {
        acc = acc + 0;
        return acc
      }
     }, 0)

    const findmaxAvenger = searchList.find((avenger) => avenger.stories.available === avengerWithMaxMovies)
    setTopAvenger(findmaxAvenger)
  }, [searchList])
  useEffect(() => {
     const avengerWithMaxMovies = avengers.reduce((acc, curr) => {
      if (curr.stories.available > acc) {
        acc = curr.stories.available
        return acc
      }
      else {
        acc = acc + 0;
        return acc
      }
     }, 0)
    const findmaxAvenger = avengers.find((avenger) => avenger.stories.available === avengerWithMaxMovies)
    setTopAvenger(findmaxAvenger)
  }, [avengers])

  useEffect(() => {
    
   const getAllAvengers = async () => {
      const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&apikey=${API_KEY}`);
     const json = await response.json();
     setAvengers(json.data.results);

    } 
    getAllAvengers().catch(console.error);
  }, [])
  return (
    <div className="whole-page">
      <TemporaryDrawer toggle={toggle} />
      <SearchAppBar toggleNav={toggleNav} avengers={avengers} setTopAvengerFromSearch={setTopAvengerFromSearch} />
      <Grid container spacing={1} mt={2} justifyContent="center" alignItems="center">
         <Grid item xs={12}>
          <Typography variant="h3" component="h1" sx={{textAlign:"center", color: "white"}} >Top Avenger</Typography>
        </Grid>
        <Grid item xs={3} mt={2}>


                  <Avatar
      alt="Remy Sharp"
      src={topAvenger?.thumbnail.path + "." + topAvenger?.thumbnail.extension}
      sx={{ width: 300, height: 300}}
              />

        </Grid>
        <Grid item xs={6} mt={2}>
          <BasicCard topAvenger={topAvenger} />
        </Grid>
       
        <Grid item xs={12} mt={3} >
          <Grid container spacing={1} mt={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={4}>
                <SwitchListSecondary handleFilter={handleFilter} />
            </Grid>
            <Grid item xs={12} md={8}>
              <AlignItemsList avengers={avengers} searchList={searchList} />
            </Grid>
            
          </Grid>
         
        </Grid>
      </Grid>
    </div>
  )
}

export default App
