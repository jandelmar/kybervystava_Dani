export default function Header() {
  return (
    <header className="flex-md-row p-3">
      <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModalLong"><b>...</b></button>
      {/* Modal */}
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">KONTRAKOLEKTIV</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Kontra-umelecký kolektív stojí na princípoch participácie, interaktivity a dialógu. Má ambíciu spájať rôznorodých jednotlivcov za účelom vytvorenia komunitného umeleckého diela. Vznikol z potreby negovať predstavu o dôležitosti individuálneho umelca ako solitéra spoločenských ideí. Kladie si za cieľ kontrovať súčasným kultúrno-spoločenským tendenciám.</p>
              <p><b>Komunita ≠ kolektív.</b> Cítime potrebu poskytnúť umelecký priestor ľuďom z rôznych sociálnych skupín a ekonomických vrstiev. Považujeme za nevyhnutné spájať inštitucionálne a sociálne angažované umenie, dostať ho bližšie k bežným ľuďom.</p>
              <p><b>Konsenzus ≠ dialóg.</b> Chceme preskúmať tendencie súčasnej umeleckej praxe. Namiesto individuálnych referencií spoločenských problémov sa zameriavame na ich hĺbkovú emocionálnu analýzu. Namiesto “ako to básnik myslel?” sa orientujeme na “čo si o tomto probléme myslí skupina, ktorej sa tento problém týka?”.</p>
              <p><b>Kolaborácia ≠ interaktivita.</b> Pracujeme prevažne formou automatických workshopov. Preferujeme aktívny vklad všetkých zúčastnených na kreatívnom procese, než hierarchickú štruktúru vedúceho a participantov.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
