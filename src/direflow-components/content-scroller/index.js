import { DireflowComponent } from 'direflow-component';
import App from './App';
import image1 from '../../assets/default.png'



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
