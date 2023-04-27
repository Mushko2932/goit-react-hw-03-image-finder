import { Component } from "react";
import { ImageGallery } from "components/ImageGallery/ImageGallery";

export class App extends Component {
  // state = {
  //   page,
  // }

  componentDidMount = () => {
    
  }
  
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ImageGallery />
      </div>
    );
    
  };
};
