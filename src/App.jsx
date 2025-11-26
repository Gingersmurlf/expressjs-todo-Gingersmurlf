import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="wrapper">
      <h1>Express Todo API</h1>
      <p>This is a simple frontend interface for the Express Todo API.</p>
      <p>
        Please use the provided endpoints to interact with the todo items.
      </p>
      <TodoList />
    </div>
  )
}