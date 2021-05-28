import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    const props = this.props
    const poster = props.poster
    const posterURL = `../assets/poster-imgs/${poster}.png`
    return (
      <div className="card-front" style={{backgroundImage: `url(${poster})`}}>
      </div>
    )
  }
}
