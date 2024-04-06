import axios from "axios"
import formatDate from "./utils/FormatDate"
import Content from "./componets/Content"
import EditMode from "./componets/EditMode"
import { useState } from "react"




const ListItem = ({ todo, setTodos, allTodos }) => {
    const [isEdit, setisEdit] = useState(false)
    const handleDelete = () => {
        axios.delete(`http://localhost:3000/todos/${todo.id}`).then(() => {
            const filteredTodos = allTodos.filter((item) => item.id !== todo.id)
            setTodos(filteredTodos)
        })
    }
    //Güncelleme onaylanınca çalışır || Yeni valueleri alır ||api kaydeder||state günceller
    const handleUptdate = (e) => {
        e.preventDefault();
        // Yeni value değerleri alındı
        const title = e.target[1].value
        const status = e.target[0].value
        //Api Güncellendi
        axios.patch(`http://localhost:3000/todos/${todo.id}`, { title, status })
            //MEvcut Todonon Title ve status degerini güncelle
            .then(() => {
                const updated = { ...todo, title, status }
                //Dizideki Eski todonun yerrine Güncel Halini koy
                const newTodos = allTodos.map((item) =>
                    item.id === updated.id ? updated : item
                )
                // Apidansonra Stati güncelle 
                setTodos(newTodos)
                //düzenleme modundan çık
                setisEdit(false)
            })
    }


    const handleEdit = () => {
        setisEdit(isEdit)
    }


    return (

        <li className='relative p-3 list-group-item d-flex justify-content-between align-items-center gap-5 '>

            {isEdit ? (
                <EditMode handleUptdate={handleUptdate} setisEdit={setisEdit} todo={todo} />
            ) : (
                //
                <Content todo={todo} handleDelete={handleDelete} setisEdit={setisEdit} />
            )}
            <span className='date'>{formatDate(todo.date)}</span>

        </li>

    )
}

export default ListItem
