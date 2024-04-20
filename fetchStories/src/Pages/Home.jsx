import React from 'react'
import { useState, useEffect } from 'react';
import Card from '../component/Card';


const menuItems = [
    {
      name: 'Home',
      href: '#',
    },
    {
      name: 'DailyQuiz',
      href: '#',
    },
    {
      name: 'Leaderboard',
      href: '#',
    },
  ]

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://child.onrender.com/api/sciencefiction')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <>


     <div className="hidden grow items-start lg:flex justify-between">
  <div>
    {/* Replace 'YourCompany' with your actual company name */}
    <h1 className="text-white text-lg font-bold">BrainlyLingo</h1>
  </div>
  <ul className="inline-flex space-x-8">
    {menuItems.map((item) => (
      <li key={item.name}>
        <a
          href={item.href}
          className="inline-flex items-center text-sm font-semibold text-white hover:text-gray-100"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
  <button className="text-white text-sm font-semibold hover:text-gray-100 rounded-full px-4 py-2" style={{background: 'linear-gradient(to right, #4facfe, #00f2fe)'}}>Sign Out</button>
</div>
<div className="flex justify-center mt-4">
    <button className="text-white bg-blue-500 hover:bg-blue-800 text-sm font-semibold hover:text-gray-100 rounded-full px-4 py-2 mx-2" >New</button>
    <button className="text-white bg-yellow-500 hover:bg-yellow-800 text-sm font-semibold hover:text-gray-100 rounded-full px-4 py-2 mx-2">In progress</button>
    <button className="text-white bg-green-500 hover:bg-green-800 text-sm font-semibold hover:text-gray-100 rounded-full px-4 py-2 mx-2">Completed</button>
    <button className="text-white text-sm font-semibold hover:text-gray-100 rounded-full px-4 py-2 mx-2" style={{background: 'linear-gradient(to right, #4facfe, #00f2fe)'}}>Clear all</button>
  </div>

        <div className="container mx-auto p-4">
              <h1 className="text-2xl font-semibold mb-4">Science Fiction Books</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.map((item, index) => (
                      <Card key={index} item={item} />
                  ))}
              </div>
          </div>
      </>
    )
}

export default Home