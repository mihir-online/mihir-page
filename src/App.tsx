import './styles/global/main.scss'

const App = ({ text }: { text: string }) => {
  return (
    <div className="app">
      <h1>Welcome to mihir.page</h1>
      <p>{text}</p>
    </div>
  )
}
export default App 