import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div name='search' className='search'>
        <div className="containers">
            <div className="left">
                <h1>Vacations for two  people</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Repudiandae in corrupti aliquid tempore! Voluptatum, consequuntur
                 earum! Quisquam cumque, voluptate, aliquam quas quam error assumenda
                 facilis minima harum officiis eos qui aperiam ipsum nisi itaque odio
                 inventore aut fuga corrupti delectus ipsa! Laboriosam libero cupiditate
                 consequatur laudantium consequuntur facilis qui sapiente alias doloribus, 
                 oluptate officiis tenetur quos numquam corrupti dicta ex quis voluptatem 
                 amet eius fugiat veniam exercitationem rerum. Natus, eveniet.
                </p>
                <div className="left-ctn">
                    <h1>NO ONE INCLUDES MORE</h1>
                    <h3>ALL INCLUSIVE COMPANY FOR 20 YEARS IN A ROW </h3>
                    <p>VIEW ACCESS</p>
                </div>
            </div>
            <div className="right">
                <div className="right-top">
                    <h2>GET AN ADDITIONAL 7% OFF</h2>
                    <h4>12 HOURS LEFT</h4>
                    <p>VIEW ALL CURRENT OFFERS</p>
                </div>
                <div className='form'>
                    <div className="input-wrap">
                            <label>Destinations</label>
                        <select >
                            <option value="1">Tapolca</option>
                            <option value="1">Centrum</option>
                            <option value="1">Lila Fured</option>
                            <option value="1">selyemret Strand</option>
                            <option value="1">Tundi kert</option>
                            <option value="1">Tropicana</option>
                        </select>
                    </div>
                    <div className="date">
                        <div className="input-wrap">
                            <label >Check-in</label>
                            <input type="date" />
                        </div>
                        <div className="input-wrap">
                            <label >Check-out</label>
                            <input type="date" />
                        </div>

                    </div>
                    <p className='p'>Rates and Availabilities</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search