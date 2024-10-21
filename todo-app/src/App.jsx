import { Header } from "./Components/Header"
import { Tabs } from "./Components/Tabs"
import { TodoList } from "./Components/TodoList"


function App() {
  let x = 3
  return (
      <div>

        <Header />
        <Tabs />
        <TodoList />
        <TodoInput />
      </div>
    
  )
}

export default App
