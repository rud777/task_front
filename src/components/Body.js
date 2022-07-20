import React, {useEffect, useState} from 'react';
import '../assets/style/style.css'
import Modal from 'react-modal'
import {useDispatch, useSelector} from "react-redux";

import {
    createProjectRequest,
    deleteProjectRequest,
    getProjectListRequest,
    updateProjectRequest,
} from "../store/actions/project";
import Input from "./Input";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";


function Body(props) {
    const dispatch = useDispatch();
    const [getid,setGetid]=useState('')
    const [formData, setFormData] = useState({});
    const [updateData, setUpdateData] = useState({});
    const [errors,setErrors] = useState({});
    const [update,setUpdate]=useState(false)
    const projectList = useSelector(store => store.project.projectList);
    const handleChange = (key, val) => {
        setFormData({...formData, [key]: val})
    }
    const handleChangeUp = (key, val) => {
        setUpdateData({...updateData, [key]: val})
    }
    useEffect(() => {
        dispatch(getProjectListRequest());
    }, []);
const hendleClick = () => {
    dispatch(createProjectRequest(formData, (err, data) => {

        if (err) {
            setErrors(err.errors)
            toast.error(`Invalid Params`)
        }
        if (data?.status === 'ok') {
            window.location.href = '/home'
            setFormData({})
        }
    }))
}
const hendleShow = (projectId) => {

    setUpdateData({...updateData, 'id': projectId})
    setUpdate(!update)
}
const hendleUpdate = () => {
    dispatch(updateProjectRequest(updateData, (err, data) => {

        if (err) {
            setErrors(err.errors)
            toast.error(`Invalid Params`)
        }
        if (data?.status === 'ok') {
            window.location.href = '/home'
            setUpdateData({})
        }
    }))
}
const hendleDelete = (id) => {
    dispatch(deleteProjectRequest(id))
    window.location.href = '/home'
}
    return (
        <div className='body'>
            <div className='createDiv'>
            <Input type="text" name="projectTitle" placeholder="Project Title" required=""

                   value={formData.projectTitle || ''}
                   onChange={(ev) => handleChange('projectTitle', ev.target.value)}
                   error={errors.projectTitle}
            />
            <button className='createProject' onClick={hendleClick}>Create Project</button>
            </div>
            <ul className="list">
                {projectList.map((p) => (
                    < div className='buttens' key={p.id}>
                        <li className='liList'><Link className="_link" to='/taskes'>{p.projectTitle}</Link></li>
                        <button className='projectUp' onClick={()=>hendleShow(p.id)}>Update</button>
                        <button className='projectDell' onClick={()=>hendleDelete(p.id)}>Delete</button>
                        {update?<Modal
                            isOpen={update}
                            contentLabel={'Example Modal'}
                            overlayClassName='gg'
                            className='modal'
                            onRequestClose={hendleUpdate}
                        >
                            <div className='divModal'>
                            <input onChange={(ev) => handleChangeUp('projectTitle', ev.target.value)}/>
                            <button onClick={hendleUpdate}>Update</button>
                            </div>
                        </Modal>:null}
                    </div>
                ))}
            </ul>

        </div>
    );
}

export default Body;
