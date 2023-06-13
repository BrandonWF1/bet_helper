import React from 'react';


const AboutPage = () => {
    return (
        <div className={'flex justify-center flex-col items-center'}>
            <div className={'text-6xl'}>
                <span className={'pl-1 font-extrabold fontNew-en logo_shadow text-purple-400'}>BET.</span>
                <span className={'font-extrabold fontNew-en logo_shadow leading-4 text-blue-500'}>HELPER</span>
            </div>
            <div className={'m-10 text-3xl font-bold fontNew-en'}>BY</div>
            <div><span className={'pl-1 font-extrabold fontNew-en logo_shadow text-cyan-400 text-3xl'}>SAVVA </span>
                <span className={'font-extrabold fontNew-en logo_shadow leading-4 text-cyan-400 text-3xl'}>NESTEROV</span></div>

        </div>
    );
};

export default AboutPage;