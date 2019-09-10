import React from 'react';

class GetStarted extends React.Component {
  render() {
    return (
      <div className="gs-top">
        <h1>Get started in a few seconds</h1>
        <h4>Clonebase lets you practice trading the most popular digital currencies.</h4>
        <div className="gs-inner">
          <div className="gs-pics">
            <img src={window.gs_person} />
            <h3>Create an account</h3>
          </div>
          <div className="gs-line">
          </div>
          <div className="gs-pics">
            <img src={window.gs_bank}/>
            <h3>Use free, fake funds</h3>
          </div>
          <div className="gs-line"> 
          </div>
          <div className="gs-pics">
            <img src={window.gs_hand}/>
            <h3>Practice buying & selling</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default GetStarted;