import { Component } from "react";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { SearchBar } from "components/Searchbar/Searchbar";
import { fetchImgList } from "services/Api";
import { Loader } from "components/Loader/Loader";

export class App extends Component {
  state = {
    images: [],
    page: 0,
    totalPages: 0,
    query: '',
    isLoading: false,
    error: false,
    showLoadMoreButton: true,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const fetchedImg = await fetchImgList();
      this.setState({ images: fetchedImg, isLoading: false });
    } catch (error) {
      console.log('error :>> ', error);
      this.setState({error: true, isLoading: false})
    }
  }

  render() {
    const { images, error } = this.state;
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
        <ImageGallery items={images} />
        <SearchBar onSubmit={console.log} />
        {error && <p>Help...</p>}
        <Loader/>
      </div>
    );
  }
};
