import * as React from 'react';

import { About } from '@/components/body/About';
import { Attributes } from '@/components/body/Attributes';
import { Quotation } from '@/components/body/Quotation';
import { Services } from '@/components/body/Services';
import Seo from '@/components/Seo';

import { Direction } from '../components/body/Direction';
import { CarouselComponent } from '../components/carousel/CarouselComponent';
import { Header } from '../components/header/Header';
import { Navbar } from '../components/header/Navbar';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <React.Fragment>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <Header />
      <Navbar />
      <CarouselComponent />
      <About />
      <Services />
      <Attributes />
      <Direction />
      <Quotation />
    </React.Fragment>
  );
}
