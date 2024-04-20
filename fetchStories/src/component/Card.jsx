import React from 'react';

export default function Card({ item }) {

    let textColor = "";
    
    if (item.Status === "New") {
      textColor = 'blue';
    } else if (item.Status === "In Progress") {
      textColor = 'yellow';
    } else if (item.Status === "Completed") {
        textColor = 'green';
    }

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img
                    className="object-cover h-64 w-full rounded-t-lg" 
                    src={`https://ik.imagekit.io/dev24/${item.Image[0]}`} 
                    alt="product_image1" 
                />
            </a>
            <div className="px-5 pb-5">
                <a href="/" className="block">
                    <h5 className={`text-xl font-semibold tracking-tight text-gray-900 dark:text-white ${textColor === 'blue' ? 'text-blue-500' : textColor === 'yellow' ? 'text-yellow-500' : 'text-green-500'}`}>
                        {/* {item.Title}
                         */}
                         The Galactic Time Traveler
                    </h5>
                </a>
                <div className="flex items-center justify-center mt-2">
                    <a
                        href="/"
                        // className={`w-full text-white bg-white text-${textColor}-500 hover:bg-${textColor}-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                        className={`w-full text-${textColor} bg-white text-${textColor}-500 hover:bg-${textColor}-800 focus:ring-4 focus:outline-none focus:ring-${textColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                    >
                        {item.Status}
                    </a>
                </div>
            </div>
        </div>
    );
}
