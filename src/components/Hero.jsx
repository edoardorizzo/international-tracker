import Link from "next/link";

export default function Hero() {
    return (
        <div
            className="hero h-[50vh] w-full bg-cover bg-center p-4 text-white flex items-center"
            style={{
                backgroundImage:
                    "linear-gradient(to right, #537A5A, transparent 200%), url('/hero-card.jpg')",
            }}>
            <div>
                <h1 className="mb-2">
                    Sfida e divertiti con i tuoi amici!
                </h1>
                <p>Prova ora International Tracker, il portale per creare e gestire i tuoi tornei di carte.</p>
                <div className="primary_button text-center mt-4">
                    <Link href="/login">Inizia subito</Link>
                </div>
            </div>
        </div>
    )
}
