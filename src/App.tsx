interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>
}


function App() {
  return (
    <div>
      <Button title='teste1'/>
      <Button title='teste'/>
    </div>
  )
}

export default App
