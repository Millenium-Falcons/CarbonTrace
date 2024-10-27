export default function Heading({label,color}){
    return(
    <div className={`font-bold text-3xl  ${color}`}>
        {label}
    </div>
    )
}