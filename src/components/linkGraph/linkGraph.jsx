import React, {useState} from 'react';
import {Box, Button, Container, Typography} from "@material-ui/core";
import {TwitterIcon, TwitterShareButton} from "react-share";

import useStyles from "./style";
import Post from "../Post";
const LinkGraph = ({theme, icon, getIcon, postData}) => {
    const classes = useStyles();
    const [isShowing, setIsShowing] = useState(false)
    const shareUrl =  `https://api.github.com/repos/${postData.username}/${postData.reposName}`

    return (
        <>
        {isShowing ?   <Post postData={postData} theme={theme} icon={icon}/> :
        <Container style={{display:'flex', alignItems: 'center', flexDirection: 'column'}} maxWidth={"lg"}>
            <Box style={{display: 'flex', color: 'white', marginTop: '50px', alignItems: 'baseline'}}>
                <Typography variant={'h4'}>Click me:</Typography>
                <Button
                    className={classes.btn}
                    onClick={() => setIsShowing(true)}
                >
                   {shareUrl}
                </Button>
            </Box>
            <Box style={{display: 'flex', color: 'white', marginTop: '50px', alignItems: 'baseline'}}>
                <Typography variant={'h4'}>Share this Link on Twitter:</Typography>
                <Typography style={{marginLeft: '20px'}}>
                    <TwitterShareButton
                        url={shareUrl}>
                        <TwitterIcon

                            size={32}
                            round/>
                    </TwitterShareButton>
                </Typography>
            </Box>
        </Container>


}
        </>
    );
};

export default LinkGraph;
