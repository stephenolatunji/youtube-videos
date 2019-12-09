import React, { Component } from 'react';
import { Form, Button, Container, Embed, Divider, Grid, } from 'semantic-ui-react';
import Suggestion from './Suggestion';
import './videos.css';

class Videos extends Component {

    constructor(){
        super()
        this.state = {
            query: 'Coldplay',
            url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&&key=AIzaSyDPlTALAng4CCMpuG9N8KEumaY3Ps2E1Eo&q=`,
            mainVideo: '',
            suggestedVideos: []
        }
        this.fetchVideos = this.fetchVideos.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.searchVideos = this.searchVideos.bind(this);
        this.changeVideo = this.changeVideo.bind(this);
    }

    componentDidMount(){

        this.fetchVideos(this.state.query)
    }

    fetchVideos(searchquery){
        let url = this.state.url + searchquery;
        return(
            fetch(url).then(response => response.json())
                .then((data) => {
                    let firstVideo = data.items.shift();
                    this.setState({ ...this.state, mainVideo: firstVideo.id.videoId, suggestedVideos: data.items})
                })
        )
    }
    changeHandler(e){
        this.setState({...this.state, query: e.target.value})
    }

    searchVideos(e){
        e.preventDefault();

        this.fetchVideos(this.state.query)
    }

    changeVideo(video){
        this.setState({...this.state, mainVideo: video.id.videoId})
    }

    render(){
        return(
            <div>
                <div className='ui inverted segment'>
                    <div className='ui orange inverted menu'>
                </div>
                </div>
                <h1>McKorr Video Search</h1>
                <Container textAlign='center'>
                    <h2>Search Videos Here!</h2>
                    <Form onSubmit={this.searchVideos} >
                        <Form.Field inline>
                            <input placeholder='Enter Search' onChange={this.changeHandler} />
                            <Button content='Search' />
                        </Form.Field>
                    </Form>
                    <Divider />
                    <Embed
                        autoplay={false}
                        brandedUI
                        color='violet'
                        hd={true}
                        id={this.state.mainVideo}
                        placeholder='https://www.droidword.com/wp-content/uploads/2017/09/Best-Android-Video-Players.png'
                        source='youtube'
                    />
                    <Divider>Suggested Videos</Divider>
                    <Grid stackable columns={3}>
                        {
                            this.state.suggestedVideos.map((video) => <Suggestion video={video} changeVideo={this.changeVideo} />)
                        }
                    </Grid>
                </Container>
            </div>
            
        )
    }
}

export default Videos;