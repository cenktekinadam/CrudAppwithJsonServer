import { format } from 'date-fns'




const formatDate = (date) => {

    const dateObj = new Date(date)

    return dateObj.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    });

}

export default formatDate;
