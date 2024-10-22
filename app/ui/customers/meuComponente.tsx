export function MeuComponente({
    dados
}: {
    dados: string;
}) {
    return (
        <div>
            <p>
                A localidade é: {dados}
            </p>
        </div>
    );
}
