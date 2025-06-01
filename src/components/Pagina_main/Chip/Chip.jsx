import './Chip.css'

const Chip = (props) => {

    const { text } = props
    
    return (
        <span className="chipSpan">{text}</span>
    )
}

export default Chip