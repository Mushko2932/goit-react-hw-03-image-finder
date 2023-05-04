import { Component } from "react";
// import Notiflix from 'notiflix';
import { GlobalStyle } from "components/GlobalStyle";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { SearchBar } from "components/Searchbar/Searchbar";
import { fetchImgList } from "services/Api";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { Modal } from "components/Modal/Modal";
import { Container } from "./App.styled";

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

  // async componentDidMount(searchQuery) {
  //   try {
  //     this.setState({ isLoading: true });
  //     const fetchedImg = await fetchImgList(searchQuery);
  //     this.setState({
  //       images: fetchedImg,
  //       total: fetchedImg.total,
  //       isLoading: false,
  //     });
  //     console.log('images :>> ', this.state.images);
  //   } catch (error) {
  //     console.log('error :>> ', error);
  //     this.setState({ error: true, isLoading: false });
  //   }
  // }

  async componentDidUpdate(prevProps, prevState) {
    const { images, search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const fetchImages = await fetchImgList(search, page);
        this.setState(state => ({
          images: [...images, ...fetchImages.hits],
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  // if (this.state.search.trim() === '') {
  //     Notiflix.Notify.success('Search field is empty');
  //     return;
  // }

  handleSubmit = value => {
    try {
      if (value === this.state.search) {
        return;
      }
      this.setState({ search: value, images: [] });
    } catch (error) { 
      console.log('error :>> ', error);
    }
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
      <Container>
        <SearchBar onSubmit={this.handleSubmit} />
        {search && <h2>Please try again</h2>}
        {images.length > 0 && (
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
        <GlobalStyle />
      </Container>
    );
  }
};
