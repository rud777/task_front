import React, {useEffect, useState} from 'react';
import Headers from "../components/Headers";
import Input from "../components/Input";
import {Link, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {createTaskesRequest, getTaskesListRequest, updateTaskesRequest} from "../store/actions/taskes";
import Modal from "react-modal";
import {createProjectRequest, getProjectListRequest, updateProjectRequest} from "../store/actions/project";

function Taskes(props) {
    const param = useParams()
    const dispatch = useDispatch();
    const taskesList = useSelector(store => store.taskes.taskesList);
    const [formData, setFormData] = useState({
        'ProjectId':param.id
    });
    const [errors,setErrors] = useState({});
    const [updateData, setUpdateData] = useState({});
    const [update,setUpdate]=useState(false)

    const handleChange = (key, val) => {
        setFormData({...formData, [key]: val})
    }
    const hendleClick = () => {
        dispatch(createTaskesRequest(formData, (err, data) => {

            if (err) {
                setErrors(err.errors)
                toast.error(`Not value`)
            }
            if (data?.status === 'ok') {
                window.location.href = `/taskes/${param.id}`
            }
        }))
    }
    useEffect(() => {
        dispatch(getTaskesListRequest(param.id));
    }, []);

 const hendleStatus = (taskesId) => {
     setUpdateData({...updateData, 'id': taskesId})
   setUpdate(!update)
 }
 const hendleUpdate = () => {
     dispatch(updateTaskesRequest(updateData, (err, data) => {

         if (err) {
             setErrors(err.errors)
             toast.error(`Not value`)
         }
         if (data?.status === 'ok') {
             window.location.href = `/taskes/${param.id}`
             setUpdateData({})
         }
     }))
 }

    const handleChangeUp = (key, val) => {
        setUpdateData({...updateData, [key]: val})
    }
    return (
        <div>
            <Headers/>
            <div className='body'>
                <div className='createDiv'>
                    <Input type="text" name="projectTask" placeholder="Project Task" required=""

                           value={formData.projectTask || ''}
                           onChange={(ev) => handleChange('projectTask', ev.target.value)}
                           error={errors.projectTask}
                    />
                    <select className='select' onChange={(ev)=>handleChange('status',ev.target.value)}>
                        <option value='New established'>New established</option>
                    </select>
                    <button className='createProject' onClick={hendleClick}>Create Task</button>
            </div>
                <ul className="list">
                    {taskesList.map((p) => (
                        < div className='buttens' key={p.id}>
                            <li className='liListTaskes'>{p.projectTask}</li>
                            <button className='projectUp status' onClick={()=>hendleStatus(p.id)}>{p.status}</button>
                            {update?<Modal
                                isOpen={update}
                                contentLabel={'Example Modal'}
                                overlayClassName='gg'
                                className='modal'
                                onRequestClose={hendleStatus}
                            >
                                <div className='divModal'>
                                    <select className='select selectModal' onChange={(ev)=>handleChangeUp('status',ev.target.value)}>
                                        <option value='New established'>New established</option>
                                        <option value='Continuous'>Continuous</option>
                                        <option value='Finished'>Finished</option>
                                        <option value='Accepted'>Accepted</option>
                                        <option value='Denied'>Denied</option>
                                    </select>
                                    <button onClick={hendleUpdate}>Update Status</button>
                                </div>
                            </Modal>:null}

                        </div>
                    ))}
                </ul>
        </div>
        </div>
    );
}

export default Taskes;
