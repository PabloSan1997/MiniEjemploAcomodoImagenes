

export function OneImage({name, image_url, description}:Imagen){
    return(
        <div className="caja">
            <img src={image_url} alt={name} className="foto" />
            <h2 className="name">{name}</h2>
            <p className="description">{description}</p>
        </div>
    );
}