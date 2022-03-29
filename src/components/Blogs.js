import React from 'react'
import Blogdata from "./blogdata"
import Animation from './Animation'
const Blogs = () => {
    return (
        <Animation>
            <section class="text-gray-600 body-font">
                <h1 className="title-font sm:text-4xl text-3xl py-5 font-bold text-base-content text-center">Blogs</h1>
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {Blogdata.map((blog) => {
                            return (
                                <div onClick={() => { window.open(blog.url) }} class="xl:w-1/3 md:w-1/2 p-4 cursor-pointer">
                                    <div class="bg-primary text-primary-content p-6 rounded-lg">
                                        <img class="h-40 rounded w-full object-cover object-center mb-6" src={blog.image} alt="content" />
                                        <h3 class="tracking-widest text-primary-content text-xs font-medium title-font">{blog.date}</h3>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{blog.title}</h2>
                                        <p class="leading-relaxed text-base">{blog.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </Animation>
    )
}

export default Blogs