export default function Header() {
  return (
    <header className="flex-md-row p-3">
      <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModalLong"><b>...</b></button>
      {/* Modal */}
      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">KONTRAKOLEKTIV<br />LISTY<br />MILOVA-NÉ/NÝM (2021)</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Umelecká akcia <b><i>Listy milova-né/ným</i></b> skúma potenciálnu trvanlivosť kultúrnej produkcie. Cieľom je vytvoriť objekt fungujúci ako umelecký artefakt a úžitkový predmet zároveň. Jeho výstupom je ručne vyrobená pohľadnica kombinujúca transferovú techniku prenášania obrazu (averzná str.) a techniku sieťotlače (reverzná strana).</p>
              <p>Na projekte participovalo 15 vybraných dobrovoľníkov, ktorí prostredníctvom ručne napísaného dopisu adresovaného svojmu <i>milovanému</i>, vytvorili obsahový základ pre tvorbu tzv. <i>Found poetry</i>, inak nazývanej aj <i>Blackout poetry</i>; dadaistickej formy automatickej poézie vznikajúcej selektívnou prácou, pri ktorej autor pracuje s vopred napísaným textom.</p>
              <p>Dielo vzniklo na základe potreby preskúmať koncept autorstva v súčasnej literárnej praxi. Chceme sa zamyslieť nad tvorbou poézie z hľadiska jej prirodzenej spontaneity. a automatickosti, pričom pri tvorení básnických útvarov využívame náhodu ako konštitučný prvok. <b>VIAC</b></p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
