const config = {
    BaseUrl:String(import.meta.env.VITE_DOMAIN_URL),
    PublishKey:String(import.meta.env.VITE_PUBLISHABLE_KEY),
    SessionDomain:String(import.meta.env.VITE_CHECKOUT_SESSION_DOMAIN_URL),
}

export default config;