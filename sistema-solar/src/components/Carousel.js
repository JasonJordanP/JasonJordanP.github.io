import { Carousel } from 'react-bootstrap';
import '../App.css';
import '../stylesheets/reset.css';


export function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          id="slider"
          className="d-block w-100"
          src="https://www.clarin.com/img/2020/04/24/3Hqn-OYGj_1200x630__1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slider"
          className="d-block w-100"
          src="https://fotos.perfil.com/2022/07/12/trim/950/534/imagenes-del-telescopio-espacial-james-webb-de-la-nasa-20220712-1385403.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slider"
          className="d-block w-100"
          src="https://tn.com.ar/resizer/aw4sC33vhqzMACA4dTgKRBRRDCg=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/XMDNFOKVGBAU3KKFOV4S37CA4Y.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
