import { Link, useNavigate } from 'react-router-dom'

import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import './style.scss'
import { useState } from 'react'

const NavBar = () => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return
        navigate(`/search?q=${search}`)
        setSearch("")
    }


    return (
        <div className='container-nav'>
            <Link to='/' className='h2'><BiCameraMovie />Movie Lib</Link>

            <form className='nav-items' type='submit' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Buscar filme'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type='submit'> <BiSearchAlt2 /></button>
            </form>
        </div>
    )
}

export default NavBar