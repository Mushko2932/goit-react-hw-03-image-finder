import { Component } from "react";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { SearchBar } from "components/Searchbar/Searchbar";
import { fetchImgList } from "services/Api";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    total: 1,
    isLoading: false,
    showModal: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const fetchedImg = await fetchImgList();
      this.setState({
        images: fetchedImg.hits,
        total: fetchedImg.total,
        isLoading: false,
      });
    } catch (error) {
      console.log('error :>> ', error);
      this.setState({ error: true, isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      // this.setState({isLoading: true, images: []})
      // fetchImgList();
      const img = await fetchImgList();
      this.setState(prevState => ({
        images: [...prevState.images, img],
      }));
      console.log('img :>> ', img);
    }
  }

  handleSubmit = search => {
    this.setState({
      search,
      images: [],
      page: 1,
      total: 1,
      isLoading: false,
      error: false,
    });
  };

  loadMore = () => {
    this.setState(prevSt => ({
      page: prevSt.page + 1,
    }));
  };

  toggleModal = (largeImageURL, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL,
      alt,
    }));
  };

  render() {
    const {
      search,
      isLoading,
      images,
      error,
      showModal,
      largeImageURL,
      alt,
      total,
      page,
    } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar onSubmit={this.handleSubmit} />
        {/* {!search && <h2>Please try again</h2>} */}
        {images && (
          <ImageGallery items={images} toggleModal={this.toggleModal} />
        )}
        {isLoading && <Loader />}
        {error && <p>Help...</p>}
        {total / 12 > page && <Button onClick={this.loadMore} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={alt} />
          </Modal>
        )}
      </div>
    );
  }
};
