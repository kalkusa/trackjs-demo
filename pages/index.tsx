import React, { useState } from 'react'
import KeyPadComponent from '../components/keyPad/keyPadComponent';
import ResultComponent from '../components/resultComponent/resultComponent';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [result, setResult] = useState<string>("")

  const calculate = () => {
    var checkResult = ''
    if (result.includes('--')) {
      checkResult = result.replace('--', '+')
    }

    else {
      checkResult = result
    }

    try {
      setResult((eval(checkResult) || "") + "")
    } catch (e) {
      console.log('e: %o', e)
      setResult("error")
      throw(e)
    }
  };

  const reset = () => {
    setResult("")
  };

  const backspace = () => {
    setResult(result.slice(0, -1))
  };


  const onClick = (button: string) => {
    if (button === "=") {
      calculate()
    }

    else if (button === "C") {
      reset()
    }
    else if (button === "CE") {
      backspace()
    }

    else {
      setResult(result + button)
    }
  }

  return (
    <div className={styles.container}>
      <div className="calculator-body">
        <h1>Track JS error logging demo</h1>
        <h3>Please break calculator to log error</h3>
        
        <ResultComponent result={result} />
        <KeyPadComponent onClick={onClick} />

        <h5>Hint: 5/0 &gt; infinity &gt; delete letter &gt; evaluate</h5>
      </div>
    </div>
  )
}
