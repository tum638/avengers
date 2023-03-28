import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Switch } from '@mui/material';

export default function AlignItemsList({ avengers, searchList, searchValue }) {
  const [searchValueState, setSearchValue] = React.useState(null);
  const [searchListState, setSearchList] = React.useState([])
  React.useEffect(() => {
    setSearchList(searchList)
  },[searchList])
  return (
    <List sx={{ width: 900, height: 500, bgcolor: 'background.paper', overflow: "scroll" }}>
    
        {!searchList ? (avengers.map((avenger, idx) =>
          <ListItem key={idx} alignItems="flex-start">
            <ListItemAvatar>
          <Avatar alt={avenger.name} src={avenger.thumbnail.path + "." + avenger.thumbnail.extension} />
        </ListItemAvatar>
        <ListItemText
          primary={avenger.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Number of movies - Number of Series - Number of Comics
              </Typography>
              
              {`|------------${avenger.stories.available}-----------|-----------${avenger.series.available}------------|-----------${avenger.comics.available}--------------|`}
              <Divider variant="inset" component="li" />
              
            </React.Fragment>
            
          }
            />
            
          </ListItem>
        )
      ) : (
          (searchList.map((avenger, idx) =>
          <ListItem key={idx} alignItems="flex-start">
            <ListItemAvatar>
          <Avatar alt={avenger.name} src={avenger.thumbnail.path + "." + avenger.thumbnail.extension} />
        </ListItemAvatar>
        <ListItemText
          primary={avenger.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Number of movies - Number of Series - Number of Comics
              </Typography>
               <Divider variant="inset" component="li" />
               {`|------------${avenger.stories.available}-----------|-----------${avenger.series.available}------------|-----------${avenger.comics.available}--------------|`}
              <Divider variant="inset" component="li" />
              
            </React.Fragment>
            
          }
            />
            
          </ListItem>
        )
      )
      )}

    </List>
  )
}