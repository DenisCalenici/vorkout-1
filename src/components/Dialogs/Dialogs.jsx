import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Anton' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Nastia' },
    { id: 4, name: 'Anna' },
    { id: 5, name: 'Sasha' },
    { id: 6, name: 'Andrey' },
    { id: 7, name: 'Sveta' },
    { id: 8, name: 'Viktor' },
  ]
  let dialogsElement = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ))
  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your word?' },
    { id: 3, message: 'Hi' },
    { id: 4, message: 'Oo yes' },
    { id: 5, message: 'Love' },
    { id: 6, message: 'She' },
    { id: 7, message: 'Hi' },
    { id: 8, message: 'Yo' },
  ]
  let messageElement = props.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ))
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogsElement}</div>

      <div className={classes.messages}>{messageElement}</div>
    </div>
  )
}
export default Dialogs
