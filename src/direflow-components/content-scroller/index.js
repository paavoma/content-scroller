import { DireflowComponent } from 'direflow-component';
import App from './App';
import image1 from '../../assets/cat.jpg'
import image2 from '../../assets/dog.jpg'

const direflowProps = {
  texts: [image1, image2],
}

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'content-scroller',
    
  },
  properties: direflowProps,
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
