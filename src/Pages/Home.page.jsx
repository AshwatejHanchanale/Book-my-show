import React, { useState } from 'react';

//Components
import EntertenmentCardSlider from "../Components/Entertenment/EntertenmentCard.Component";
import HeroCarousal from '../Components/HeroCarousal/HeroCarousal.Component';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';

//Layout Hoc
import DefaultLayoutHoc from '../Layout/Default.layout';

const Homepage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    return (

        <>
            <HeroCarousal />

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
                    The best of Entertenment
                </h1>
                <EntertenmentCardSlider />
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider
                    title="Recommended Movies"
                    subject="List of recommended movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>

            <div className='bg-premier-800 py-12'>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt='Rupay'
                            className='w-full h-full' />
                    </div>
                    <PosterSlider
                        title="REcommended Movies"
                        subject="Brand new releases every friday"
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider
                    title="Online Streaming Event"
                    subject=""
                    posters={onlineStreamEvents}
                    isDark={false}
                />
            </div>
        </>
    );
};

export default DefaultLayoutHoc(Homepage);