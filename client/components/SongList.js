import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class SongList extends Component {
    
    renderSongs(){
      if(this.props.data.loading){
        return (
          <h4>Waiting to fetch data...</h4>
        )
      }
      return this.props.data.songs.map(song => {
        return (
          <li key={song.id} className="collection-item">
            {song.title}
          </li>
        )
      });
    }

    render(){      
      return (
        <div> 
          <h3>SongList</h3>
          <ul className="collection">
            {this.renderSongs()}
          </ul>
        </div>
      )
    }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);