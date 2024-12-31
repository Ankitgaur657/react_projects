import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/webp;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-8 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}