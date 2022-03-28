import React from 'react'

const Hero = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://i.imgur.com/ItaLBc7.gif" />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-base-content">Aditya Yadav 👨‍💻</h1>
                    <p className="mb-8 leading-relaxed text-base-content">A Nerd, A Programmer, A Dreamer coz.Something That Doesn&apos;t Work In Real Works In Dream So. 😉</p>
                    <div className="flex justify-center">
                        <button className="btn btn-primary mx-2">BLog</button>
                        <button className="btn btn-primary mx-2">Contact</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero