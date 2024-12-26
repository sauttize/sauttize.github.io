import '../styles/Contents.css'
import '../styles/Illustrations.css'

import WhiteLine from '../WhiteLine';
import ImageCard from '../ImageCard';

import Landscape from "/illustrations/landscape.webp";
import ManBack from '/illustrations/ig_1.webp';
import ComicStyle from '/illustrations/comicStyle.webp';
import HarleyIvy from '/illustrations/HarleyandIvy.webp';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ReactNode } from 'react';
import React from 'react';

class Illustrations extends React.Component {
    render(): ReactNode {
        return (
            <>
                <div className="ordered-content">
                    {/* translate-x-32 */}
                    <h1>Illustrations</h1>
                    <h2>i draw from time to time, here are some of my favorite pieces</h2>
                    <WhiteLine/>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                        <Masonry gutter='10px'>
                            <ImageCard image={Landscape}/>
                            <ImageCard image={HarleyIvy} />
                            <ImageCard image={ComicStyle} />
                            <ImageCard image={ManBack} />
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </>
        );
    }
}

export default Illustrations;