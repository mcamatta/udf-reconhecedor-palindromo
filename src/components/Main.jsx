import { useRef, useState } from "react"

export default function Main() {
  const inputRef = useRef(null)
  const [palindrome, setPalindrome] = useState(null) // estado inicial para o palindromo
  const [btnStatus, setBtnStatus] = useState(true)

  function handleClick(){
    const inputValue = inputRef.current.value;

    if(!inputValue){
      return
    }

    const cleanedWord = inputValue.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '') // definição do alfabeto
    const reversedWord = cleanedWord.split('').reverse().join('');

    const isPalindrome = cleanedWord === reversedWord ?? false 
    
    setPalindrome(isPalindrome) // alteraçao do estado do palíndromo
  }

  function changeText({target}) {
    const isEmpty = target.value ? false : true
  
    setBtnStatus(isEmpty)

    if(isEmpty) setPalindrome(null)
  }

  return (
    <main className="flex flex-col items-center gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="font-bold text-blue-900 text-xl">Digite alguma palavra ou frase palíndroma</label>
          <input type="text" id="text" ref={inputRef} onChange={changeText} className="block bg-zinc-200 border border-zinc-400 rounded-md py-2 px-3 shadow-sm w-full"/>
        </div>
        <button onClick={handleClick} disabled={btnStatus} className="py-2 px-5 bg-blue-700 hover:bg-blue-800 rounded self-end text-white disabled:opacity-50">ENVIAR</button>
      </div>

      <div className="flex flex-col w-full items-center">
        <p className="font-bold text-blue-900 text-2xl">Resultado</p>
        <span className={`text-2xl font-bold ${palindrome ? 'text-green-700' : 'text-red-500'}`}>
          {palindrome == null ? '' : palindrome ? 'É um palíndromo' : 'Não é um palíndromo'}
        </span>
      </div>
    </main>
  )
}