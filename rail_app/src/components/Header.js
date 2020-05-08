import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

const MenuItem = ({ text, selected }) => {
    return (
      <div>
        <div className="menu-item">{text}</div>
      </div>
    );
  };
  
  // All items component
  // Important! add unique key
  export const Menu = list =>
    list.map(el => {
      const { name } = el;
      const { id } = el;
  
      return <MenuItem text={name} key={id} />;
    });
  
class Header extends Component{
    state = {
        selected: "0",
        MenuItems: []
      };
    
componentDidMount() {
        fetch("mainmenu.json")
          .then(res => res.json())
          .then(result => {
              console.log("This is navigation json result", result)
            const items = result.Menu.map((el, idx) => {
              return { name: el.value, id: idx };
            });
            this.setState({
              isLoaded: true,
              MenuItems: items
            });
          });
      }
    render(){
        const { selected, MenuItems } = this.state;
        // Create menu from items
        const menu = Menu(MenuItems, selected);
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    
                <Link to="/" className="navbar-brand" href="#"><h3>CollinsAerospace</h3></Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                <div data={menu}
          selected={selected}
          onSelect={this.onSelect}
          />
                    <ul className="navbar-nav">
                        
                        {/* <li className="nav-item active">
                            <NavLink to="/" className="nav-link" href="#">Add new </NavLink>
                        </li>
 
                        <li className="nav-item">
                            <NavLink to="/viewlist" className="nav-link" href="#">View list</NavLink>
                        </li> */}
                    </ul>
                </div>

            </nav> 
        );
    }
}

export default Header;