import axios, { Axios } from "axios";
import { v4 as Idcreate } from "uuid";

const Form = ({ setTodos }) => {
    //? Form Gönderme olayını izlemej
    const handleSubmit = (e) => {
        //* SAYFANIN YENİLENMESİNİ ENGELLER
        e.preventDefault();
        //* FORMDAKİ VERİLERE  ERİŞİR
        const title = e.target[0].value
        const status = e.target[1].value
        //* aPİYA KAYDEDİLECEK  OLAN NESNEYİ OLUŞTURMA
        const newTodo = {
            id: Idcreate(),
            title,
            status,
            date: new Date().toLocaleDateString(),
        }
        console.log(newTodo.date);

        //!Axios ile post
        axios.post('http://localhost:3000/todos', newTodo).then(() => setTodos((prev) => [...prev, newTodo]))//*usestate metodu then ile api isteğine bağlanmalıdır ki api sorgusu başarılı olduktan sonra render edilsin
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-center gap-3 my-5">
            <input className="form-control shadow" type="text" />
            <select className="form-select w-50 shadow" >
                <option value="important">Önemli</option>
                <option value="daily">Günlük</option>
                <option value="job">İş</option>
            </select>

            <button className="btn btn-primary shadow">Gönder</button>
        </form>
    )
}

export default Form