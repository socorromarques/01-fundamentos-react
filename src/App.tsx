import { Header} from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
 
import "./global.css"

interface PostProps {
  author: string;
  content: string;
}

export default function App(props: PostProps) {
  const { author, content } = props
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

