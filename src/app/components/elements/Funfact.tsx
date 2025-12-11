import React from 'react';
import CounterUp from '../elements/CounterUp'

const Funfact = () => {

    const data = [
        {
            icon: "Consultez-5",
            count: "25",
            countsymbol: "+",
            title: "Years Of Experience"
        },
        {
            icon: "Consultez-8",
            count: "10",
            countsymbol: "k",
            title: "Satisfied Clients"
        },
        {
            icon: "hand-saw-1",
            count: "1",
            countsymbol: "k+",
            title: "Project Complete"
        },
        {
            icon: "saw-1",
            count: "2",
            countsymbol: "k+",
            title: "Awards Wining"
        },
    ];

    return (
        <>

            {data.map((item, counterblock) => (
            <div key={counterblock} className="counter-block col-lg-3 col-sm-6 wow fadeInUp">
                <div className="inner-box">
                <div className="icon-box"><i className={`icon flaticon-${item.icon}`} /></div><br />
                <div className="content-box">
                    <div className="count-box"><span className="count-text"><CounterUp end={item.count} /></span>{item.countsymbol}</div>
                    <div className="counter-title">{item.title}</div>
                </div>
                </div>
            </div>
            ))}

        </>
    );
};

export default Funfact;