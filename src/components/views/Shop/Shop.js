import Carousel from '../../common/Carousel/Carousel';
import { Wrapper } from '../../common/Wrapper/Wrapper';
import { Grid, Typography } from '@mui/material';

const Shop = () => {
  return (
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Carousel />
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Typography>
            Szukasz sposobu na aktywny wypoczynek w mieście? Skorzystaj z naszej oferty rowerów do wypożyczenia!
            Oferujemy szeroki wybór rowerów miejskich, górskich i elektrycznych, które spełnią Twoje oczekiwania i
            zapewnią komfortową jazdę. Wypożycz rower na godzinę, dzień lub tydzień i ciesz się wolnością poruszania się
            po ulicach. Nasze rowery są sprawne, bezpieczne i łatwe w obsłudze. Zapraszamy do kontaktu z nami i
            rezerwacji roweru już dziś!
          </Typography>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Shop;
