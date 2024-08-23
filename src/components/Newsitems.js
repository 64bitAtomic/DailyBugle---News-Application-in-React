import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let { title, description, imageurl, newsurl, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card w-80 bg-dark">
          <img src={imageurl ? imageurl : "https://generated-images.weights.gg/cm022isef04wu10zc4umd158g/image_1.webp"} className="card-img-top" alt="Image Cant Be Loaded" />
          <div className="card-body text-white">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{left: '90%',
              zIndex: '1'
            }}>
            {source}
              <span className="visually-hidden">unread messages</span></span>
            <h5 className="card-title ">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-white">on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm text-white" style={{ background: '#555555' }}>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitems