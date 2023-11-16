import './Nav.css';

function Nav({ current, setCurrent }) {
  return (
    <div className='nav'>
      <section
        className='user'
        style={
          current === 'users'
            ? { backgroundColor: 'black', color: 'white' }
            : {}
        }
        onClick={() => setCurrent('users')}
      >
        Users
      </section>
      <section
        className='post'
        style={
          current === 'posts'
            ? { backgroundColor: 'black', color: 'white' }
            : {}
        }
        onClick={() => setCurrent('posts')}
      >
        Posts
      </section>
      <section
        className='comment'
        style={
          current === 'comments'
            ? { backgroundColor: 'black', color: 'white' }
            : {}
        }
        onClick={() => setCurrent('comments')}
      >
        Comments
      </section>
    </div>
  );
}

export default Nav;
