import { useState } from 'react'

const availableTimes = {
    times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

const BookingForm = () => {
    const [state, setState] = useState(availableTimes)

    return (
        <form>
            <label htmlFor='res-date' id='res-date'>Choose date</label>
            <input type='date' id='res-date'/>
            <label htmlFor='res-time' id='res-time'>Choose time</label>
            <select id='res-time'>
                <option>{state.times[0]}</option>
                <option>{state.times[1]}</option>
                <option>{state.times[2]}</option>
                <option>{state.times[3]}</option>
                <option>{state.times[4]}</option>
                <option>{state.times[5]}</option>
            </select>
            <label htmlFor='guests' id='guests'>Number of guests</label>
            <input
                id='guests'
                type="number"
                placeholder='1'
                min='1'
                max='10'
            />
            <label htmlFor='occasion' id='occasion'>Occasion</label>
            <select id='occasion'>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input id='sub' type='submit' value='Make your reservation'/>
        </form>
    )
}
export default BookingForm