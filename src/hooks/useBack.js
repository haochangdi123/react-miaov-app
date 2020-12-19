function useBack(history) {
    return function() {
        if (history.length) {
            history.goBack()
        } else {
            history.push('/')
        }
    }
}

export default useBack