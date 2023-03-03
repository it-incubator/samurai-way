import style from './header.module.css'

export const Header = () => {
    return (
      <header className={style.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
          alt="Logo"
          width={"50px"}
        />
      </header>
    )
}