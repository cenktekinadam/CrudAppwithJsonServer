
import { useEffect, useState } from 'react'
import Form from './componets/Form'
import Loader from './Loader'
import ListItem from './ListItem'
import axios from 'axios'



const App = () => {
  //? Todoları Tutttugumuz state
  const [todos, setTodos] = useState()

  //!APi sorguları Bileşenin ekrana gelme olayı izlenerek yapılmalıdır Bu Sayede Bellek Tasarrufu Sağlanır
  //! Api'a Todolar için fetch  ile  getisteği   

  //! Axios Yöntemi ile istek
  useEffect(() => {
    axios.get('http://localhost:3000/todos')
      .then((res) => setTodos(res.data)) // İStek başarısız olunca çalışcak metod ve hata kodu
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='container p-3 p-md-5'>
      <h1 className='text-center'> <span className='text-warning'>CRUD</span> with <span className='text-danger'>JsonServer</span></h1>

      <Form setTodos={setTodos} />
      <ul className='list-group'>

        {/* Verilerin   api sorgusu başlamadan önceki değeri nulldur dolayısıyla map fonkisyonu null değerde çalışmaz !Bunun için Koşulu renderlama işlemi gerçekleştirmeliyiz */}
        {/*!1. YÖNTEM veri yoksa loader  */}
        {!todos && <Loader />}

        {/*1.YÖNTEM! veri varsa todos  */}
        {/*   {todos && todos.map((todo) => <li>Eleman</li>)} */}
        {/* 2. YÖNTEM  OPTİONAL CHAİNİNG */}
        {todos?.map((todo) => <ListItem key={todo.id} todo={todo} setTodos={setTodos} allTodos={todos} />)}
      </ul>
    </div>

  )
}

export default App
