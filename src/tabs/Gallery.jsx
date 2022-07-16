import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isVisible: false,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    if (!query) return;

    this.setState({ isLoading: true });

    try {
      const data = await ImageService.getImages(query, page);
      const limitPage =
        data.page < Math.ceil(data.total_results / data.per_page);

      this.setState(prevState => ({
        images: [...prevState.images, ...data.photos],
        isVisible: limitPage,
      }));
    } catch (error) {
      this.setState({ error: error.message });
      console.log('error: ', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleFormSubmit = value => {
    this.setState({
      query: value.trim(),
      page: 1,
      isVisible: false,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isVisible, images, error, isLoading } = this.state;
    const { handleFormSubmit, handleLoadMore } = this;

    return (
      <>
        <SearchForm onSubmit={handleFormSubmit} />
        {images.length === 0 && !error && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {error && (
          <Text textAlign="center">❌ Something went wrong - {error}</Text>
        )}
        <Grid>
          {images.map(({ id, avg_color, alt, src }) => {
            return (
              <GridItem key={id}>
                <CardItem color={avg_color}>
                  <img src={src.large} alt={alt} />
                </CardItem>
              </GridItem>
            );
          })}
        </Grid>
        {isVisible && (
          <Button onClick={handleLoadMore} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Load more'}
          </Button>
        )}
      </>
    );
  }
}
