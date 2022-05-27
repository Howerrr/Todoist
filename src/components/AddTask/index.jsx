import { useState } from 'react'
import './index.css'

const AddTask = ({ addTask }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please input task.')
            return
        }
        if (!day) {
            alert('Please input time.')
            return
        }
        addTask({ text, day })
        setText('')
        setDay('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label >Task</label>
                <input type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label >Time</label>
                <input type="text"
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='save'>
                <input type="submit" value='Save Task' className='btn btn-save' />
            </div>
        </form>
    )
}

export default AddTask
