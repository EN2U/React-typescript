import useNewSubForm from '../hooks/useNewSubForm'
import {Sub} from '../types'



interface FormProps {
  onNewSub: (newSub: Sub) => void
}





const Form = ({onNewSub}: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (inputValues.nick) onNewSub(inputValues)
    handleClear()
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
    const {name, value} = evt.target
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    })

  }

  const handleClear = () => {
    dispatch({ type: "clear"})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValues.nick} name='nick' placeholder='nick' />
        <input type="text" onChange={handleChange} value={inputValues.subMonths} name='subMonths' placeholder='subMonths' />
        <input type="text" onChange={handleChange} value={inputValues.avatar} name='avatar' placeholder='avatar' />
        <textarea  onChange={handleChange} value={inputValues.description} name='description' placeholder='description' />
        <button onClick={handleClear}> clear form</button>
        <button > save new sub</button>
      </form>
    </div>
  )
}

export default Form