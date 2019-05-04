import React from 'react';
import './Popup.css';

class Popup extends React.Component{
  render(){
    return(
      <div className="popup" style={{zIndex:"2"}}>
        <div className="popup_inner">
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Popup
