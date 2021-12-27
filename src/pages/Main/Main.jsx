import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container,
    Paper, TextField, Typography,
} from "@material-ui/core";


import SelectControl from "../../components/selectControl";
import SelectIcons from "../../components/selectIcons";
import useStyles from "./styles";
import { fetchPosts } from "../../api";

const Main = ({setShows, getClassTheme,  getIcon, postData, setPostData}) => {
    const classes = useStyles();

    const [showing, setShowing] = useState(false)
    const URL = `https://api.github.com/repos/${postData.username}/${postData.reposName}`



    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let response = await fetchPosts(URL)
            setShows(true)
        }catch (error){
            setShowing(true)
        }


    }


        return (
            <>
                {
                    showing
                        ?
                        <Typography
                            variant={'h4'}
                            style={{color: 'red', display: 'flex', justifyContent: 'center'}}
                        >
                            No repos found! Try Again
                        </Typography> :
        <Container maxWidth={"sm"} style={{marginTop: '5rem'}}>
            <Paper className={classes.paper}>
                <form autoComplete="off" onSubmit={handleSubmit} className={`${classes.root} ${classes.form}` }>
                    <Typography variant="h6">Create Imagine URL</Typography>
                    <TextField name='username' value={postData.username} onChange={(e) => setPostData({...postData, username: e.target.value})}  variant="outlined" label="Username" fullWidth />
                    <TextField name='reposName'value={postData.reposName} onChange={(e) => setPostData({...postData, reposName: e.target.value})}  variant="outlined" label="Repository name" fullWidth />
                    <SelectControl getClassTheme={getClassTheme}/>
                    <SelectIcons getIcon={getIcon} />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large"
                               type="submit" fullWidth>Submit</Button>
                </form>


            </Paper>
        </Container>
                }
            </>

    );
};

export default Main;
