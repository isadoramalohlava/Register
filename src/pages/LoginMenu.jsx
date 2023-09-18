import styles from './LoginMenu.module.css';
import { Link } from 'react-router-dom';
import { Photo } from '../components/Photo';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

export function LoginMenu() {
    return (
        <div id={styles.WelcomeDiv}>
            <div>
                <div id={styles.TopContainerWelcome}>
                    <h1>Bem Vindo</h1>
                    <span>Por favor coloque seus dados</span>
                    <input type="email" name="" id="" placeholder="Coloque seu email..." className={styles.wrapperInputs}/>
                    <input type="password" placeholder='Coloque sua senha...' className={styles.wrapperInputs} id={styles.inputPassword}/>
                    <input type="button" value="Continue" id={styles.buttonContinue}/>
                    <div id={styles.Or}>
                        <p>OU</p>
                    </div>
                </div>
                <div id={styles.AutoLoginDiv}>
                    <div className={styles.wrapperLogoGoogle}>
                        <FcGoogle size={24} />
                    </div>

                    <input className={styles.wrapperAutoLogin} type="button" value="Continue com Google"  />
                    
                    <div className={styles.wrapperLogoFace}>
                        <FaFacebook size={24} />
                    </div>

                    <input className={styles.wrapperAutoLogin} type="button" value="Continue com Facebook" />

                    <div className={styles.wrapperLogoApple}>
                        <BsApple size={24} />
                    </div>

                    <input className={styles.wrapperAutoLogin} type="button"
                    value="Continue com Apple"></input>


                    <p>Não possui uma conta? <Link to="/register">Cadastre-se</Link></p>
                </div>
            </div>
            <Photo/>
        </div>
    )
}