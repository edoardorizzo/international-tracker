export default function HowItWorks() {
    return (
        <div className="px-4 my-8">
            <div className="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#9AE19D" className="w-8 h-8" viewBox="0 0 640 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z" /></svg>
                <h2 className="text-white">Come funziona?</h2>
            </div>
            <p>
                International Tracker si basa sul sistema Svizzero, un criterio utilizzato in molti tornei di giochi di carte collezionabili come Magic, Pokémon e Yu-Gi-Oh!
                <br />
                <br />
                Consiste nell'accoppiare, nell'ambito di un torneo, di volta in volta giocatori che abbiano accumulato un eguale punteggio (oppure, in mancanza, giocatori con un punteggio vicino).
            </p>
        </div>

    )
}
