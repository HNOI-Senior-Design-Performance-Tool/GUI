import React from 'react';
import Majid from "../assets/majid.png";
import Ivan from "../assets/ivan.png";
import Cameron from "../assets/cameron.png";
import Alvin from "../assets/alvin.png";

const About = () => {
    const pageStyle = {
        border: '2px solid #333', // Add a frame around the page
        padding: '20px',
        borderRadius: '10px',
    };

    const containerStyle = {
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
    };

    const headingStyle = {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const descriptionStyle = {
        fontSize: '16px',
        marginBottom: '20px',
    };

    const teamHeadingStyle = {
        fontSize: '28px',
        margin: '30px 0',
        fontWeight: 'bold',
        textAlign: 'center', // Center the heading
    };

    const teamCardStyle = {
        display: 'inline-block',
        width: '25%',
        padding: '20px',
        boxSizing: 'border-box',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s',
        cursor: 'pointer',
    };

    const teamImageStyle = {
        width: '100%',
        borderRadius: '50%',
    };

    const teamTitleStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
    };

    const teamEmailStyle = {
        fontSize: '14px',
    };

    const handleCardHover = (event) => {
        event.target.style.transform = 'scale(1.05)';
    };

    const handleCardLeave = (event) => {
        event.target.style.transform = 'scale(1)';
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <h1 style={headingStyle}>About Us Page</h1>
                <p style={descriptionStyle}>
                    The Diesel Engine Performance Tool is a software application designed to provide accurate and detailed analysis of the performance of diesel engines. The tool allows users to monitor and measure various engine parameters such as fuel consumption, emissions, temperature, pressure, and other key performance indicators. By collecting and analyzing real-time data, the tool helps users identify potential issues or areas for improvement in the engine's operation, leading to increased efficiency, reduced emissions, and improved overall performance. The tool can be used by engine manufacturers, automotive engineers, mechanics, and other professionals who are involved in the design, testing, and maintenance of diesel engines. Its user-friendly interface and comprehensive data analysis capabilities make it an essential tool for anyone looking to optimize diesel engine performance.
                </p>
            </div>

            <h2 style={teamHeadingStyle}>Our Team</h2>

            <div style={containerStyle}>
                <div
                    style={teamCardStyle}
                    onMouseEnter={handleCardHover}
                    onMouseLeave={handleCardLeave}
                >
                    <img style={teamImageStyle} src={Majid} alt="Majid" />
                    <h2>Majid Maroki</h2>
                    <p style={teamTitleStyle}>Team Leader</p>
                    <p style={teamEmailStyle}>mmaroki4781@sdsu.edu</p>
                </div>

                <div
                    style={teamCardStyle}
                    onMouseEnter={handleCardHover}
                    onMouseLeave={handleCardLeave}
                >
                    <img style={teamImageStyle} src={Ivan} alt="Ivan" />
                    <h2>Ivan</h2>
                    <h2>Pang</h2>
                    <p style={teamTitleStyle}>API Lead</p>
                    <p style={teamEmailStyle}>ipang6273@sdsu.edu</p>
                </div>

                <div
                    style={teamCardStyle}
                    onMouseEnter={handleCardHover}
                    onMouseLeave={handleCardLeave}
                >
                    <img style={teamImageStyle} src={Cameron} alt="Cameron" />
                    <h2>Cameron Settles</h2>
                    <p style={teamTitleStyle}>GUI Lead</p>
                    <p style={teamEmailStyle}>csettles7588@sdsu.edu</p>
                </div>

                <div
                    style={teamCardStyle}
                    onMouseEnter={handleCardHover}
                    onMouseLeave={handleCardLeave}
                >
                    <img style={teamImageStyle} src={Alvin} alt="Alvin" />
                    <h2>Alvin Rofael</h2>
                    <p style={teamTitleStyle}>Project coordinator</p>
                    <p style={teamEmailStyle}>arofael9581@sdsu.edu</p>
                </div>
            </div>
        </div>
    );
};

export default About;