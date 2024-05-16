export default function Avatar(){
    const avatar = "https://img.freepik.com/fotos-gratis/avatar-androgino-de-pessoa-queer-nao-binaria_23-2151100265.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1715558400&semt=ais_user";
    const descricao = "Foto exemplo perfil"
    return(
        <>
            <h1>JSX com Chaves</h1>;
            <img className="avatar" src={avatar} alt={descricao} />
        </>
   );  
}