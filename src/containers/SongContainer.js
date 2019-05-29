import React from 'react';
import Song from '../components/Song';

class SongContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    songs: [],
    };
  };

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
      .then(res => res.json())
        .then(songs => {
          this.setState({songs: songs.feed.entry})

        });
  };

  gettingSongByIndex(index){
    const getSong = this.state.songs[index];
    this.setState({getSong});
  }

  render(){
    return(
      <>
        <h1>Top 20 : </h1>
        <Song songs ={this.state.songs}/>
      </>
    );
  };


}

export default SongContainer;
