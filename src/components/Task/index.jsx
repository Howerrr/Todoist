import { FaTimes } from 'react-icons/fa'
import './index.css'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}>
            <div>
                <h3>{task.text}</h3>
                <p style={{ marginTop: '4px', fontSize: '14px'}}>{task.day}</p>
            </div>
            <FaTimes
                style={{ color: 'rgba(0,0,0,0.6)', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)} />
        </div>
    )
}

export default Task
