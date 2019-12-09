import React from 'react';
import { Grid } from 'semantic-ui-react'

const Suggestion = (props) => {

    const changeVideoHandler = () => {
        props.changeVideo(props.video);
    }
    return(
        <Grid.Column onClick={changeVideoHandler} >
            <img src={props.video.snippet.thumbnails.medium.url} alt='video snippet'/>
        </Grid.Column>
    )
}
export default Suggestion;