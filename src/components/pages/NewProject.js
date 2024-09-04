import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { toast } from 'react-toastify';

function NewProject(){

    const navigate = useNavigate()

    function createPost(project) {
        // initialize cost and services
        project.cost = 0;
        project.services = []

        fetch('http://localhost:5001/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then ((resp) => resp.json())
            .then((data) => {
                toast.success("Projeto criado com sucesso!", {
                    position: "bottom-right",
                    autoClose: 2000, 
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    navigate("/projects");
                }, 2000); 
            })          
          .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Novo Projeto</h1>
            <p>Crie seu projeto para adicionar serviços.</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProject