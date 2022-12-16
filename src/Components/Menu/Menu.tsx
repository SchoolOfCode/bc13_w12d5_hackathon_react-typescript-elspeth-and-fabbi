import codes from "./codes";

interface Props {
   setCountry: (arg0: string) => void
}

function Menu(props: Props){

   const { setCountry } = props;

   return (
      <select onChange={(e) => {setCountry(e.target.value)}}>
         {codes.map((country, index) => {
            return <option key={index} value={country.code}>{country.name}</option>
         })}
      </select>
   )
}

export default Menu;