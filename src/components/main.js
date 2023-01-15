export default function Main(props) {
    return (
        <div>
            <div className="main" >
                <img src={props.item.imageUrl} alt="img" className="main-img" />
                <div className="main2">
                    <section className="main3">
                        <img src="./images/marker.png" alt="marker" className="main-marker" />
                        <p className="main-location">{props.item.location}</p>
                        <a href={props.item.googleMapsUrl} className="main-googleMap">View on Google Maps</a>
                    </section>
                    <h1 className="main-title">{props.item.title}</h1>
                    <h3 className="main-date">{props.item.startDate} - {props.item.endDate}</h3>
                    <p className="main-description">{props.item.description}</p>
                </div>
            </div>
            <hr />
        </div>

    )
}
