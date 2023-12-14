import React, { useEffect } from 'react';
import {Filter} from './Filter'
import {List} from './List'
import {useParams,useNavigate} from 'react-router-dom';


const elements = [{id:1, name:'Pablo',description:'Developer'},
{id:2, name:'Ezequiel',description:'Designer'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:3, name:'Gustavo',description:'Architect'},
{id:4, name:'Marcelo',description:'Tester'},
{id:5, name:'Alejandro',description:'Team Leader'}]

export const Main = ()=>{
    const parametros = useParams();
    const [elementsFiltered,setElementsFiltered] = React.useState(elements);
    const [filter,setFilter] = React.useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        if(parametros.term){
            setFilter(parametros.term)
        }
    },[parametros])

    useEffect(()=>{
        if(filter){
            navigate(`/items/${filter}`)
            setElementsFiltered(searchStrings())
        }else{
            navigate(`/items`)
            setElementsFiltered(elements)
        }
    },[filter])
    
    const handleChange = (e)=>{
        if(e.target.value){
            setFilter(e.target.value || '')
        }else{
            setFilter('')
        }
    }

    const searchStrings = ()=>{
        const filterAux = filter.toUpperCase();

        const search = elements.filter(item=>item.name.toUpperCase().includes(filterAux) 
                                    || item.description.toUpperCase().includes(filterAux))
        return search; 
    }

    return <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <Filter filter={filter} handleChange={handleChange}/>
        <List list = {elementsFiltered}/>
    </div>
}