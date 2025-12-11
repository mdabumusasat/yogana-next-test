import React from "react";
import CounterUp from '../../components/elements/CounterUp';

const FunfactSectionFour = () => {
  return (
    <section className="funfact-section-four pt-40">
      <div className="auto-container">
        <div className="fact-counter wow fadeInUp">
          <div className="row">
            <div className="counter-block-four col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="count-box"><span className="count-text"><CounterUp end={20} /></span></div>
                <div className="counter-text">Years Of <br/> Experience</div>
              </div>
            </div>
            <div className="counter-block-four col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="count-box"><span className="count-text"><CounterUp end={10} /></span></div>
                <div className="counter-text">Years Of <br/> Experience</div>
              </div>
            </div>
            <div className="counter-block-four col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="count-box"><span className="count-text"><CounterUp end={40} /></span></div>
                <div className="counter-text">Years Of <br/> Experience</div>
              </div>
            </div>
            <div className="counter-block-four col-md-3 col-sm-6">
              <div className="inner-box">
                <div className="count-box"><span className="count-text"><CounterUp end={30} /></span></div>
                <div className="counter-text">Years Of <br/> Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunfactSectionFour;
