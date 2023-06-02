import {Link} from "react-router-dom" // Link vs <a href>
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"
import {Stack} from "@mui/material"


const Navbar = () => (
    <Stack 
    direction= "row" 
    alignItems="center" 
    p={2} // padding
    sx= {{ // prop use to send style in mui blocks.
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between'
    }}>

      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt="logo-img" height={45}/>
      </Link>

      <SearchBar/>
    </Stack>
)

export default Navbar