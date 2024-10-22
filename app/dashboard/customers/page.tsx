'use client'

import { MeuComponente } from "@/app/ui/customers/meuComponente";
import { useEffect, useState } from "react";

export default function Page() {

    const [localidade, setLocalidade] = useState('');

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                console.log(data);
                setLocalidade(JSON.stringify(data));
            })
            .catch(error => {
                console.error("Erro: ", error);
            });
    }, []);

    return <div>
        <h1>Customers Page</h1>
        <MeuComponente dados={localidade} />
    </div>;
}