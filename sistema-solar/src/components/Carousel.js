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
          src="https://www.infobae.com/new-resizer/Cx548U38NtgdOwnz_wZKz5JsrbA=/768x432/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/D6D7ZS7MTFD2PAFC4BG5KQVIUA.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slider"
          className="d-block w-100"
          src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/10/ultima-imagen-james-webb-nasa-tiene-locos-astronomos-como-radiografia-2855335.jpg?itok=MUhVEdaT"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
