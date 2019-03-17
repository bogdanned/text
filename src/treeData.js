export default [
    { title: "Scan and Parse ID", id: "parse-id" },
    {
        title: "Check if customer already has KYC",
        id: "central-db-check",
        children: [
            {
                title: "Check for changes in new data if customer already exists"
            },
            {
                title: "Blacklist update"
            },
        ]
    },
    { title: "Check if customer on blacklist", id: "blacklist-check" },
    { title: "Check credit reform", id: "credit-reform-check" },
    { title: "In Person Check", id: "credit-reform-check" },
    { title: "Video interview", id: "video-check" },
    { title: "Add customer info to central DB", id: "credit-reform-check" }
]