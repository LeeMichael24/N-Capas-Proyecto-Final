import "./card.css";

function Card() {
    /* prueba */
    const numbers = 35;
    const date = '10/34/24';
    const time = '13:00';

  return (
    <div className="card-container">
        <h1>Casa #{numbers}</h1>
        <p>Recuerda generar el codigo QR cuando alrededor de la hora adecuada, y escaneala frente a la pluma para poder entrar a la residencia.</p>
        <div className="down-container">
            <div>
                <h2>Dia:</h2>
                <div>{date}</div>
            </div>
            <div>
                <h2>Hora:</h2>
                <div>{time}</div>
            </div>
        </div>
    </div>
  )
}

export default Card