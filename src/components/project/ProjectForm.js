import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

import { useEffect, useState } from 'react'

function ProjectForm() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
    fetch('http://localhost:5001/categories', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <form className={styles.form}>
            <Input 
                type='text' 
                text='Nome do Projeto' 
                name='name'
                placeholder='Insira o nome do projeto'
            />
            <Input 
                type='number' 
                text='Valor do Projeto' 
                name='value'
                placeholder='Insira o valor do projeto'
            />
            <Select 
                name='category_id' 
                text='Selecione a categoria'
                options={categories}
            />             
            <SubmitButton text='Criar' />       
            
        </form>
    )
}

export default ProjectForm