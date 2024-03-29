const Signin = () => {
    return (
        <div className='signin align'>
            <h1>Sign In</h1>
            <form>
                <label htmlFor="email">Email</label>
                <input name='email' type='email' />
                <label htmlFor='password'>Password</label>
                <input name='password' type="password"/>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    )
}
export default Signin