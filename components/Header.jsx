import Modal from './Modal'

export default function Header() {
  return (
    <header className="flex-md-row p-3">
      <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModalLong"><b>...</b></button>
      <Modal />
    </header>
  )
}
