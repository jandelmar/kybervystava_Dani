import Modal from "./Modal"
import Menu from "./Menu"

export default function Header() {
  return (
    <header className="flex-md-row p-3">
      <Menu />
      <Modal />
    </header>
  )
}
