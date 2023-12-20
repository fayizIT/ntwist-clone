
import '../styles/Homepage.css'; // Import the styles
import Header from './Header';

function Homepage() {
  return (
    <>
    <Header/>
    <div className="homepage-container">
      {/* Big Homepage Image */}
      <div className="big-homepage-image" style={{ backgroundImage: 'https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png' }}>
       
       
      </div>
      <br></br>

      {/* Second Section - Image on the left, content on the right */}
      <div className="section">
        <div className="background-image" style={{ backgroundImage: 'url("your-image-url-2.jpg")' }}>
          <div className="overlay">
            <h1 className="title">Sustainability</h1>
            <p className="description">
              Environmental stewardship is a priority for NTWIST. We help our customers minimize their sustainability impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers. With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.
            </p>
            <button className="button">Read More</button>
          </div>
        </div>
      </div>

      {/* Third Section - Image on the right, content on the left */}
      <div className="section">
        <div className="background-image" style={{ backgroundImage: 'url("your-image-url-3.jpg")' }}>
          <div className="overlay">
            <h1 className="title">Mineral Processing</h1>
            <p className="description">
              NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.
            </p>
            <button className="button">Read More</button>
          </div>
        </div>
      </div>

      {/* Fourth Section - Image on the left, content on the right */}
      <div className="section">
        <div className="background-image" style={{ backgroundImage: 'url("your-image-url-4.jpg")' }}>
          <div className="overlay">
            <h1 className="title">Oil & Gas</h1>
            <p className="description">
              Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.
            </p>
            <button className="button">Read More</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Homepage;
