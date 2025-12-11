import Head from 'next/head';
import React from 'react';

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>{headTitle ? headTitle : "Yogana | Yoga Fitness React Next JS Template"}</title>
                {/* Corrected favicon path */}
                <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
            </Head>
        </>
    );
};

export default PageHead;