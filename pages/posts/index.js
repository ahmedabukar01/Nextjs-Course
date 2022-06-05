import Link from 'next/link'
import postStyles from '../../styles/Posts.module.css'

export const getStaticProps = async() =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
        props: {
            posts,
        }
    }
}

const index = ({posts}) => {

  return (
    <div className={postStyles.grid}>
        {posts.map(post=>(
            <Link href={'posts/'+ post.id} key={post.id}>
                <a className={postStyles.card}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </a>
            </Link>
        ))}
    </div>
  )
}

export default index