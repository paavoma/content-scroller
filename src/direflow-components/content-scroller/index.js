import { DireflowComponent } from 'direflow-component';
import App from './App';
import image1 from '../../assets/default.png';


export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'content-scroller',
    
  },
  properties : {
    image1: image1,
    image2: "empty",
    image3: "empty",
    image4: "empty",
    image5: "empty",
    image6: "empty",
    image7: "empty",
    image8: "empty",
    image9: "empty",
    image10: "empty",
    image11: "empty",
    image12: "empty",
    imageLink1: "#!",
    imageLink2: "#!",
    imageLink3: "#!",
    imageLink4: "#!",
    imageLink5: "#!",
    imageLink6: "#!",
    imageLink7: "#!",
    imageLink8: "#!",
    imageLink9: "#!",
    imageLink10: "#!",
    imageLink11: "#!",
    imageLink12: "#!",
    visibleDivs: "1",
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP'],
        },
      },
    },
  ],
});
