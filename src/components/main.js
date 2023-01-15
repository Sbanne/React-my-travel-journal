export default function Main(props) {
    return (
        <div>
            <div className="main" >
                <img src={props.image} alt="img" className="main-img" />
                <div className="main2">
                    <section className="main3">
                        <img src="./images/marker.png" alt="marker" className="main-marker" />
                        <p className="main-location">{props.location}</p>
                        <a href={props.googleMap} className="main-googleMap">View on Google Maps</a>
                    </section>
                    <h1 className="main-title">{props.title}</h1>
                    <h3 className="main-date">{props.startDate} - {props.endDate}</h3>
                    <p className="main-description">{props.description}</p>
                </div>
            </div>
            <hr />
        </div>

    )
}