
import React from "react";
import Grid from '@mui/material/Grid';
import { color, display, flexbox, fontStyle, positions } from "@mui/system";
import { red } from "@mui/material/colors";

const Post = (props) => {
    const { picture, name, description, id } = props;
    return (
        <Grid container  spacing={2}>
            <Grid style={{display: 'flex'}} style={{textAlign : 'center'}} item xs={6} marginBottom={3} > 
                <h2 > {id}</h2>
                <img src={picture} width="300px" />
                <h2>{name}</h2>
                <p font-style ='italic'>{description}</p>
            </Grid>

            <Grid style={{display: 'flex'}} style={{textAlign : 'center'}} item xs={6} marginBottom={3} > 
                <h2 > {id}</h2>
                <img src={picture} width="300px" />
                <h2>{name}</h2>
                <p font-style ='italic'>{description}</p>
            </Grid>
            



        </Grid>
    )
}

export default Post