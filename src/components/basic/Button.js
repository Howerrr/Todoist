import PropTypes from 'prop-types'
import './index.css'

const Button = ({ color, text, onClick }) => {

    return (
        <button onClick={onClick}
            className='btn'
            style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Button'
}

Button.prototypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default Button
