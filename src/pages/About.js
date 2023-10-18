import React from 'react';
import Majid from "../assets/majid.png"
import Ivan from "../assets/ivan.png"
import Cameron from "../assets/cameron.png"
import Alvin from "../assets/alvin.png"

const About = () => {
    return (
        <div>
            <div className="about-section">
                <h1 style={{ textAlign: 'center' }}>About Us Page</h1>
                <p style={{ textAlign: 'center' }}>The Diesel Engine Performance Tool is a software application designed to provide accurate and detailed analysis of the performance of diesel engines. The tool allows users to monitor and measure various engine parameters such as fuel consumption, emissions, temperature, pressure, and other key performance indicators. By collecting and analyzing real-time data, the tool helps users identify potential issues or areas for improvement in the engine's operation, leading to increased efficiency, reduced emissions, and improved overall performance. The tool can be used by engine manufacturers, automotive engineers, mechanics, and other professionals who are involved in the design, testing, and maintenance of diesel engines. Its user-friendly interface and comprehensive data analysis capabilities make it an essential tool for anyone looking to optimize diesel engine performance.</p>
            </div>

            <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        
            <div className="row">
                <div className="column">
                    <div className="card">
                    <img style={{ width: '20%', display: 'block', margin: '0 auto' }} src={Majid} alt="Majid" />
                        <div className="container">
                        <h2 style={{ textAlign: 'center' }}>Majid Maroki</h2>
                            <p style={{ textAlign: 'center' }} className="title">Team Leader</p>
                            <p style={{ textAlign: 'center' }} >Some text that describes me.</p>
                            <p style={{ textAlign: 'center' }} >mmaroki4781@sdsu.edu</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <img style={{ width: '20%', display: 'block', margin: '0 auto' }} src={Ivan} alt="Ivan" />
                        <div className="container">
                            <h2 style={{ textAlign: 'center' }}>Ivan Pang</h2>
                            <p style={{ textAlign: 'center' }} className="title">GUI Lead</p>
                            <p style={{ textAlign: 'center' }}>Some text that describes me.</p>
                            <p style={{ textAlign: 'center' }}>ipang6273@sdsu.edu</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <img style={{ width: '20%', display: 'block', margin: '0 auto' }} src={Cameron} alt="Cameron" />
                        <div className="container">
                            <h2 style={{ textAlign: 'center' }}>Cameron Settles</h2>
                            <p style={{ textAlign: 'center' }} className="title">API Lead</p>
                            <p style={{ textAlign: 'center' }}>Some text that describes me.</p>
                            <p style={{ textAlign: 'center' }}>csettles7588@sdsu.edu</p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <img style={{ width: '20%', display: 'block', margin: '0 auto' }} src={Alvin} alt="Alvin" />
                        <div className="container">
                            <h2 style={{ textAlign: 'center' }}>Alvin Rofael</h2>
                            <p style={{ textAlign: 'center' }} className="title">Project coordinator</p>
                            <p style={{ textAlign: 'center' }}>Some text that describes me.</p>
                            <p style={{ textAlign: 'center' }}>arofael9581@sdsu.edu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;