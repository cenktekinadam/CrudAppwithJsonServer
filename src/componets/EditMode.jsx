

const EditMode = ({ todo, setisEdit, handleUptdate }) => {
    return (
        <form onSubmit={handleUptdate} className="d-flex justify-content-between gap-3 align-items-center ">
            <select defaultValue={todo.status} className="form-select w-25 shadow">
                <option value="İmportant">Önemli</option>
                <option value="Job">İş</option>
                <option value="Daily">Günlük</option>
            </select>
            <input defaultValue={todo.title} type="text" className="form-control w-50 shadow" />
            <div className="btn-group ml-3 ">
                <button type="submit" className="btn btn-sm btn-success">Onayla</button>
                <button type="button" onClick={() => setisEdit(false)} className="btn btn-sm btn-danger">İptal</button>
            </div>
        </form>
    )
}

export default EditMode;
