import "./Login.css"


let Login = () => {
    return( <>
        <form className="Container">
        <div className="ContentBorder">
            <h1  className="Title">Login</h1>
            <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" required/>
        </div>    
     
     <div>
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" required/>
    </div>

    <div><button type="button" className="Forget_password" >Forgot Password</button></div>
        
    <div>
    <label htmlFor="role">Role:</label>
    <select id="role" name="role" required>
      <option value="admin">Admin</option>
      <option value="vendor">Vendor</option>
      <option value="user">User</option>
    </select>
    </div>

     <div className="button_container">
    <button className="button"> Submit</button>
    </div>
    </div>
</form>
    </>
    )
}

export default Login