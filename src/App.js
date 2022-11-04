import { useState, useEffect } from "react"
import Loading from "./components/Loading"
import Profile from "./components/Profile"
import './App.css';


// const singleUser = `https://api.github.com/users/SankThomas`
// const repos = `https://api.github.com/users/sankthomas/repos?per_page=5`
// https://api.github.com/users/sankthomas/repos?page=&per_page=10&sort=updated

function App() {
  const [items, setItems] = useState([])
  // Change this to any username whose repositories you want to get
  const [user] = useState("ernestdivine31")

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=7&sort=updated`
      )
      const data = await res.json()
      setItems(data)
      console.log(data)
    }

    fetchRepos()
  }, [user])

  return (
    <>
      <div className="header">
        <h1 className="view-repo">
          Viewing {user}'s repositories
        </h1>
      </div>

      {!items ? (
        <Loading />
      ) : (
        <div className="profile-c">
          {items.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  )
}

export default App
