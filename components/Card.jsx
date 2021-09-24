import Image from 'next/image'

export default function Card({front, back, alt_front = "front", alt_back = "back"}) {
    return (
        <div className="col-md-4 card-container">
          <div className="card-flip">
            <div className="card front">
              <Image src={front} width="500" height="300" alt={alt_front} className="card-img-top img-fluid" />
            </div>
            <div className="card back">
              <Image src={back} width="500" height="300" alt={alt_back} className="card-img-top img-fluid" />
            </div>
          </div>
        </div>
    )
}
