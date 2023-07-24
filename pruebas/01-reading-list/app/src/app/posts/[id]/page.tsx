import Like from "./like.component"

const FetchExample = () =>
    fetch('https://reqres.in/api/unknown',{
        next:{ revalidate:120 }
    })
    .then(resp => resp.json())
    .then(resp => resp.data)

interface idProps {params:{id:string}}
const ID = async({params:{id}}:idProps) => {
    const fetch:any[] = await FetchExample()
    return fetch.map( (x,i) => <Like key={i} text={JSON.stringify(x)}/>)
}

export default ID