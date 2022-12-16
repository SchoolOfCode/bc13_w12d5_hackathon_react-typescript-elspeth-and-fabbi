interface Props {
    setCity: (arg0: string) => void
}

function InputCity(props: Props){
    const {setCity} = props
    return <input placeholder="Input" onChange={(e) => {setCity (e.target.value)}}></input>
}


export default InputCity;