export function NavBar(){
    return(
        <>
            <nav className="w-full h-14 fixed flex place-content-between  place-items-center p-2 bg-[#01C9FF]">
                <a href="/"><img src="./LOGO.webp" alt="" className="w-10 h-10 rounded-4xl"/></a>
                <div className="">
                    <a href="/SignUp" className="m-2 text-[#2B3133]">Registrarse</a>
                    <a href="/LogIn" className="m-2 text-[#2B3133]">Iniciar Sesion</a>
                </div>
            </nav>
        </>
    )
}