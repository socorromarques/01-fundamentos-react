import { Header} from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'
 
import "./global.css"
import { Sidebar } from './components/SideBar'

export function App() {
  return(
    <div>
      <Header />
        <div className={styles.wrapper}>
          <Sidebar /> 
          <main>
            <Post 
            author="Socorro Marques"
            content="Olha eu aqui de novo criando um novo projeto react!"
            />
            <Post 
            author="Felipe Simoes"
            content= "Que fishe!"
            />  
          </main>
        </div>
    </div>
  )
}

