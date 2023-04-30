import { Component } from "react";
// import PropTypes from 'prop-types';
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { SearchBar } from "components/Searchbar/Searchbar";
import { fetchImgList } from "services/Api";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";

export class App extends Component {
  // static propTypes = {
  //   search: PropTypes.string.isRequired,
  // };

  state = {
    search: '',
    images: [],
    page: 1,
    total: 0,
    isLoading: false,
    showModal: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const fetchedImg = await fetchImgList();
      this.setState({ images: fetchedImg, isLoading: false });
    } catch (error) {
      console.log('error :>> ', error);
      this.setState({ error: true, isLoading: false });
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

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { images, error, showModal, largeImageURL, alt, total, page } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ImageGallery items={images} />
        <SearchBar onSubmit={this.handleSubmit} />
        {error && <p>Help...</p>}
        <Loader />
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
