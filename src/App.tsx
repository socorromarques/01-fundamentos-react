import { Header} from './components/Header'
import { Post } from './Post'
 
import "./global.css"

export function App() {
  return(
    <div>
      <Header />
      <Post 
        author="Socorro Marques"
        content="Olha eu aqui de novo criando um novo projeto react!"
      />
      <Post 
        author="Felipe Simoes"
        conent= "Que fishe!"
      />  
    </div>
  )
}

export default App
