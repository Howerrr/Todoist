import { useState } from 'react'
import './index.css'

const AddTask = ({ addTask }) => {
    const [text, setText] = useState('')
    let [note, setNote] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please input a title')
            return
        }
        let day = note.split(' ')
        if (day.length === 4) {
            note = day[0] + '-' + day[1] + ' ' + day[2] + ':' + day[3]
        }
        addTask({ text, note })
        setText('')
        setNote('')
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
                    value={note}
                    onChange={(e) => setNote(e.target.value)} />
            </div>
            <div className='save'>
                <input type="submit" value='Save Task' className='btn btn-save' />
            </div>
        </form>
    )
}

export default AddTask
