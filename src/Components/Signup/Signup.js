import "./Signup.css"

let Signup = () => {
    return( <>
        <form className="Container">
        <div className="ContentBorder">
        <h1  className="Title">Sign Up</h1>
            <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" required/>
        </div>
     
     <div>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" required/>
    </div>
     
     <div>
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" required/>
    </div>
    
    <div>
    <label htmlFor="dateOfBirth">Date of Birth:</label>
    <input type="date" id="dateOfBirth" required/>
    </div>
    
    <div>
    <label htmlFor="gender">Gender:</label>
      <input type="radio" id="genderMale" name="gender" value="male" required/>
      <label htmlFor="genderMale">Male</label>
      <input type="radio" id="genderFemale" name="gender" value="female" required/>
      <label htmlFor="genderFemale">Female</label>
    </div>

    
    <div>
    <label htmlFor="role">Role:</label>
    <select id="role" name="role" required>
      <option value="admin">Admin</option>
      <option value="vendor">Vendor</option>
      <option value="user">User</option>
    </select>
    </div>

    <div>
    <label htmlFor="contactNumber">Contact Number:</label>
    <input type="tel" id="contactNumber" pattern="[0-9]*" required/>
    </div>
     
     <div className="button_container">
    <button className="button"> Submit</button>
    </div>

    </div>
</form>
    </>
    )
}

export default Signup