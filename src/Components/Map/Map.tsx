import "./Map.css";

interface Props {
  info: any;
}

function Map(props: Props) {

  const { info } = props;

  try {
    return <img alt="map" src={`https://maps.geoapify.com/v1/staticmap?apiKey=${process.env.REACT_APP_MAP_KEY}&style=klokantech-basic&width=1000&height=400&center=lonlat:${info.coord.lon},${info.coord.lat}&zoom=12`}></img>;
  } catch (error) {
    return <div></div>;
  }
}

export default Map;