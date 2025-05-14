import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="wrapper ">

                <div className="box bone"></div>
                <div className="box btwo"></div>
                <div className="box bthree"></div>
                <div className="box bfour"></div>
            </div>

            <div className="dev">

                {/* hero */}

                <div className="flex items-center justify-center gap-[150px] pt-[100px] pb-[100px]">
                    <div className="w-[480px] flex flex-col justify-center">
                        <p className="text-[46px] text-white flex items-center">Hi,I'm<span className="ml-[10px] text-[#2F86EA]">Manikanta</span><img className="w-[60px]" src="hi.svg" /></p>
                        <p className="text-[24px] text-white">Full Stack Developer</p>
                        <p className="text-[16px] text-white mt-[5px]">Enhancing digital experiences that are smooth, scalable, and made to impress.</p>
                        <div className="flex gap-[20px] mt-[15px]">
                            <button className="hero-btn">Contact <img className="invert" src="mail.svg" /> </button>
                            <button className="hero-btn">Resume <img className="invert" src="download.svg" /> </button>
                        </div>
                    </div>
                    <div className="w-[350px] h-[350px]  dp flex items-center rounded-full">
                    </div>
                </div>

                {/* projects */}

                <div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[51vw]" >
                            <span className="text-white text-[32px] font-semibold">&lt;Projects/&gt;</span><br />
                            <span className="text-white text-[16px]">Checkout my recent works . . .</span>
                        </div>
                        <div className="w-[70vw] p-[50px] flex items-center justify-evenly">
                            <div className="one w-[300px] h-[400px] rounded-[20px] bg-[rgb(255,255,255,0.05)] border-2 border-[rgb(255,255,255,0.1)] cursor-pointer"></div>
                            <div className="two w-[300px] h-[400px] rounded-[20px] bg-[rgb(255,255,255,0.05)] border-2 border-[rgb(255,255,255,0.1)] cursor-pointer"></div>
                            <div className="three w-[300px] h-[400px] rounded-[20px] bg-[rgb(255,255,255,0.05)] border-2 border-[rgb(255,255,255,0.1)] cursor-pointer"></div>
                        </div>

                    </div>
                </div>

                {/* techstack */}

                <div className="flex flex-col items-center justify-center">
                    <div className="w-[51vw]">
                        <span className="text-white text-[32px] font-semibold">&lt;Tech Stack/&gt;</span><br />
                        <span className="text-white text-[16px]">Technologies i excell in . . .</span>
                    </div>
                    <div className="w-[100vw] flex items-center justify-center">
                        <div className="w-[50vw] grid grid-cols-4 gap-[50px] p-[50px]">
                            <div className="tech">HTML</div>
                            <div className="tech">CSS</div>
                            <div className="tech">JavaScript</div>
                            <div className="tech">NPM</div>
                            <div className="tech">React</div>
                            <div className="tech">Figma</div>
                            <div className="tech">html</div>
                            <div className="tech">html</div>
                            <div className="tech">html</div>
                            <div className="tech">html</div>
                            <div className="tech">html</div>
                            <div className="tech">html</div>
                        </div>
                    </div>
                </div>

                {/* contact */}

                <div className="flex flex-col items-center justify-center">
                    <div className="w-[51vw]">
                        <span className="text-white text-[32px] font-semibold">&lt;Contact/&gt;</span><br />
                    </div>
                    <div className="m-12">
                        <div className="c-wrapper w-[400px] p-[25px] gap-[20px] rounded-[20px] flex flex-col items-center justify-center">
                            <input className="w-[350px] text-white rounded-[8px] p-[10px] text-[20px] border-2 border-blue-950" type="text" placeholder="Enter your Name" />
                            <input className="w-[350px] text-white rounded-[8px] p-[10px] text-[20px] border-2 border-blue-950" type="text" placeholder="Enter your Mobile number" />
                            <input className="w-[350px] text-white rounded-[8px] p-[10px] text-[20px] border-2 border-blue-950" type="email" placeholder="Enter your E-mail Id" />
                            <textarea className="w-[350px] text-white rounded-[8px] p-[10px] text-[20px] border-2 border-blue-950" placeholder="comments. . ."></textarea>
                            <button className="w-[350px] text-[#2F86EA] rounded-[8px] p-[10px] text-[20px] border-2 border-blue-950 bg-[#ffffff10]">Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
