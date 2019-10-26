import React from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-top">
        <div className="footer-social">
          <SocialIcon url="https://github.com/tbbennett1/clonebase" bgColor="#0f3256" style={{ height: 100, width: 100 }}/>
          <SocialIcon url="https://www.linkedin.com/in/trentonbrockbennett/" bgColor="#0f3256" style={{ height: 100, width: 100 }}/>
        </div>
        <div><img src={window.footer} /></div>
      </div>
    )
  }
}

export default Footer;