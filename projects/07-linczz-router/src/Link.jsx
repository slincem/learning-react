import { BUTTONS, EVENTS } from './const'

export function navigate(href) {
    window.history.pushState({}, '', href)
    // Create custom event to let know that we've changed the url.
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
    const handleClick = (event) => {
        const isMainEvent = event.button === BUTTONS.primary //primary click
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to) //Use SPA navigation
        }
    }
    return <a onClick={handleClick} href={to} target={target} {...props}></a>
}