export default [
    { title: "Scan and Parse ID", id: "parse-id" },
    {
        title: "Check if customer exists in central DB",
        id: "central-db-check",
        children: [
            {
                title: "Check for changes in new data if customer already exists"
            },
            {
                title: "Check 2"
            },
            {
                title: "Check 3"
            }
        ]
    },
    { title: "Check if customer on blacklist", id: "blacklist-check" },
    { title: "Check credit reform", id: "credit-reform-check" },
    { title: "In Person Check", id: "credit-reform-check" },
    { title: "Video interview", id: "video-check" },
    { title: "Add customer info to central DB", id: "credit-reform-check" }
]