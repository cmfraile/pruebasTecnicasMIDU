import Like from "./[id]/like.component"

const FetchExample = () =>
    fetch('https://reqres.in/api/unknown',{ cache:'no-cache' })
    .then(resp => resp.json())
    .then(resp => resp.data)

interface idProps {params:{id:string}}
const Main = async({params:{id}}:idProps) => {
    const fetch:any[] = await FetchExample()
    return fetch.map( (x,i) => <Like 
                                key={i}
                                id={i}
                                text={JSON.stringify(x)}/> )
}

export default Main