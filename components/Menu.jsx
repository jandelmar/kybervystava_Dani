import Image from "next/image"

import menu from "../public/icons/01-icon_menu-WHITE.png"
import flip from "../public/icons/02-icon_flip-WHITE.png"
import zoom from "../public/icons/03-icon_zoom-WHITE.png"


export default function Menu() {
  return (
    <div className="row text-center py-4 align-content-center flex-wrap">
      <div className="col-md-4">
        <button id="modal" type="button" className="btn btn-outline-secondary m-3" data-toggle="modal" data-target="#modalLong">
          <Image src={menu} width="150" height="46" alt="menu"/>
        </button>
      </div>
      <div className="col-md-4">
        <button id="flip" type="button" className="btn btn-outline-secondary m-3" onClick={() => alert("will flip cards")}>
          <Image src={flip} width="150" height="46" alt="flip"/>
        </button>
      </div>
      <div className="col-md-4">
        <button id="zoom" type="button" className="btn btn-outline-secondary m-3" onClick={() => alert("will zoom cards")}>
          <Image src={zoom} width="150" height="46" alt="zoom"/>
        </button>
      </div>
    </div>
  )
}
