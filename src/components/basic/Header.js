import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onClick, cardName }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='black' text={cardName}
                onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
