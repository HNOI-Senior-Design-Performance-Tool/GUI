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
              The Diesel Engine Performance Tool is a web tool that displays both
              technical and non technical analytics for clients. These analytics display
              a variety of stats such gas saved, hydrogen level, Co2 reduction, diesel
              particulate reduction, etc.
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
