import { useEffect } from "react";

function Home() {
    return (
        <div>
            <h1>ELEVATE YOUR HEALTH</h1>
        </div>
    );
}

function Error() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
        script.async = true;

        // Append the script to the document body
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
<div class="visme_d" data-title="Simple Newsletter Subscription" data-url="90q747v6-simple-newsletter-subscription?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="95985"></div>
        </div>
    );
}

export { Home, Error };
