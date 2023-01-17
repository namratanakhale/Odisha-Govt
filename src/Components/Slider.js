import ImageSlider, { Slide } from "react-auto-image-slider";
import Bannew1 from '../images/Bannew1.jpeg';
import Bannew2 from '../images/Bannew2.jpeg';
import ban3 from '../images/ban3.jpg';

function Slider() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img2" src={Bannew1} />
      </Slide>
      <Slide>
        <img alt="img2" src={Bannew2} />
      </Slide>
      <Slide>
        <img alt="img1" src={ban3} />
      </Slide>
    </ImageSlider>
  );
}

export default Slider;