export const getWidth = (element, content = false) => {
    const styles = window.getComputedStyle(element)
    const width = content ? element.scrollWidth : element.clientWidth
    const borderLeft = parseFloat(styles.borderLeftWidth)
    const borderRight = parseFloat(styles.borderRightWidth)
    const padLeft = parseFloat(styles.paddingLeft)
    const padRight = parseFloat(styles.paddingRight)
    
    return width - borderLeft - borderRight - padLeft - padRight
}

export const validateUrl = (URL) => {
    const pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    
    return pattern.test(URL)
}