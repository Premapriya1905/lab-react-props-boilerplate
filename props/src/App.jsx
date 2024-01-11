import './App.css'
 
function App(props) {
  console.log(props)
  const {imageprop} = props;
  console.log(imageprop)

  return (
    <div>

        {
          imageprop.map((element)=>{
            return <img src={element.img} />

          })
        }
    </div>
  )
}

export default App