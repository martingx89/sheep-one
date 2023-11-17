import { Typography } from '@mui/material';
import { Wrapper } from '../../common/Wrapper/Wrapper';

const Intro = () => {
  return (
    <Wrapper component={'section'}>
      <Typography variant='h1'>Witajcie maniacy</Typography>
      <Typography>
        Jesteś na stronie wynajmującej rowery w Bieszczadach. Oferujemy szeroki wybór rowerów górskich, trekkingowych i
        elektrycznych, które pozwolą Ci odkrywać piękno tego regionu. Możesz wybrać jedną z naszych propozycji tras
        rowerowych lub zaplanować własną przygodę. Nasze trasy rowerowe są dostosowane do różnych poziomów zaawansowania
        i preferencji. Możesz podziwiać malownicze krajobrazy, zabytki kulturowe i dziką przyrodę Bieszczad. Zapewniamy
        transport rowerów, serwis, ubezpieczenie i pomoc w razie potrzeby. Zapraszamy do skorzystania z naszej oferty i
        spędzenia niezapomnianych chwil na dwóch kółkach.
      </Typography>
    </Wrapper>
  );
};

export default Intro;
