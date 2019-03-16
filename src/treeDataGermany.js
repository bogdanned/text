export default [
    { title: "Identität", id: "parse-id" },
    {
        title: "Check if customer exists in central DB",
        id: "central-db-check"
    },
    {
        title: "Kredit-Interview", id: "credit-reform-check",
        children: [
            {
                title: "Prüfen Sie, ob ein Kunde im zentralen KYC-System vorhanden ist"
            }
        ]
    },
    { title: "Kundeninformationen zur Zentrale", id: "credit-reform-check" }
]