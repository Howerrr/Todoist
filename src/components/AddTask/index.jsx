import { useState } from 'react'
import './index.css'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('No Content')
            return
        }
        if (!day) {
            alert('No Time')
            return
        }
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label >Task</label>
                <input type="text" placeholder='Add Task'
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = 'Add Task'}
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label >Note</label>
                <input type="text" placeholder='Add Note'
                    onFocus={(e) => e.target.placeholder = ''}
                    onBlur={(e) => e.target.placeholder = 'Add Note'}
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control-check'>
                <label >Mark it important</label>
                <input type="checkbox" value={reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <div className='save'>
                <input type="submit" value='Save Task' className='btn btn-save' />
            </div>
        </form>
    )
}

export default AddTask
