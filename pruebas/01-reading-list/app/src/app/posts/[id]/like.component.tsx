'use client'

import { useState } from "react"

const Like = ({text}:{text:string}) => {

    const [ like , setLike ] = useState<boolean>(false);

    return(
        <div    className={`alert ${(like) ? 'alert-primary' : 'alert-danger'}`}
                onClick={() => setLike(v => !v)}
                role="alert">
            {text}
        </div>
    )

}

export default Like