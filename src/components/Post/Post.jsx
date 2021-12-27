import React, {useEffect, useState} from 'react';
import useStyles from './style';
import {Box, Button, Card, CardContent, CardMedia, Container, ListItem, Typography} from "@material-ui/core";
import {fetchPosts} from "../../api";
import {Star} from 'react-github-buttons';
import './style.css'
import StarIcon from "./starIcon";
import Icon from "../selectIcons/icons/icon";

const Post = ({theme, icon, postData}) => {

    const URL = `https://api.github.com/repos/${postData.username}/${postData.reposName}`
    const classes = useStyles();
    const [name, setName] = useState(null)
    const [owner, setOwner] = useState(null)
    const [login, setLogin] = useState(null)
    const [contributors, setContributors] = useState(null)
    const [descript, setDescript] = useState(null)


    useEffect(async () => {

        let response = await fetchPosts(URL)
        setData(response.data)

    }, [])

    const handler = async () => {
        let response = await fetchPosts(contributors)
        const result = response.data.slice(0, 10).map(item => <ListItem className={classes.contrib} key={item.id}>{<StarIcon/>}{item.login}</ListItem> )
        contributorList(result)
    }

    const contributorList = (data) => {
        setLogin(data)
    }

    const setData = ({name, owner, contributors_url, description}) => {
        setName(name)
        setOwner(owner.login)
        setContributors(contributors_url)
        setDescript(description)

    }


    return (
        <Container style={{marginTop: '40px'}} maxWidth='sm'>
            <Card className={classes.card}>
                <Box style={{display: 'flex', justifyContent: 'space-around'}} className={theme}>
                    <Typography variant={'h4'} className={classes.author}>{owner}</Typography>
                    <Typography>{icon}</Typography>
                </Box>
                <Box style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <Typography variant={'h5'} className={classes.projectName}>{name}</Typography>
                    <Star owner={postData.username} repo={postData.reposName}/>
                </Box>
                <Box className={classes.description}>

                    <Typography
                        className={classes.projectDescript}>{descript === null ? 'No description in this repo.' : descript}</Typography>
                </Box>

                <Box  >
                    <Typography>{login}</Typography>

                </Box>


                    <Button style={{marginTop: '20px'}} variant="contained"  color="primary" size="large" onClick={handler}>Show top 10
                        contributors</Button>


            </Card>

        </Container>
    );
};

export default Post;
