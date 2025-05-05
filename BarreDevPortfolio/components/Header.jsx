function Header() {
    return (
        <>
        <div className="flex flex-row justify-center space-x-15 bg-gray-700 shadow-lg p-5 max-2xl:flex-col max-2xl:place-content-around hover:scale-101 duration-300 ease-in-out">
            <div className=" m-0 flex items-center content-end mr-50 max-2xl:m-0 max-2xl:flex-col max-2xl:place-content-around">
                <h1 className="mr-10 max-2xl:m-0 uppercase place-items-center text-4xl text-cyan-600 hover:text-cyan-400 hover:bg-slate-800 p-2 rounded-md hover:shadow-md opacity-50 hover:opacity-75 font-serif">
                    <a href="index.html">barredev</a>
                    </h1>
                <p className="mr-5 max-2xl:m-0 place-items-center text-2xl text-blue-200 font-serif">Développeur web</p>
                <img src="../src/image/react-logo.png" className="mr-10 max-2xl:m-0 size-30 hover:animate-spin items-center" />
                </div>
            <nav className="flex items-center max-2xl:place-content-around">
                <ul className="flex justify-around text-3xl uppercase items-center p-5 max-md:flex-col">
                    <li className="hover:bg-slate-800 p-2 rounded-md mr-5 max-md:m-0  hover:shadow-md opacity-50 hover:opacity-75"><a href="" className="text-cyan-600 hover:text-cyan-400 font-serif">Accueil</a></li>
                    <li className="hover:bg-slate-800 p-2 rounded-md mr-5 max-md:m-0  hover:shadow-md opacity-50 hover:opacity-75"><a href="" className="text-cyan-600 hover:text-cyan-400 font-serif">Profil</a></li>
                    <li className="hover:bg-slate-800 p-2 rounded-md mr-5 max-md:m-0  hover:shadow-md opacity-50 hover:opacity-75"><a href="" className="text-cyan-600 hover:text-cyan-400 font-serif">Compétences</a></li>
                    <li className="hover:bg-slate-800 p-2 rounded-md mr-5 max-md:m-0  hover:shadow-md opacity-50 hover:opacity-75"><a href="" className="text-cyan-600 hover:text-cyan-400 font-serif">Contact</a></li>
                    </ul>
                </nav>
            </div>
         </>  
    );
}
export default  Header;