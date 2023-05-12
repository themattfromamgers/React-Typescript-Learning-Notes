import React, {useState, useRef} from "react";

interface IProps {
    name: string;
    label?: string;
    description?: string;
    onSmthHappen: (name:string) => void;
}

interface Coutnnode {
    age: number | string; 
}

const Hello:React.FC<IProps> = ({name, label, description='OOP'})=>{

    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const handleChange=(event:React.FormEventHandler<HTMLDivElement>): void=>{
        
    }
    const [counts, setCounts] = useState<number|string |null|undefined>(1453)
    const [count, setCount] = useState<{age: number}>({age: 43})
    const [countes, setCountes] = useState<Coutnnode>({age: 43})
    

    return(
        <div ref={divRef}>
            <h3>HELLO</h3>
            <p> {name} {description} </p>
            
            <input type="text" ref={inputRef} />
            <button ref={buttonRef}>SEND</button>
        </div>
    )
}

export default Hello