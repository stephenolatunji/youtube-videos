import React, { Component } from 'react';
import { Form, Button, Container, Embed } from 'semantic-ui-react';


class Videos extends Component {

    constructor(){
        super()
        this.state = {
            query: '',
            url: '',
            mainVideo: '',
            suggestedVideos: []
        }
        this.fetchVideos = this.fetchVideos.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.searchVideos = this.searchVideos.bind(this);
    }

    componentDidMount(){

        this.fetchVideos(this.state.query)
    }

    fetchVideos(searchquery){
        let url = this.state.url + searchquery;
        return(
            fetch(url).then(response => response.json())
                .then((data) => {
                    console.log(data)
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

    render(){
        return(
            <div>
                <div className='ui segment'>
                    <div className='ui orange inverted menu'>
                </div>
                </div>
                <Container textAlign='center'>
                    <Form onSubmit={this.searchVideos} >
                        <Form.Field inline>
                            <input placeholder='Enter Search' onChange={this.changeHandler} />
                            <Button content='Search' />
                        </Form.Field>
                    </Form>
                    <Embed
                        autoplay={false}
                        brandedUI
                        color='orange'
                        hd={false}
                        id='D0WnZyxp_Wo'
                        placeholder='/images/image-16by9.png'
                        source='youtube'
                    />
                </Container>
            </div>
            
        )
    }
}

export default Videos;