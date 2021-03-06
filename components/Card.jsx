import Image from "next/image"

export default function Card({front, back, alt_front = "front", alt_back = "back", title}) {
    return (
        <div className="card-container col-md col-sm-12">
          <div className="card-flip">
            <div className="card front">
              <Image src={front} width="500" height="333" alt={alt_front} className="card-img-top img-fluid" />
            </div>
            <div className="card back">
              <Image src={back} width="500" height="333" alt={alt_back} className="card-img-top img-fluid" />
            </div>
          </div>
          <div className="text-center d-block d-md-none">{title}</div>
        </div>
    )
}
