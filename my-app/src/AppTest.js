import { Route, Routes ,Link} from 'react-router-dom'
import Home from "./composnent/pages/Home"
import Contacts from "./composnent/pages/Contacts"
import ProductUI from "./composnent/pages/ProductUI"
function AppTest() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/ui">UI</Link></li>

                </ul>
            </nav>


            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contacts/>} />
                <Route path='/ui' element={<ProductUI />} />
            </Routes>
        </div>
    )
}

export default AppTest