import mainstyles from '../styles/Main.module.css';
import { useRouter } from 'next/router';

function Main() {

  const router = useRouter();

  return (
  <div className={mainstyles.containerGeralMain}>

    <figure className={mainstyles.containerGameLogo}>
      <div className={`${mainstyles.greenBar} ${mainstyles.blink1}`}></div>
      <div className={`${mainstyles.blueBar} ${mainstyles.blink2}`}></div>
      <div className={`${mainstyles.redBar} ${mainstyles.blink3}`}></div>
      <div className={`${mainstyles.yellowBar} ${mainstyles.blink4}`}></div>
    </figure>

    <h1>SIMÃO</h1>

    <nav>
      <button onClick={()=> router.push('/play')}>JOGAR</button>
      <button>RANKING</button>
    </nav>

  </div>
  );
}

export default Main;
