interface Props {
    info: any;
}

function DisplayWeather(props: Props){

    const { info } = props;

    try {
        return (
            <div>
                <img alt={info.weather[0].description} src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@4x.png`}></img>
                <p>{info.main.temp}°C</p>
                <p>{info.weather[0].description}</p>
                <p>{info.main.humidity} - humidity</p>
            </div>
        )
    } catch (error) {
        return <div>Please enter a valid location</div>;
    }
}


export default DisplayWeather;