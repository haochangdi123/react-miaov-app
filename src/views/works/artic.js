import React from 'react'

function Artic (props) {
    let  { data } = props
    return(
        <div className="miiaov_article">
            <h3>{data.title}</h3>
            {
                <article className="art_cle"
                    dangerouslySetInnerHTML={{
                            __html: data.content 
                    }}>
                </article>
            }
        </div>
    )
}

export default Artic