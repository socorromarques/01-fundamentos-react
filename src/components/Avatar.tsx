import styles from './Avatar.module.css'

interface AvatarProps {
    src: string
}

export function Avatar(props: AvatarProps) {
    
    return(
        <img className={styles.avatar} src={props.src} alt='Avatar image' />   
        
    )
}