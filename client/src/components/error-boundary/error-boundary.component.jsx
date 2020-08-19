import React from 'react'

import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles'

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrorOccured: false
        }
    }

    static getDerivedStateFromError(error) {
        //process error if required
        return {hasErrorOccured: true}
    }

    componentDidCatch(error, info) {
        //also can be used to do some processing
        console.log({error})
        console.log({info})
    }

    render() {
        if(this.state.hasErrorOccured) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
                    <ErrorImageText>Something has gone wrong</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;