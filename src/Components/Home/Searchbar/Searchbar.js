import "./Searchbar.css"


const Searchbar = () => {

  return (
    <form className="form__conatiner" >
      <input type="text" placeholder="Where would you like to go?"/>
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
