export default defineAppConfig({
    ui: {
        primary: 'blue',
        gray: 'cool',
        card: {
            background: 'bg-white dark:bg-gray-800',
            divide: "divide-y divide-gray-200 dark:divide-gray-700",
            ring: "ring-1 ring-gray-200 dark:ring-gray-700",
        },
        badge: {
            variant: {
                solid: "mr-1 bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 font-bold text-{color}-800 dark:text-{color}-200 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-10 dark:ring-opacity-20"
            }
        }
    }
})