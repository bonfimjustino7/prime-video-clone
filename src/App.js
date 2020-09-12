import React, { useState } from 'react';
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import Gallery from './components/Gallery';

export default function App() {

    const [prot, setProtect] = useState(false);

    const handleProtectOff = () => {
        if(prot){
            setProtect(false);
        }
    }

    const imgs = [
        'https://m.media-amazon.com/images/G/01/digital/video/sonata/superhero_gl2_vampirediaries_magellan/667b6347-e598-428f-8f08-3a069c53b54d._UR3000,600_SX1500_FMwebp_.jpg',
        'https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_SH_TheWalkingDead_S1_S8/97f7d695-16fa-449d-aebf-913b77091af0._UR3000,600_SX1500_FMwebp_.jpg',
        'https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_47MetersDownUncaged/c5fd7321-663e-459d-a501-1cb5dd63f171._UR3000,600_SX1500_FMwebp_.jpg',
        'https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_Little_Fires_Everywhere_S1/07262f42-cdbd-4606-a885-476cb624c2ec._UR3000,600_SX1500_FMwebp_.jpg',
    ]

    const galeriais = [1,2,3,4,5,6,7,8,9,10]

    return (
        <>
            <Header handleProtected={setProtect} dropdow={prot} />
            <div className={prot ? 'protected content': 'content' } onClick={handleProtectOff}>
                <div className={prot ? 'pelicula': ''}>
                    <SlideShow imgs={imgs} />
                    {/* <Gallery galleries={galeriais}/> */}
                    {/* <Gallery galleries={galeriais}/> */}
                    {/* <Gallery galleries={20}/> */}
                </div>
            </div>
        </>
    )

}