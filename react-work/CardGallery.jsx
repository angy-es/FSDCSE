import react from'react'
function cardGallery(props){
    return(
        <div className="card-gallery">
            {props.children}
        </div>
    )
}
export default cardGallery;