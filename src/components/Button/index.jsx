import PropTypes from 'prop-types'
import './index.css'

const Button = ({ text, onClick }) => {

    return (
        <button onClick={onClick} className='btn'>
            {text}
        </button>
    )
}

Button.prototypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default Button
