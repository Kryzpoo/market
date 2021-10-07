import React from "react";

function tryRenderUnsuccessfully(isLoadingMarker,
                                 errorMessage = null,
                                 loadingMessage = 'Загрузка') {
    if (isLoadingMarker) {
        return <div className={'loader'}>{loadingMessage}</div>
    }

    if (errorMessage) {
        console.error(errorMessage)
        return <p>При загрузке произошла ошибка</p>
    }
}

const TEMPLATE_PARAMS_REGEX = /:\w*/g

function stringFromTemplate(template, parameters) {
    const matches = template.match(TEMPLATE_PARAMS_REGEX)
    matches.forEach((match) => {
        match = match.slice(1)
        const value = parameters[match]
        if (value)
            template = template.replace(`:${match}`, value)
    })
    return template
}

function getQueryParams(props) {
    const urlSearchParams = new URLSearchParams(props.location.search)
    return Object.fromEntries(urlSearchParams.entries())
}

export {tryRenderUnsuccessfully, stringFromTemplate, getQueryParams}