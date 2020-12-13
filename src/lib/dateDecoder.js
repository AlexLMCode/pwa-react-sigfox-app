export const dateDecoder = (unixDate) => {

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const milliseconds = unixDate * 1000;
    const dateObject = new Date(milliseconds);
    return dateObject.toLocaleDateString('es', options)

}
