interface Props {
    setInfo: (arg0: any) => void;
    city: string;
    country: string
}

function SubmitButton(props: Props){

    const { setInfo, city, country } = props;

    async function findWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.API_KEY}&units=metric`)
        const data = response.json();
        setInfo(data);
    }

    return <button onClick={findWeather}>Search</button>
}

export default SubmitButton;