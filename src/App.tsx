import { Header} from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
 
import "./global.css"

const posts = [
  {
    id: 1, 
    author: {
      avatar_url: "https://github.com/SocorroMarques.png",
      name: "Socorro Marques",
      role: "Web Developer"
    },
    content: [

      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifóleo. O nome do projeto é Ignite Feed 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-06-21 20:00:00'),
  },

  {
    id: 2, 
    author: {
      avatar_url: "https://github.com/felipesimoes.png",
      name: "Felipe Simões",
      role: "Senior Web Developer"
    },
    content: [

      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Muito massa esse seu projeto.  🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-06-21 21:00:00'),
  }
]

export default function App() {
  return(
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar /> 
        <main>
          {posts.map((post) => {
            return (
              <Post
              author={{ avatar_url: post.author.avatar_url, name: post.author.name, role: post.author.role }}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}   
        </main>
      </div>
    </div>
  )
}

