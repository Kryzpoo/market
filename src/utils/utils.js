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

export {tryRenderUnsuccessfully}