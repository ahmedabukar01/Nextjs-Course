export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    const paths = posts.map(post=>{
        return {
            params: {
                id: post.id.toString(),
            }
        }
    })

    return {
        paths,
        fallback: false
    }
    
}

export const getStaticProps = async (context)=>{
    const id = context.params.id;

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const post = await res.json();
    
    return {
        props: {
            post
        }
    }
}

const post = ({post}) => {
  return (
    <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}

export default post