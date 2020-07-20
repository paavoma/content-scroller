import { DireflowComponent } from 'direflow-component';
import App from './App';

const direflowProps = {
  texts: ['testiteksti1', 'testiteksti2', 'testiteksti3'],
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
