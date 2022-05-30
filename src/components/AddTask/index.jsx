import { useState } from 'react'
import './index.css'

const AddTask = ({ addTask }) => {
    const [text, setText] = useState('')
    let [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please input a title')
            return
        }
        let days = day.split(' ')
        if (days.length !== 4) {
            alert('You can input the time with format of "month day hour minute"\nEg. "5 29 22 31"\nIt will be save as "5-29 22:31"')
        }
        else {
            day = days[0] + '-' + days[1] + ' ' + days[2] + ':' + days[3]
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
