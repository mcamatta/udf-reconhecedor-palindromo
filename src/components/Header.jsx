import logoUdf from '../assets/logo_udf.png'

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-4 mb-3">
      <div className="object-fit h-40">
        <img src={logoUdf} alt="logo" />
      </div>
      <h1 className="text-3xl text-blue-900 font-bold border-b-2">Autômato de reconhecimento de palavras palíndromas</h1>
    </header>
  )
}