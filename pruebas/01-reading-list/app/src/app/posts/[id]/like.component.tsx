'use client'

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"

const Like = ({id,text}:{id:number,text:string}) => {

    const [ like , setLike ] = useState<boolean>(false);

    return(
        <div    className={`alert ${(like) ? 'alert-primary' : 'alert-danger'}`}
                //onClick={() => setLike(v => !v)}
                role="alert">
            {text}  <Link href={`posts/${id}`}><button>test</button></Link>
        </div>
    )

}

export default Like