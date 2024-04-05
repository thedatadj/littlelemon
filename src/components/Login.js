import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const handleClick1 = () => {
        navigate('/littlelemon/signin')
    }
    const handleClick2 = () => {
        navigate('/littlelemon/signup')
    }
    return (
        <div className='login align'>
            <button id='b1' onClick={handleClick1}>Sign In</button>
            <button id='b2' onClick={handleClick2}>Sign Up</button>
        </div>
    )
}
export default Login