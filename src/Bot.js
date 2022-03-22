import { useEffect } from 'preact/hooks'

export default function Bot() {
    useEffect(() => {
        let init = () => {
            console.log('global.FB', global.FB)
            if (global.FB) {
                global.FB?.init({
                    xfbml: true,
                    version: 'v7.0',
                })
            } else {
                setTimeout(init, 1e3)
            }
        }
        window.fbAsyncInit = init
        (function(d, s, id) {
            if (d.getElementById(id)) return
            var js, fjs = d.getElementsByTagName(s)[0]
            js = d.createElement(s)
            js.id = id
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
            js.onload = "fbAsyncInit()"
            fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', 'facebook-jssdk'))
      }, [])
    return <>
        <div id="fb-root"></div>
        <div 
            class="fb-customerchat"
            attribution="setup_tool"
            page_id="1224106861035505"
            logged_in_greeting="Hi, I'm Resistbot! Reply 'resist' to get started."
            logged_out_greeting="Hi, I'm Resistbot! Reply 'resist' to get started."
        />
    </>
}