import styles from './Register.module.css';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

export function Register() {
    return (
        <div id={styles.WelcomeDiv}>
            <div id={styles.TopContainerWelcome}>
                <h1>Seus Detalhes</h1>
                <span>Por favor, nos diga seu nome e email</span>
               
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

                    <input className={styles.wrapperAutoLogin} type="button" value="Continue com Apple" />

                    
                    <div id={styles.Or}>
                        <p>OU</p>
                    </div>
            
            </div>
                <p className={styles.name}>Primeiro Nome</p>
                <input type="name" name="" id="" placeholder="Coloque seu Primeiro Nome" className={styles.wrapperInputs}/>

                <p className={styles.name}>Sobrenome</p>
                <input type="name" name="" id="" placeholder="Coloque seu Sobrenome" className={styles.wrapperInputs}/>

                <p className={styles.name}>Email</p>
                <input type="email" name="" id="" placeholder="Coloque seu Email" className={styles.wrapperInputs}/>
                <input type="button" value="Continue" id={styles.buttonContinue}/>

                <div id={styles.divProgress}>
                    <span id={styles.actualProgress} className={styles.progress}></span>
                    <span className={styles.progress}></span>
                    <span className={styles.progress}></span>
                </div>
        </div>
    )
}