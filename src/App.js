import { useState } from "react";

function App() {
  return <div>
    <Counter />
  </div>;
}


function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleChange(e) {
    setStep(Number(e.target.value));
  }

  function handleCountMinus() {
    setCount(currentCount => currentCount - step);
  }

  function handleCountAdd() {
    setCount(currentCount => currentCount + step);
  }

  function handleCountChange(e) {
    setCount(Number(e.target.value));
  }

  function getFormattedDate(x) {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + x);
    const formattedDate = futureDate.toLocaleDateString(undefined, options);
    return formattedDate;
  }

  const futureDate = getFormattedDate(count);

  return (
    <>
      <div className="container">
        <Header />
        <div>
          <input type="range" min="1" max="10" step={1} onChange={handleChange} value={step} aria-label="step range" />{step}
        </div>
        <div>
          <button onClick={handleCountMinus}>-</button>
          <input type="text" placeholder="Count" pattern="[0-9]*" onChange={handleCountChange} />
          <button onClick={handleCountAdd}>+</button>
        </div>
        <div className="date-info">
          <p>
            {isNaN(count) ? `Please enter a valid integer.` : count === 0 ? `Today is ${futureDate}`
              : count > 0 ? `${count}  days from today is ${futureDate}.`
                : `${-(count)} days ago is ${futureDate}`}
          </p>
        </div>
        {(count !== 0 || step !== 1) ? (<div>< button onClick={() => { setCount(0); setStep(1); }}>Reset</button ></div>) : null}

      </div >
    </>
  );
}

function Header() {
  return (<header>
    <h1>
      Welcome to Simple Date Calculator!
    </h1>
  </header>)
}

export default App;
