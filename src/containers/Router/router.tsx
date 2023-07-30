import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from '../../views/Auth/Signup'
import Dashboard from '../../views/Dashboard'
import Login from '../../views/Auth/Login'
import PostDetails from '../../views/PostDetails'
import CreatePost from '../../views/CreatePost'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={<Signup onSignup={() => console.log('entra')} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={() => console.log('Logged')} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard onLogout={() => console.log('logout')} />}
        />

        <Route path="/posts/:postId" element={<PostDetails />} />
        <Route path="/create" element={<CreatePost />} />

        <Route path="/*" element={<Navigate replace to="/signup" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
