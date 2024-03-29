const Signup = () => {
    return (
        <div className='signup align'>
            <h1>Sign Up</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input name='name' type='text'/>
                <label htmlFor='lastname'>Last Name</label>
                <input name='lastname' type='text'/>
                <label htmlFor="email">Email</label>
                <input name='email' type='email' />
                <label htmlFor='password'>Password</label>
                <input name='password' type="password"/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
export default Signup