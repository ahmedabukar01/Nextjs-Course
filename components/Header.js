import Link from 'next/link'

const Header = () => {
  return (
    <div className='head-cont'>
        <h1>Next News</h1>
        <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header