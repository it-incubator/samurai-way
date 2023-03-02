import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt="Logo" width={'50px'} />
      </header>

      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list-item'><a href="#">Profile</a></li>
          <li className='nav__list-item'><a href="#">Messages</a></li>
          <li className='nav__list-item'><a href="#">News</a></li>
          <li className='nav__list-item'><a href="#">Music</a></li>
          <li className='nav__list-item'><a href="#">Setting</a></li>
        </ul>
      </nav>

      <div className='content'>
        <div className='content__headImage'>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="river" />
        </div>
        <div className='content__profile'>
          <div className="content__profile-avatar">
            <img src="https://assets.website-files.com/58e46336bbd02c1a2dd27afc/599f95de9e639a0001ca9d51_panda-waving.png" alt="avatar" />
          </div>
          <div className="content__profile-info">
            
          </div>
        </div>
        <div className="content__newPost">
          
        </div>
        <div className="content__posts">
          <div className="content__posts-item">Post 1</div>
          <div className="content__posts-item">Post 2</div>
        </div>
      </div>
    </div>
  )
}

export default App;
