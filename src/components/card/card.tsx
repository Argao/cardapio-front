import './card.css'
interface CardProps{
    price: number,
    title: string,
    image: string
}

export function Card({price,image,title}: CardProps){
    const formattedPrice = price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return (
        <div className="card">
            <img src={image} alt="imagem do item"/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{formattedPrice}</p>
        </div>
    )
}