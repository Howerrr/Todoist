import PropTypes from 'prop-types'
import Button from '../Button'
import './index.css'

const Header = ({ title, onClick, cardName }) => {
    return (
        <header className='header'>
            <h1 className='title'>{title}</h1>
            <Button
                text={cardName}
                onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Todoist'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
