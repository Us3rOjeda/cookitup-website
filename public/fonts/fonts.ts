import { Libre_Baskerville } from 'next/font/google';
import { Cormorant_Garamond} from 'next/font/google';

export const fontBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
});

export const CormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic']
});