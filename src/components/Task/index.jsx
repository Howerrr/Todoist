import { FaTimes } from 'react-icons/fa'
import './index.css'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${JSON.parse(localStorage.getItem('#' + task.id)).important ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task)}>
            <div>
                <h3>{task.text}</h3>
                <p style={{ marginTop: '4px', fontSize: '14px' }}>{task.day}</p>
            </div>
            <FaTimes
                className='faTimes'
                onClick={() => onDelete(task)} />
        </div>
    )
}

export default Task
