import React, { useRef } from "react";

const TwoInputs: React.FC = () => {

    const myInput = useRef<HTMLInputElement | null>(null);
    return <div >
        <form className="container">
            <div className="row">
                <div>
                <label htmlFor="input1">Input 1</label><input id="input1" />
                </div>
            </div>
            <div className="row">
                <div>
                <label htmlFor="input1">Input 2</label><input id="input2" ref={myInput} />
                </div>
                
            </div>
            <div className="row">
                <div>
                <button onClick={(e) => {
                    if (myInput.current !== null) {
                        myInput.current.focus();
                    }

                    e.preventDefault();
                }}>Do Something</button>    
                </div>
            </div>
        </form>
    </div>
}

export default TwoInputs;