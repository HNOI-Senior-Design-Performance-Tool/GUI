import Truck from "../assets/Flatbed_Truck.jpg";

const About = () => {
    return (
        <>
          <div
            className="container-fluid"
            style={{ color: "white", backgroundColor: "#252526" }}
          >
            <h1 style={{ textAlign: "center" }}>About</h1>
            <h3 style={{ textAlign: "center" }}>
              HNOI Senior Design Project: Diesel Engine Performance Tool
            </h3>
            <p style={{ textAlign: "center" }}>
              The Diesel Engine Performance Tool is a software application designed to provide accurate and detailed analysis of the performance of diesel engines. The tool allows users to monitor and measure various engine parameters such as fuel consumption, emissions, temperature, pressure, and other key performance indicators. By collecting and analyzing real-time data, the tool helps users identify potential issues or areas for improvement in the engine's operation, leading to increased efficiency, reduced emissions, and improved overall performance. The tool can be used by engine manufacturers, automotive engineers, mechanics, and other professionals who are involved in the design, testing, and maintenance of diesel engines. Its user-friendly interface and comprehensive data analysis capabilities make it an essential tool for anyone looking to optimize diesel engine performance.
            </p>
            <p className="card" style={{ textAlign: "center", backgroundColor: "#252526" }}>
                <img style={{ }} src={Truck}/>
            </p>
                     <div className="container-fluid" style={{ textAlign: "center", backgroundColor: "#252526" }}>
                       <h1>Contributors</h1>
                       <p>Ivan Pang</p>
                       <p>Cameron Settles</p>
                       <p>Lewis Gibney</p>
                       <p>Majid Maroki</p>
                       <p>Alvin Rofael</p>
                       <p>Greg Heller</p>
                       <p>Saeed Manshadi</p>
                     </div>
          </div >
        </>
    )
}

export default About
