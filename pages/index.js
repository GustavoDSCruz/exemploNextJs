import Styles from "../styles/home.module.css"

export default function HomePage(){
    return(
        <div className={Styles.home}>
            <div className={Styles.container}>
                <h1>Seja bem vindo a página principal</h1>
            </div>
        </div>
    )
}