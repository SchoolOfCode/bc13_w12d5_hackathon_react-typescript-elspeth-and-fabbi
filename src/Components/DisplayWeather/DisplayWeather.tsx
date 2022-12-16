import "./DisplayWeather.css"

interface Props {
    info: any;
}

function DisplayWeather(props: Props){

    const { info } = props;

    try {
        return (
            <div className="displayBlock">
                <img alt={info.weather[0].description} src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@4x.png`}></img>
                <div className="infoBlock">
                    <p><b>{info.main.temp}°C</b></p>
                    <p>{info.weather[0].description}</p>
                    <p>{info.main.humidity}% - humidity</p>
                </div>
            </div>
        )
    } catch (error) {
        return <div className="errorMess">Please enter a valid location</div>;
    }
}


export default DisplayWeather;