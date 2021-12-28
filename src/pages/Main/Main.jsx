import React, {useState} from 'react';
import {
  Box,
  Button,
  Container,
  Paper, TextField, Typography,
} from "@material-ui/core";


import SelectControl from "../../components/selectControl";
import SelectIcons from "../../components/selectIcons";
import useStyles from "./styles";
import {fetchPosts} from "../../api";
import {Link, useNavigate} from "react-router-dom";

const Main = ({icon, theme, getClassTheme, getIcon, postData, setPostData}) => {
  const classes = useStyles();

  const [showing, setShowing] = useState(false)
  const history = useNavigate()
  const URL = `https://api.github.com/repos/${postData.username}/${postData.reposName}`


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetchPosts(URL)
      history(`/${postData.username}/${postData.reposName}`)
      localStorage.setItem('themes', theme)
      localStorage.setItem('icons', icon)
    } catch (error) {
      setShowing(true)
    }
  }

  return (
    <>
      {
        showing
          ?

            <Box style={{ display: 'flex', flexDirection: "column",  alignItems: 'center',margin: '20px'}}>
          <Typography
            variant={'h4'}
            style={{color: 'red',marginBottom: '20px'}}
          >
            No repos found! Try Again
          </Typography>
            <Button onClick={() =>setShowing(false)} variant='contained'  color='primary' >Go back</Button>
            </Box>
          :
          <Container maxWidth={"sm"} style={{marginTop: '5rem'}}>
            <Paper  className={classes.paper}>
              <form   autoComplete="on" onSubmit={handleSubmit}
                    className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">Create Imagine URL</Typography>
                <TextField required name='username' value={postData.username}
                           onChange={(e) => setPostData({...postData, username: e.target.value})}
                           variant="outlined" label="Username" fullWidth/>
                <TextField required name='reposName' value={postData.reposName}
                           onChange={(e) => setPostData({...postData, reposName: e.target.value})}
                           variant="outlined" label="Repository name" fullWidth/>
                <SelectControl getClassTheme={getClassTheme}/>
                <SelectIcons getIcon={getIcon}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary"
                        size="large"
                        type="submit" fullWidth>Submit</Button>
              </form>
            </Paper>
          </Container>
      }
    </>
  );
};

export default Main;
