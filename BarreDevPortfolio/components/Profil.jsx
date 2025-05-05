function Profil() {
    return (
        <>
        <main className="flex flex-row justify-center bg-slate-800 border-b-cyan-300 text-cyan-100 max-2xl:flex-col max-2xl:justify-content-around" id="profil">
            <img src="../src/image/pcportimg.jpg" alt="" className=" scale-75 max-2xl:scale-75 rounded-lg shadow-2xl shadow-gray-700 hover:scale-77 duration-300 ease-in-out"/>
            <div className="content-center justify-center text-center 2xl:max-w-200 ">
                <h2 className="justify-items-around text-center text-2xl font-serif p-15 pb-0 text-wrap">Salut moi c'est Gabriel, j'ai 30 ans, et toutes mes dents, pour l'instant.</h2>
                <p  className="justify-items-around items-center text-1xl p-15 text-wrap">Ma particularité? L'efficacité, consciencieux, 
                    je travail efficacement sur des supports non palpable
                     tel que le numérique. J'aime avant tout chasser du bug, grâce a ce métier, 
                     le matin je me reveille solutionné. Je suis disposé à creer vos sites web les plus farfelus. 
                     Contactez moi au 3943 et dites "Allo".</p>    
            </div>
        </main>

        </>
    );
}


export default Profil;