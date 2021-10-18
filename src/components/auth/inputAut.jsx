export default function InputAut(props) {
    return (
        <div className={`
             mt-4 
            flex flex-col
        `}>
            <label >{props.label}</label>
            <input type={props.type} value={props.value} onChange={e => props.setValor(e.target.value)} className={`
                px-4 py-3 rounded-lg
                bg-grey-200
                border focus:border-blue-500
       
            `} />
        </div>
    )
}