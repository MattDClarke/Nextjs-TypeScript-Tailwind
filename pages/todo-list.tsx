import Layout from '../components/Layout'

const TodoListPage = () => (
  <Layout title="TODO List | TODO list app">
    <h1>TODO List</h1>
    <form id="todo-form">
      <input type="text" id="new-todo-title" />
      <button type="submit">Add</button>
    </form>
  </Layout>
)

export default TodoListPage
