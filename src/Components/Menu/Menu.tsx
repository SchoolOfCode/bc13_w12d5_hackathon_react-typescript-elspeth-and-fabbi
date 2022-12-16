interface Props {
   setCountry: (arg0: string) => void
}

function Menu(props: Props){

   const { setCountry } = props;

   return (
   <div>
      <select onChange={(e) => {setCountry(e.target.value)}}>
         <option value="uk">United Kingdom</option>
         <option value="us">United States</option>
         <option value="fr">France</option>
         <option value="ru">Russia</option>
      </select>
   </div>
   )
}

export default Menu;