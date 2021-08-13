import React from 'react'
import { Route, Switch,Link} from 'react-router'
import { Link } from 'react-router-dom'
import  TodoList  from './TodoListt'
import  CreateTodo  from './CreateTodo'
import  EditTodo  from './EditTodo'


function App() {
    return (
        <div>
            <nav className="navbar bg-light navbar-expand-lg navbar-light">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Todos</Link>
                    </li>
                    <li>
                        <link to="/create"className='nav-link'>CreateTodo</link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={TodoList} />
                <Route path="/edit/:id" component={EditList} />
                <Route path="/" component={CreateTodo} />
            </Switch>
        </div>
    )
} 
export default App;